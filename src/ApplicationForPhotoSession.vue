<template>
    <div class='main'>
        <h2>Заявка на фотосессию</h2>
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
            <el-form-item props='files' label='Фотографии для ваших клиентов' class='images'>
               <el-upload
                action="https://jsonplaceholder.typicode.com/posts/"
                list-type="picture-card"
                :auto-upload="false"
                :file-list="files"
                :on-change="handleChange"
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
        let checkValidate = (rule, value, callback, field, number) => {
            if (value === '' || value === 0) {
                callback(new Error('Заполните поле'));
            } else {
            if (number && this.ruleForm.field.length < number) {
                callback(new Error('Введите больше '+ number-1 +' символа'));
            }
            callback();
            }
        };
        return {
            dialogImageUrl: '',
            dialogVisible: false,
            files: [],
            filesId: [],
            ruleForm: {
                value: {},
                date: Date,
                cost: 0,
            },
            rules: {
                value: [
                    { validator: (rule, value, callback) => checkValidate(rule, value, callback, this.value, 2), trigger: 'blur', required: true }
                ],
                date: [
                    { validator: (rule, value, callback) => checkValidate(rule, value, callback, this.date), trigger: 'blur', required: true }
                ],
                cost: [
                    { validator: (rule, value, callback) => checkValidate(rule, value, callback, this.cost), trigger: 'blur', required: true }
                ],
                files: [
                    { required: false }
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
                this.sendData();
            } else {
                return false;
            }
        });
      },
      async sendData() {
        await this.sendImage();
        axios({
            url: 'https://cors-anywhere.herokuapp.com/http://photobb.dev.webant.ru/api/v1/tours',
            method: 'POST',
            headers: {
                    Authorization: 'Bearer ' + this.token
            },
            data: {
                google_place_id: this.ruleForm.value.value,
                location_name: this.ruleForm.value.label,
                cost: this.ruleForm.cost,
                date_create: todayDate,
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
                files: this.files,
                images: this.filesId,
            }
        })
      },
      sendImage() {
        const formData = new FormData();
        this.files.forEach(file => {
            formData.append("file", file.raw);
            axios({
                url: 'https://cors-anywhere.herokuapp.com/http://photobb.dev.webant.ru/api/v1/files',
                method: 'POST',
                headers: {
                    Authorization: 'Bearer ' + this.token
                },
                data: formData
            }).then (response => {
                this.filesId.push(response.data.id);
                console.log(this.filesId)
            })
        })
      },
      handleRemove(file, fileList) {
        console.log(file, fileList);
      },
      handleChange(file, fileList) {
        this.files = fileList;
      },
      handlePictureCardPreview(file) {
        this.dialogImageUrl = file.url;
        this.dialogVisible = true;
      },
    },
}
</script>

<style scoped>
.main {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 80%;
    margin: auto;
}

.el-form-item {
    width: 40%;
    font-family: 'Roboto';
    display: flex;
    flex-direction: column;
}

.buttonform{
    width: 100%;
    align-items: center !important;
}

.images {
    width: 100%;

}

h2 {
    margin-top: 2rem;
}

@media (max-width: 1100px) {
    .main{
        height: 85vh;
    }
}

@media (max-width: 800px) {
    .main{
        height: 80vh;
    }
}

@media (max-width: 600px) {
    .el-form {
        display: flex;
        flex-direction: column;
        width: 80%;
    }
}
</style>