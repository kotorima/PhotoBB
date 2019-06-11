<template>
    <div class='main'>
        <h1>Заявка на фотосессию</h1>
        <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" class="demo-ruleForm">
            <el-form-item label="Город" prop="city" class='inputform'>
                <el-select
                v-model="ruleForm.city"
                :value='ruleForm.city'
                filterable
                remote
                reserve-keyword
                placeholder="Введите местоположение"
                :remote-method="remoteMethod"
                :loading="loading"
                class = 'input-select'>
                    <el-option
                    v-for='city in list' 
                    v-bind:key="city.value"
                    :label="city.label"
                    :value="city.value">
                    </el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="Даты прибытия и отбытия" prop="date" class='inputform'>
                <el-date-picker  
                type="daterange" 
                range-separator="—" 
                start-placeholder="Прибытие"
                end-placeholder="Отбытие" 
                format="dd.MM.yyyy"
                v-model="ruleForm.date"></el-date-picker>
            </el-form-item>
            <el-form-item label="Стоимость" prop="cost" class='inputform'>
                <span v-if='ruleForm.cost>=0' class="demonstration">до {{ ruleForm.cost }} руб./час</span>
                <span v-else class="demonstration">Определите стоимость</span>
                <el-slider
                v-model="ruleForm.cost"
                :step="10"
                :max='5000'>
                </el-slider>
            </el-form-item>
            <el-form-item label='Фотографии для ваших клиентов'>
               <el-upload
                action="https://jsonplaceholder.typicode.com/posts/"
                list-type="picture-card"
                :on-preview="handlePictureCardPreview"
                :on-remove="handleRemove">
                  <i class="el-icon-plus"></i>
                </el-upload>
                <el-dialog :visible.sync="dialogVisible">
                  <img width="100%" :src="dialogImageUrl" alt="">
                </el-dialog>
            </el-form-item> 
            <el-form-item class='buttonform'>
                <el-button type="primary" @click="submitForm('ruleForm')">Оформить</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
import DatePicker from './DatePicker.vue';
import Slider from './Slider.vue';
import store from "../store";
import  axios from "axios";
import {remoteMethod} from './mixins/reformatDate.js';

export default {
    mixins: [remoteMethod],
    data() {
        let checkCity = (rule, value, callback) => {
            if (value === '') {
                callback(new Error('Заполните поле'));
            } else {
            if (this.ruleForm.city.length < 3) {
                callback(new Error('Введите больше 2 символа'));
            }
            callback();
            }
        };

        let checkDate = (rule, value, callback) => {
            if (value === '') {
                callback(new Error('Заполните поле'));
            } else {
                callback();
            }
        };

        let checkCost = (rule, value, callback) => {
            if (value === 0) {
                callback(new Error('Определите стоимость'));
            } else {
            callback();
            }
        };
        return {
            dialogImageUrl: '',
            dialogVisible: false,
            ruleForm: {
                city: '',
                date: Date,
                cost: 0,
            },
            rules: {
                city: [
                    { validator: checkCity, trigger: 'blur', required: true }
                ],
                date: [
                    { validator: checkDate, trigger: 'blur', required: true }
                ],
                cost: [
                    { validator: checkCost, trigger: 'blur', required: true }
                ],
            },
        }
    },
    components: {
        "app-date-picker": DatePicker,
        "app-slider": Slider
    },
    computed: {
        authorized: {
            get: function() {
                return store.state.authorized;
            },
            set: function(value) {
                store.dispatch('SET_AUTHORIZED', value);
            }
        },
    },
    mounted() {
        if (!this.authorized) {
            this.$router.push('/login');
        }
        else {
            this.list = this.cities.map(city => {
                return { value: city, label: city };
            });
        }
    },
    methods: {
        submitForm(formName) {
            console.log(this.ruleForm.city);
        this.$refs[formName].validate((valid) => {
          if (valid) {
              axios('http://photobb.dev.webant.ru/api/v1/tours.js', {
                  method: 'POST',
                  params: {
                      city: {
                          google_place_id: this.roleForm.city.value,
                          location_name: this.roleForm.city.label,
                      },
                      cost: this.roleForm.cost,
                  }
              })
          } else {
            return false;
          }
        });
      },
      handleRemove(file, fileList) {
        console.log(file, fileList);
      },
      handlePictureCardPreview(file) {
        this.dialogImageUrl = file.url;
        this.dialogVisible = true;
      }
    },
}
</script>

<style scoped>
.main {
    display: flex;
    flex-direction: column;
    width: 80%;
    margin: auto;
}

.el-form-item {
    width: 40%;
    font-family: 'Roboto';
}
</style>