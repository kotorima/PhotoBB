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
            <router-link :to="{name: 'pageinf'}" class='link active'>Информация страницы</router-link>
            <router-link :to="{name: 'gallery'}" class='link'>Фотогалерея</router-link>
        </div>
        <router-view></router-view>
    </div>
</template>

<script>
export default {
    data() {
      return {
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
  }

  .link:hover {
      color: #EC7948;
  }

  .active {
      border-bottom: 1px solid #EC7948;
  }


  @media (max-width: 600px) {
    .block5 {
      flex-direction: column;
    }
    .block4 {
      flex-direction: column;
    }
  }
</style>