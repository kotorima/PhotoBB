<template>
    <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" class="demo-ruleForm">
        <h2>Регистрация</h2>
        <div class='center'>
            <p>Зарегистрироваться через:</p>
            <a href="#"><img src="./assets/images/vk.png" alt="VK"></a>
            <div>
                <el-form-item label="Имя" prop="name" class='inputform'>
                    <el-input placeholder="Ваше имя" v-model="ruleForm.name"></el-input>
                </el-form-item>
                <el-form-item label="Фамилия" prop="surname" class='inputform'>
                    <el-input placeholder="Ваша фамилия" v-model="ruleForm.surname"></el-input>
                </el-form-item>
                <el-form-item label="E-mail" prop="email" class='inputform'>
                    <el-input type="email" placeholder="Ваш е-mail" v-model="ruleForm.email">
                    </el-input>
                </el-form-item>
                <el-form-item label="Пароль" prop="passwordOne" class='inputform'>
                    <el-input placeholder="Придумайте пароль" type="passwordOne" v-model="ruleForm.passwordOne" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item label="Пароль" prop="passwordTwo" class='inputform'>
                    <el-input placeholder="Повторите пароль" type="passwordTwo" v-model="ruleForm.passwordTwo" autocomplete="off"></el-input>
                </el-form-item>
                <input type='submit' value='Зарегистрироваться' class='one'> 
                <router-link :to="{ name: 'login'}" class='button'>
                    <input type='button' value='Войти' class='two'> 
                </router-link>
            </div>
            <router-link :to="{ name: 'reg'}"> Вы фотограф? </router-link>
        </div>
    </el-form>
</template>

<script>
export default {
    data() {
        var checkName = (rule, value, callback) => {
            if (value === '') {
                callback(new Error('Заполните поле'));
            } else {
            if (this.ruleForm.name.length < 2) {
                callback(new Error('Введите больше 1 символа'));
            }
            callback();
            }
        };
        var checkSurname = (rule, value, callback) => {
            if (value === '') {
                callback(new Error('Заполните поле'));
            } else {
            if (this.ruleForm.surname.length < 2) {
                callback(new Error('Введите больше 1 символа'));
            }
            callback();
            }
        };
        var checkEmail = (rule, value, callback) => {
            if (value === '') {
                callback(new Error('Заполните поле'));
            } else {
            if (this.ruleForm.email < 6) {
                callback(new Error('Введите больше 5 символов'));
            }
            callback();
            }
        };
        var validatePass = (rule, value, callback) => {
            if (value === '') {
            callback(new Error('Введите пароль'));
            } else {
            if (this.ruleForm.passwordTwo !== '') {
                this.$refs.ruleForm.validateField('passwordTwo');
            }
            callback();
            }
        };
        var validatePass2 = (rule, value, callback) => {
            if (value === '') {
            callback(new Error('Введите пароль снова'));
            } else if (value !== this.ruleForm.passwordOne) {
            callback(new Error('Введеные значения не совпадают!'));
            } else {
            callback();
            }
        };
        return {
            ruleForm: {
                name: '',
                surname: '',
                email: '',
                passwordOne: '',
                passwordTwo: '',
            },
            rules: {
                name: [
                    { validator: checkName, trigger: 'blur', required: true }
                ],
                surname: [
                    { validator: checkSurname, trigger: 'blur', required: true }
                ],
                email: [
                    { validator: checkEmail, trigger: 'blur', required: true }
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
    methods: {
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

    @media (max-width: 600px) {
        form{
            width: 60%;
        }
    }
</style>