<template>
    <div class="mainphoto">
        <h1>Регистрация фотографа</h1>
            <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" class="demo-ruleForm">
                <div class="block1"> 
                <el-upload
                class="avatar-uploader"
                action="https://jsonplaceholder.typicode.com/posts/"
                :show-file-list="false"
                :on-success="handleAvatarSuccess"
                :before-upload="beforeAvatarUpload">
                <img v-if="imageUrl" :src="imageUrl" class="avatar">
                <img v-else src="./assets/images/camera.png" alt='camera' class="avatar-uploader-icon">
            </el-upload>
            <div class='block2'> 
                <div class='block3'> 
                    <div class='block4'>
                        <el-form-item label="Имя" prop="name" class='inputform'>
                            <el-input
                            placeholder="Ваше имя"
                            v-model="ruleForm.name">
                            </el-input>
                        </el-form-item>
                        <el-form-item label="Фамилия" prop="surname" class='inputform'>
                            <el-input
                            placeholder="Ваша фамилия"
                            v-model="ruleForm.surname">
                            </el-input>
                        </el-form-item>
                        <el-form-item label="Логин" prop="login" class='inputform'>
                            <el-input
                            placeholder="Ваш логин"
                            v-model="ruleForm.login">
                            </el-input>
                        </el-form-item>
                        <el-form-item label="Телефон" prop="mobile" class='inputform'>
                            <el-input
                            type="tel"
                            placeholder="Ваш номер"
                            v-model="ruleForm.mobile">
                            </el-input>
                        </el-form-item>
                    </div>
                    <div>
                        <el-form-item label="E-mail" prop="email" class='inputform'>
                            <el-input
                            type="email"
                            placeholder="Ваш email"
                            v-model="ruleForm.email">
                            </el-input>
                        </el-form-item>
                        <el-form-item label="Пароль" prop="passwordOne" class='inputform'>
                            <el-input placeholder="Придумайте пароль" type="password" v-model="ruleForm.passwordOne" autocomplete="off"></el-input>
                        </el-form-item>
                        <el-form-item prop="passwordTwo" class='inputform'>
                            <el-input type="password" placeholder="Повторите пароль" v-model="ruleForm.passwordTwo" autocomplete="off"></el-input>
                        </el-form-item>
                        <el-form-item label="О себе" class='inputform'>
                            <el-input type="textarea" v-model="text" resize='none' rows='7'></el-input>
                        </el-form-item>
                    </div>
                </div>
                <h3>Области ваших фотосъемок</h3>
                <el-checkbox-group v-model="checkboxGroup" class='category'>
                    <el-checkbox-button v-for="category in categories" :label="category" :key="category">{{category}}</el-checkbox-button>
                </el-checkbox-group>
                <el-form-item class='buttonform'>
                    <el-button type="primary" @click="submitForm('ruleForm')">Зарегистрироваться</el-button>
                </el-form-item>
            </div>
        </div>
        </el-form>
  </div>
</template>
<script>
const categoriesOptions = ['wedding', 'Портрет', 'фыа', 'travel', 'grrrr', 'nature', '14124', 'Портретная', 'asf', 'wedd', 'Порт', 'asfasf'];
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
      var checkLogin = (rule, value, callback) => {
        if (value === '') {
            callback(new Error('Заполните поле'));
        } else {
          if (this.ruleForm.login < 7) {
              callback(new Error('Введите больше 5 символов'));
          }
          callback();
        }
      };
      var checkMobile = (rule, value, callback) => {
        if (value === '') {
            callback(new Error('Заполните поле'));
        } else {
          if (this.ruleForm.mobile < 11 || this.ruleForm.mobile > 12) {
              callback(new Error('Значение должно быть равно 11 символам'));
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
        imageUrl: '',
        text: '',
        categories: categoriesOptions,
        checkboxGroup: [],
        ruleForm: {
          name: '',
          surname: '',
          login: '',
          mobile: '',
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
          login: [
            { validator: checkLogin, trigger: 'blur', required: true }
          ],
          mobile: [
            { validator: checkMobile, trigger: 'blur', required: true }
          ],
          login: [
            { validator: checkLogin, trigger: 'blur', required: true }
          ],
          passwordOne: [
            { validator: validatePass, trigger: 'blur', required: true }
          ],
          passwordTwo: [
            { validator: validatePass2, trigger: 'blur', required: true }
          ]
        },
      };
    },
    methods: {
      handleAvatarSuccess(res, file) {
        this.imageUrl = URL.createObjectURL(file.raw);
      },
      beforeAvatarUpload(file) {
        const isJPG = file.type === 'image/jpeg';
        const isLt2M = file.size / 1024 / 1024 < 2;

        if (!isJPG) {
          this.$message.error('Avatar picture must be JPG format!');
        }
        if (!isLt2M) {
          this.$message.error('Avatar picture size can not exceed 2MB!');
        }
        return isJPG && isLt2M;
      },
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            alert('submit!');
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
    }
}
</script>

<style>
  .avatar-uploader .el-upload {
    border: none;
    background: #DBDBDB;
    border-radius: 50%;
    cursor: pointer;
    position: relative;
    overflow: hidden;
    width: 160px;
    height: 160px;
    line-height: 160px;
  }
  .avatar-uploader .el-upload:hover {
    border: none;
  }
  .avatar-uploader-icon {
    display: flex;
    margin: auto;
    padding-top: 3.8rem;;
    width: 2rem;
    height: 2rem;
  }
  .avatar {
    width: 160px;
    height: 160px;
    display: block;
    object-fit: cover;
  }
 
 .mainphoto {
      display: flex;
      flex-direction: column;
      margin: 5vh 10vw;
  }

  .block1 {
      display: flex;
      flex-direction: row;
  }

  .block2 {
      display: flex;
      flex-direction: column;
  }
  .block4 {
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
  }

  .inputform,
  .category,
  h3 {
      margin-left: 2rem;
  }

  h1 {
      margin-bottom: 10vh;
  }

  .category {
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      justify-content: center;
  }

  .type {
     background: #E8E8E8;
     border: none;
     border-radius: 4px;
     color: #7E7E7E;
     padding: 0.4rem;
     width: 5.5rem;
     text-align: center;
     margin-top: 2vw;
     margin-left: 0.5rem;
  }

  .el-form-item {
      font-family: 'Exo2';
  }
  
  .buttonform {
      display: flex;
      margin: 5vh auto;
  }

  @media (max-width: 600px) {
    .block1 {
      flex-direction: column;
    }
    .block4 {
      flex-direction: column;
    }
  }
</style>