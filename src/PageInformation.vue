<template>
    <div v-loading="loading"> 
    <el-form :model="pageinf" status-icon :rules="rules" ref="pageinf" class="demo-pageinf">
        <div class="block5"> 
            <el-upload
                class="avatar-uploader"
                action="https://jsonplaceholder.typicode.com/posts/"
                :auto-upload="false"
                :on-change="onFileChange"
                :show-file-list="false"
                >
                <img v-if="imageUrl" :src="imageUrl" class="avatar">
                <img v-else src="./assets/images/camera.png" alt='camera' class="avatar-uploader-icon">
            </el-upload>
            <div class='block2'> 
                <div class='block3'> 
                    <div class='block4'>
                        <el-form-item label="Имя" prop="name" class='inputform'>
                            <el-input
                            placeholder="Ваше имя"
                            v-model="pageinf.name = changingUser.name"
                            :disabled="true"
                            v-on:click.native="available($event)">
                            </el-input>
                        </el-form-item>
                        <el-form-item label="Фамилия" prop="surname" class='inputform'>
                            <el-input
                            placeholder="Ваша фамилия"
                            v-model="pageinf.surname = changingUser.surname"
                            :disabled="true"
                            v-on:click.native="available($event)">
                            </el-input>
                        </el-form-item>
                        <el-form-item label="Логин" prop="login" class='inputform'>
                            <el-input
                            placeholder="Ваш логин"
                            v-model="pageinf.login = changingUser.username"
                            :disabled="true"
                            v-on:click.native="available($event)">
                            </el-input>
                        </el-form-item>
                        <el-form-item v-if='userRole[0] === "ROLE_PHOTO"' label="Телефон" prop="mobile" class='inputform'>
                            <el-input
                            type="tel"
                            placeholder="Ваш номер"
                            v-model="pageinf.mobile = changingUser.mobile"
                            :disabled="true"
                            v-on:click.native="available($event)">
                            </el-input>
                        </el-form-item>
                    </div>
                    <div>
                        <el-form-item label="E-mail" prop="email" class='inputform'>
                            <el-input
                            type="email"
                            placeholder="Ваш email"
                            v-model="pageinf.email = changingUser.email"
                            :disabled="true"
                            v-on:click.native="available($event)">
                            </el-input>
                        </el-form-item>
                        <el-form-item label="Пароль" prop="passwordOne" class='inputform'>
                            <el-input
                                    placeholder="Придумайте пароль"
                                    type="password"
                                    v-model="pageinf.passwordOne = changingUser.password"
                                    autocomplete="off"
                                    :disabled="true"
                                    v-on:click.native="available($event)">
                            </el-input>
                        </el-form-item>
                        <el-form-item prop="passwordTwo" class='inputform'>
                            <el-input
                                    type="password"
                                    placeholder="Повторите пароль"
                                    v-model="pageinf.passwordTwo = changingUser.password"
                                    autocomplete="off"
                                    :disabled="true"
                                    v-on:click.native="available($event)">
                            </el-input>
                        </el-form-item> 
                        <el-form-item label="О себе" class='inputform'>
                            <el-input type="textarea"
                                      v-model="pageinf.text = changingUser.description"
                                      resize='none'
                                      rows='7'
                                      :disabled="true"
                                      v-on:click.native="available($event)">
                            </el-input>
                        </el-form-item>
                    </div>
                </div>
            </div>
        </div>
    </el-form>
    </div>
</template>

<script>
import store from '../store';
import axios from 'axios';
export default {
   data() {
      let checkValidate = (rule, value, callback, field, number) => {
        if (value === '' || value === undefined) {
            callback(new Error('Заполните поле'));
        } else {
          if (value.length < number) {
            callback(new Error('Значение дожно быть больше '+ (number-1) +' символов'));
          }
          callback();
        }
      };
      
      let checkMobile = (rule, value, callback) => {
        if (value === '' || value === undefined) {
            callback(new Error('Заполните поле'));
        } else {
          if (value.length < 11 || value.length > 12) {
              callback(new Error('Значение должно быть равно 11 символам'));
          }
          callback();
        }
      };
      let validatePass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('Введите пароль'));
        } else {
          if (value !== '') {
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
        disabled: true,
        countOfClicks: 0,
        changingUser: store.state.changingUser,
        pageinf: {
          avatar: {},
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
            { validator: (rule, value, callback) => checkValidate(rule, value, callback, this.name, 2), trigger: 'blur', required: true }
          ],
          surname: [
            { validator: (rule, value, callback) => checkValidate(rule, value, callback, this.surname, 2), trigger: 'blur', required: true }
          ],
          login: [
            { validator: (rule, value, callback) => checkValidate(rule, value, callback, this.login, 6), trigger: 'blur', required: true }
          ],
          mobile: [
            { validator: checkMobile, trigger: 'blur', required: true }
          ],
          email: [
            { validator: (rule, value, callback) => checkValidate(rule, value, callback, this.email, 6), trigger: 'blur', required: true }
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
    watch: {
      changingUser: function () {
        store.dispatch('SET_CHANGING_USER', this.changingUser);
      },
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
      this.changingUser = this.user;
    },
    methods: {
      onFileChange(file) {
        const formData = new FormData();
        formData.append("file", file.raw);
        axios({
              url: "https://cors-anywhere.herokuapp.com/http://photobb.dev.webant.ru/api/v1/users/avatar",
              method: "POST",
              headers: {
                Authorization: "Bearer " + store.state.accessToken
              },
              data: formData
        }).then((response) => {
          this.imageUrl = 'http://photobb.dev.webant.ru/uploads/' + response.data.path
          store.dispatch('SET_USER_AVATAR', response.data);
        })
      },
       available(event) {
          let element = $(event.target);
          this.countOfClicks += 1;
          if (this.disabled === true) {
              element.prop('disabled', false);
              element.parent().removeClass('is-disabled');
              this.disabled = false;
          }
          else if(this.disabled === false && this.countOfClicks === 3) {
              this.countOfClicks = 0;
              element.prop('disabled', true);
              element.parent().addClass('is-disabled');
              this.disabled = true;
          }
       }
    }
}
</script>

<style scoped>
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
        border-radius: 50%;
        object-fit: cover;
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

    .block3 > .el-form-item  {
      width: 40%;
    }

    .block4 {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        width: 70vw;
    }

    .inputform,
    h3 {
        margin-left: 2rem;
    }

    h1 {
        margin-bottom: 10vh;
    }
    .el-form-item {
        font-family: 'Exo2';
    }

    @media (max-width: 600px){
      .block5 {
        flex-direction: column;
      }

      .avatar-uploader-icon  {
        padding-top: 0.8rem;
      }

      .block4,
      .block3 > div {
        margin-left: 1rem;
      }
    }

    @media (max-width: 400px) {
      .block4,
      .block3 > div {
        margin: 0;
      }
    }

</style>