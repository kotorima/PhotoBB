<template> 
    <div class='main'>
        <div>
            <h2>Личный кабинет</h2>
            <el-form status-icon ref="ruleForm" class="demo-ruleForm">
                <el-form-item class='buttonform'>
                    <el-button type="primary" @click="submitForm($route.name)">Сохранить</el-button>
                </el-form-item>
            </el-form>
        </div>
        <div class='navigation'>
            <router-link :to="{name: 'pageinf'}" class='link'>Информация страницы</router-link>
        </div>
        <router-view></router-view>
    </div>
</template>

<script>
import store from "../store";

export default {
    data() {
      return {
      }
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
    },
    methods: {
      submitForm(formName) {
        this.$children[3].$refs[formName].validate((valid) => {
            if (valid) {
                //сохраняем
            } else {
                //не сохраняем
            }
        });
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

    .avatar-uploader .el-upload {
    border: none;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }
  .avatar-uploader .el-upload:hover {
    border: none;
  }
  h3 {
      margin-left: 2rem;
  }

  h1 {
      margin-bottom: 10vh;
  }
  
  .buttonform {
      display: flex;
      margin: auto;
  }

  .main {
      width: 80%;
      display: flex;
      flex-direction: column;
      margin: 2rem auto;
  }

  .main > div:first-child{
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
  }

  .navigation {
      display: flex;
      flex-direction: row;
      justify-content: space-around;
      align-items: center;
      margin: 2rem 0;
  }

  .link {
      font-weight: normal;
      font-family: 'Roboto';
      cursor: default;
  }

</style>