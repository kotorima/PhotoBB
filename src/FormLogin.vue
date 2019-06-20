<template>
    <el-form v-loading='loading' :model="ruleForm" status-icon :rules="rules" ref="ruleForm" class="demo-ruleForm">
        <h2>Вход</h2>
        <div class='center'>
            <div>
                <el-form-item label="Логин" prop="login" class='inputform'>
                    <el-input type="text" placeholder="Логин / e-mail" v-model="ruleForm.login">
                    </el-input>
                </el-form-item>
                <el-form-item label="Пароль" prop="password" class='inputform'>
                    <el-input placeholder="Пароль" type="password" v-model="ruleForm.password" autocomplete="off"></el-input>
                </el-form-item>
                <input type='button' value='Войти' class='one' @click="signIn">
                <router-link :to="{ name: 'usreg'}">
                    <input type='button' value='Зарегистрироваться' class='two'>
                </router-link>
            </div>
        </div>
    </el-form>
</template>

<script>
    import apiconfig from './apiconfig'
    import axios from 'axios'
    import store from '../store'
    export default {
        data() {
            let checkValidate = (rule, value, callback, number) => {
                if (value === '') {
                    callback(new Error('Заполните поле'));
                } else {
                    if (value.field < number) {
                        callback(new Error('Введите больше '+ (number-1) +' символов'));
                    }
                    callback();
                }
            };
            return {
                ruleForm: {
                    login: '',
                    password: '',
                },
                rules: {
                    login: [
                        { validator: (rule, value, callback) => checkValidate(rule, value, callback, 6), trigger: 'blur', required: true }
                    ],
                    password: [
                        { validator: (rule, value, callback) => checkValidate(rule, value, callback, 6), trigger: 'blur', required: true }
                    ],
                }
            };
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
            userRole: {
                get: function () {
                    return store.state.userRole;
                },
                set: function (value) {
                    store.dispatch('SET_ROLE', value);
                }
            },
        },
        mounted() {
            this.loading = false;
        },
        methods: {
            signIn() {
                this.loading = true;
                store.dispatch('AUTHORIZATION', {
                    client_id: apiconfig.client_id,
                    grant_type: 'password',
                    client_secret: apiconfig.secret,
                    username: this.ruleForm.login,
                    password: this.ruleForm.password,
                })
                    .then(response => {
                        if(this.userRole[0] === 'ROLE_PHOTO'){
                            this.$router.push('/photopage');
                        }
                        else {
                            this.$router.push('/userpage');
                        }
                        this.loading = false;
                    })
                    .catch((error) => {
                        this.$message.error('Не корректный логин или пароль');
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
    @media (max-width: 600px) {
        form{
            width: 60%;
        }
    }
</style>