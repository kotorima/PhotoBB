<template>
    <div class="main">
        <div class="item">
            <p>Где</p>
            <el-dropdown>
                <input placeholder="Введите место" v-model="value"></input>
                <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item>Action 1</el-dropdown-item>
                    <el-dropdown-item>Action 2</el-dropdown-item>
                    <el-dropdown-item>Action 3</el-dropdown-item>
                </el-dropdown-menu>
            </el-dropdown>
        </div>
        <div class="item">
            <p>Прибытие</p>
            <el-dropdown>
                <span>Выберете дату</span>
                <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item>Каленларь</el-dropdown-item>
                </el-dropdown-menu>
            </el-dropdown>
        </div>
        <div class="item">
            <p>Отбытие</p>
            <el-dropdown>
                <span>Выберете дату</span>
                <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item>Каленларь</el-dropdown-item>
                </el-dropdown-menu>
            </el-dropdown>
        </div>
        <button class="item button">Найти</button>
    </div>
</template>

<script>
import Picker from './Picker.vue';

export default {
    data() {
    return {
        value: ''
    };
  },
  components: {
      "app-picker": Picker
  },
  mounted() {

  },
}
</script>

<style scoped>
.main {
    display: flex;
    flex-direction: row;
    box-shadow: 0px 0px 16px rgba(0, 0, 0, 0.25);
    border-radius: 5px;
    width: 100%;
    padding: 0;
    background: #ffffff;
}

button {
    background: #CE521D;
    color: white;
    border: none;
}

p {
    font-size: 0.8rem;
    color: #8A8A8A;
}

span {
    font-family: 'Roboto'
}

input {
    border: none;
}

input:focus {
    border: none;
}

.item {
    width: 25%;
    padding: 0.5rem;
}

.item:not(:last-child) {
    border-right: 0.1rem solid rgba(226, 226, 226, 0.7);
}

button {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    background: #CE521D;
    border-radius:  0px 5px 5px 0px;
}
</style>