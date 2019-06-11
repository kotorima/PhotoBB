<template>
<el-row :gutter="20" class='main'>
    <el-col :span="6" class="active">
        <el-row>
            <div class="circle">1</div>
            <div class="steps">
                <p>Укажите даты и место</p><p>поездки</p>
            </div>
        </el-row>
    </el-col>
    <el-col :span="7">
        <el-row>
            <div class="circle">2</div>
            <div class="steps">
                <p>Выберите понравившегося</p><p>фотографа</p>
            </div>
        </el-row>
    </el-col>
    <el-col :span="7">
        <el-row>
            <div class="circle">3</div>
            <div class="steps">
                <p>Получите профессиональную</p><p>фотоссесию с вашего отдыха</p>
            </div>
        </el-row>
    </el-col>
</el-row>
</template>

<script>
export default {
  data() {
    return {};
  }
};
</script>

<style scoped>
    .el-row {
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        padding: 1.5rem 0;
    }

    .circle {
        font-family: "Exo2";
        font-weight: normal;
        font-size: 1.2rem;
        border: #000000 solid 0.1rem;
        width: 3rem;
        height: 2.2rem;
        text-align: center;
        border-radius: 50%;
        padding-top: 0.6rem;
    }

    .steps {
        display: flex;
        flex-direction: column;
        align-self: center;
        width: 80%;
        padding-left: 1rem;
    }
    
    p {
        margin: 0;
    }

    .active {
        border-bottom: 0.15rem solid #EC7948;
    }

    .main {
        background: rgba(255, 255, 255, 0.7);
        padding: 1% 8%;
        width:100%;
    }
    @media (max-width: 900px) {
        .main {
            display: none;
        }
    }
</style>