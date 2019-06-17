<template>
    <div class='main'>
        <h1>Заявка на фотосессию</h1>
        <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" class="demo-ruleForm">
            <el-form-item label="Город" prop="city" class='inputform'>
                <el-select
                v-model="ruleForm.value"
                filterable
                remote
                reserve-keyword
                placeholder="Введите местоположение"
                :remote-method="remoteMethod"
                :loading="loading"
                class = 'input-select'>
                    <el-option
                    v-for='city in list' 
                    :key="city.value"
                    :label="city.label"
                    :value="city">
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
            <el-form-item label='Фотографии для ваших клиентов' class='images'>
               <el-upload
                action="https://cors-anywhere.herokuapp.com/http://photobb.dev.webant.ru/api/v1/files"
                list-type="picture-card"
                :on-preview="handlePictureCardPreview"
                :on-remove="handleRemove"
                :headers= "{Authorization: 'Bearer ' + token}"
                :limit="9">
                  <i class="el-icon-plus"></i>
                </el-upload>
                <el-dialog :visible.sync="dialogVisible">
                  <img width="100%" :src="dialogImageUrl" alt="dialogImageUrl">
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
import {reformatDate} from './mixins/reformatDate.js';
import {remoteMethod} from './mixins/remoteMethod.js';

export default {
    mixins: [reformatDate, remoteMethod],
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
                value: {},
                date: Date,
                cost: 0,
            },
            rules: {
                value: [
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
        user: {
            get: function () {
                return store.state.user;
            },
            set: function (value) {
                store.dispatch('SET_USER', value);
            }
        },
        token: {
            get: function () {
                return store.state.accessToken;
            },
            set: function (value) {
                store.dispatch('SET_ACCESS_TOKEN', value);
            }
        }
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
        this.$refs[formName].validate((valid) => {
          if (valid) {
              let todayDate = Date();
              console.log(todayDate);
              axios('https://cors-anywhere.herokuapp.com/http://photobb.dev.webant.ru/api/v1/tours', {
                  method: 'POST',
                  headers: {
                        Authorization: 'Bearer ' + this.token
                  },
                  params: {
                      city: {
                          google_place_id: this.ruleForm.value.value,
                          location_name: this.ruleForm.value.label,
                      },
                      cost: this.ruleForm.cost,
                      date_create: todayDate.toISOString(),
                      start_date: this.ruleForm.date[0],
                      finish_date: this.ruleForm.date[1],
                      deadline_info: '',
                      user: {
                          id: this.user.id,
                          email: this.user.email,
                          name: this.user.name,
                          surname: this.user.surname,
                          username: this.user.username,
                          vk_auth: this.user.vk_auth,
                          roles: this.user.roles,
                      },
                      file: [{name: this.dialogImageUrl, path: this.dialogImageUrl}],
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

.images {
    width: 100%;

}
</style>