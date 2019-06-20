<template>
    <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" class="demo-ruleForm">
        <h2>Регистрация</h2>
        <div class='center'>
                <el-form-item label="Имя" prop="name" class='inputform'>
                    <el-input placeholder="Ваше имя" v-model="ruleForm.name"></el-input>
                </el-form-item>
                <el-form-item label="Фамилия" prop="surname" class='inputform'>
                    <el-input placeholder="Ваша фамилия" v-model="ruleForm.surname"></el-input>
                </el-form-item>
                <el-form-item label="Логин" prop="login" class='inputform'>
                    <el-input type="login" placeholder="Ваш логин" v-model="ruleForm.login">
                    </el-input>
                </el-form-item>
                <el-form-item label="E-mail" prop="email" class='inputform'>
                    <el-input type="email" placeholder="Ваш е-mail" v-model="ruleForm.email">
                    </el-input>
                </el-form-item>
                <el-form-item label="Пароль" prop="passwordOne" class='inputform'>
                    <el-input placeholder="Придумайте пароль" type="password" v-model="ruleForm.passwordOne" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item label="Пароль" prop="passwordTwo" class='inputform'>
                    <el-input placeholder="Повторите пароль" type="password" v-model="ruleForm.passwordTwo" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item class='conf'>
                    <el-checkbox v-model="checked" v-on:click='buttonUndisebled'>
                        <a href="../politikaconf.pdf" >Я согласен с политикой конфиденциальности</a>
                    </el-checkbox>
                </el-form-item>
                <input type='submit' value='Зарегистрироваться' class='one is-disabled' v-on:click="registration" :disabled="true">
                <router-link :to="{ name: 'login'}" class='button'>
                    <input type='button' value='Войти' class='two'> 
                </router-link>
            <!--<router-link :to="{ name: 'reg'}"> Вы фотограф? </router-link>-->
        </div>
    </el-form>
</template>

<script>
import apiconfig from './apiconfig';
import axios from 'axios';
import store from '../store';

export default {
    data() {
        let checkValidate = (rule, value, callback, number) => {
            if (value === '') {
                callback(new Error('Заполните поле'));
            } else {
            if (value.length < number) {
                callback(new Error('Введите больше '+ (number-1) +' символа'));
            }
            callback();
            }
        };
        let validatePass = (rule, value, callback) => {
            if (value === '') {
            callback(new Error('Введите пароль'));
            } else {
            if (this.ruleForm.passwordTwo !== '') {
                this.$refs.ruleForm.validateField('passwordTwo');
            }
            callback();
            }
        };
        let validatePass2 = (rule, value, callback) => {
            if (value === '') {
            callback(new Error('Введите пароль снова'));
            } else if (value !== this.ruleForm.passwordOne) {
            callback(new Error('Введеные значения не совпадают!'));
            } else {
            callback();
            }
        };
        return {
            registrationPath: store.state.registrationPath,
            checked: false,
            ruleForm: {
                name: '',
                surname: '',
                login: '',
                email: '',
                passwordOne: '',
                passwordTwo: '',
            },
            rules: {
                name: [
                    { validator: (rule, value, callback) => checkValidate(rule, value, callback, 2), trigger: 'blur', required: true }
                ],
                surname: [
                    { validator: (rule, value, callback) => checkValidate(rule, value, callback, 2), trigger: 'blur', required: true }
                ],
                login: [
                    { validator: (rule, value, callback) => checkValidate(rule, value, callback, 2), trigger: 'blur', required: true }
                ],
                email: [
                    { validator: (rule, value, callback) => checkValidate(rule, value, callback, 6), trigger: 'blur', required: true }
                ],
                passwordOne: [
                    { validator: validatePass, trigger: 'blur', required: true }
                ],
                passwordTwo: [
                    { validator: validatePass2, trigger: 'blur', required: true }
                ],
          }
        };
    },
    watch: {
        registrationPath: function () {
            store.dispatch('SET_REGISTRATION_PATH', this.registrationPath);
        },
    },
    computed: {
        loading: {
            get: function () {
                return store.state.loading;
            },
            set: function (value) {
                store.dispatch('SET_LOADING', value);
            }
        },
    },
    mounted() {
        this.registrationPath = this.$route.path;
        this.loading = false;
    },
    methods: {
        buttonUndisebled() {
            let button = $('.one');
            console.log(button);
            if (this.checked === true) {
              button.prop('disabled', false);
              button.parent().removeClass('is-disabled');
            }
            else if(this.checked === false) {
                button.prop('disabled', true);
                button.parent().addClass('is-disabled');
            }
        },
        registration() {
            this.loading = true;
            store.dispatch('REGISTRATION', {
                client_id: apiconfig.client_id,
                grant_type: 'password',
                client_secret: apiconfig.secret,
                name: this.ruleForm.name,
                surname: this.ruleForm.surname,
                username: this.ruleForm.login,
                email: this.ruleForm.email,
                password: this.ruleForm.passwordTwo,
            })
                .then(response => {
                    store.dispatch('AUTHORIZATION', {
                        client_id: apiconfig.client_id,
                        grant_type: 'password',
                        client_secret: apiconfig.secret,
                        username: this.ruleForm.login,
                        password: this.ruleForm.passwordTwo,
                    })
                        .then(answer => {
                            this.$router.push('/userpage');
                            this.loading = false;
                        })
                })
                .catch((error) => {
                    this.$message.error('Регистрация не удалась');
                    this.loading = false;
                })
        }
    }
}
</script>

<style scoped>
    form {
        display: flex;
        flex-direction: column;
        width: 40%;
        background: #FFFFFF;
        box-shadow: 0px 4px 25px rgba(0, 0, 0, 0.25);
        border-radius: 8px;
        padding: 2rem;
        margin: 10rem auto;
    }

    .el-form-item {
      font-family: 'Exo2';
  }

    .center {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    input {
        font-family: 'Roboto';
        width: 100%;
        padding: 0.5rem;
        margin-top: 1rem;
        border: 1px solid #7E7E7E;
        box-sizing: border-box;
        border-radius: 5px;
    }

    .button {
        width: 100%;
    }

    .one {
        background: #4A5283;
        border: 0.1rem solid #4A5283;
        color: #ffffff;
    }

    .two {
        border: 0.1rem solid #4A5283;
        color: #4A5283;
        background: #ffffff;
        font-weight: bold;
        margin-bottom: 1rem;
        
    }

    .one:hover {
        background: #323A6D;
    }

    .two {
        border: 0.1rem solid #323A6D;
        color: #323A6D;
    }

    h2 {
        font-weight: bold;
        margin-bottom: 1rem;
    }

    a:last-child {
        font-family: 'Roboto';
        font-weight: normal;
        color: #8A8A8A;
    }

    .conf {
        display: flex;
        flex-direction: row !important;
    }

    .conf a {
        font-size: 0.8rem;
    }

    .conf a:hover {
        color: #EC7948;
    }

    .is-disabled {
        background-color: #7089B2;
        border-color: #7089B2;
    }

    @media (max-width: 600px) {
        form{
            width: 60%;
        }
    }
</style>