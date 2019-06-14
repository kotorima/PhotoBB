<template>
    <el-form :model="pageinf" status-icon :rules="rules" ref="pageinf" class="demo-pageinf">
            <div class='block'>
                <el-upload
                class="background-uploader"
                action="https://jsonplaceholder.typicode.com/posts/"
                :show-file-list="false"
                :on-success="handleBackgroundSuccess"
                :before-upload="beforeBackgroundUpload">
                <img v-if="backgroundUrl" :src="backgroundUrl" class="background">
                <img v-else src="./assets/images/camera.png" alt='camera' class="background-uploader-icon">
                </el-upload>
            </div>
            <div class="block5"> 
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
                                v-model="pageinf.name = user.name"
                                :disabled="true">
                                </el-input>
                            </el-form-item>
                            <el-form-item label="Фамилия" prop="surname" class='inputform'>
                                <el-input
                                placeholder="Ваша фамилия"
                                v-model="pageinf.surname = user.surname"
                                :disabled="true">
                                </el-input>
                            </el-form-item>
                            <el-form-item label="Логин" prop="login" class='inputform'>
                                <el-input
                                placeholder="Ваш логин"
                                v-model="pageinf.login = user.username"
                                :disabled="true">
                                </el-input>
                            </el-form-item>
                            <el-form-item v-if='userRole[0] === "ROLE_PHOTO"' label="Телефон" prop="mobile" class='inputform'>
                                <el-input
                                type="tel"
                                placeholder="Ваш номер"
                                v-model="pageinf.mobile = user.mobile"
                                :disabled="true">
                                </el-input>
                            </el-form-item>
                        </div>
                        <div>
                            <el-form-item label="E-mail" prop="email" class='inputform'>
                                <el-input
                                type="email"
                                placeholder="Ваш email"
                                v-model="pageinf.email = user.email"
                                :disabled="true">
                                </el-input>
                            </el-form-item>
                            <el-form-item label="Пароль" prop="passwordOne" class='inputform'>
                                <el-input
                                        placeholder="Придумайте пароль"
                                        type="password"
                                        v-model="pageinf.passwordOne = user.password"
                                        autocomplete="off"
                                        :disabled="true">
                                </el-input>
                            </el-form-item>
                            <el-form-item prop="passwordTwo" class='inputform'>
                                <el-input
                                        type="password"
                                        placeholder="Повторите пароль"
                                        v-model="pageinf.passwordTwo = user.password"
                                        autocomplete="off"
                                        :disabled="true">
                                </el-input>
                            </el-form-item> 
                            <el-form-item label="О себе" class='inputform'>
                                <el-input type="textarea" v-model="pageinf.text = user.description" resize='none' rows='7' :disabled="true">
                                </el-input>
                            </el-form-item>
                        </div>
                    </div>
                </div>
            </div>
        </el-form>
</template>

<script>
import store from '../store';

export default {
   data() {
      let checkName = (rule, value, callback) => {
        if (value === '') {
            callback(new Error('Заполните поле'));
        } else {
          if (this.pageinf.name.length < 2) {
            callback(new Error('Введите больше 1 символа'));
          }
          callback();
        }
      };
      let checkSurname = (rule, value, callback) => {
        if (value === '') {
            callback(new Error('Заполните поле'));
        } else {
          if (this.pageinf.surname.length < 2) {
              callback(new Error('Введите больше 1 символа'));
          }
          callback();
        }
      };
      let checkLogin = (rule, value, callback) => {
        if (value === '') {
            callback(new Error('Заполните поле'));
        } else {
          if (this.pageinf.login < 7) {
              callback(new Error('Введите больше 5 символов'));
          }
          callback();
        }
      };
      let checkMobile = (rule, value, callback) => {
        if (value === '') {
            callback(new Error('Заполните поле'));
        } else {
          if (this.pageinf.mobile.length < 11 || this.pageinf.mobile.length > 12) {
              callback(new Error('Значение должно быть равно 11 символам'));
          }
          callback();
        }
      };
      let checkEmail = (rule, value, callback) => {
        if (value === '') {
            callback(new Error('Заполните поле'));
        } else {
          if (this.pageinf.email < 6) {
              callback(new Error('Введите больше 5 символов'));
          }
          callback();
        }
      };
      let validatePass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('Введите пароль'));
        } else {
          if (this.pageinf.passwordTwo !== '') {
            this.$refs.pageinf.validateField('passwordTwo');
          }
          callback();
        }
      };
      let validatePass2 = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('Введите пароль снова'));
        } else if (value !== this.pageinf.passwordOne) {
          callback(new Error('Введеные значения не совпадают!'));
        } else {
          callback();
        }
      };
      return {
        imageUrl: '',
        backgroundUrl: '',
        checkboxGroup: [],
        pageinf: {
          name: '',
          surname: '',
          login: '',
          mobile: '',
          email: '',
          passwordOne: '',
          passwordTwo: '',
            text: '',
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
          email: [
            { validator: checkEmail, trigger: 'blur', required: true }
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
    computed: {
        userRole: {
            get: function () {
                return store.state.userRole;
            },
            set: function (value) {
                store.dispatch('SET_USER_ROLE', value);
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
    },
    methods: {
      handleBackgroundSuccess(res, file) {
        this.backgroundUrl = URL.createObjectURL(file.raw);
      },
      beforeBackgroundUpload(file) {
        const isJPG = file.type === 'image/jpeg';
        const isLt2M = file.size / 2024 / 2024 < 4;

        if (!isJPG) {
          this.$message.error('Background picture must be JPG format!');
        }
        if (!isLt2M) {
          this.$message.error('Avatar picture size can not exceed 4MB!');
        }
        return isJPG && isLt2M;
      },
      handleAvatarSuccess(res, file) {
        this.imageUrl = URL.createObjectURL(file.raw);
      },
      beforeAvatarUpload(file) {
        const isJPG = file.type === 'image/jpeg';
        const isLt2M = file.size / 2024 / 2024 < 4;

        if (!isJPG) {
          this.$message.error('Avatar picture must be JPG format!');
        }
        if (!isLt2M) {
          this.$message.error('Avatar picture size can not exceed 4MB!');
        }
        return isJPG && isLt2M;
      }, 
    }
}
</script>

<style scoped>
    .background-uploader .el-upload {
        border: none;
        cursor: pointer;
        position: relative;
        overflow: hidden;
    }
    .background-uploader .el-upload:hover {
        border: none;
    }
    .background-uploader-icon {
        width: 2rem;
        height: 2rem;
    }
    .background {
        width: 100%;
        height: 18rem;
        display: block;
        object-fit: cover;
    }

    .block {
        width: 100%;
        background: #DBDBDB;
    }

    .avatar-uploader .el-upload {
        border: none;
        cursor: pointer;
        position: relative;
        overflow: hidden;
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

    .block5 {
        display: flex;
        flex-direction: row;
        margin-top: 2rem;
    }

    .block2 {
        display: flex;
        flex-direction: column;
    }

    .block3 {
        width: 70vw;
    }

    .block4 {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        width: 70vw;
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

    .el-form {
        height: 80rem;
    }
</style>