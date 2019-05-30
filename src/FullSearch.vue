<template>
    <div class='main'>
        <app-search class='search'></app-search>
        <div class='one'>
            <el-checkbox-group v-model="checkboxGroup" class='category'>
                <el-checkbox-button v-for="category in categories" :label="category" :key="category">{{category}}</el-checkbox-button>
            </el-checkbox-group>
        </div>
    </div>
</template>

<script>
import Search from './Search.vue';
const categoriesOptions = ['wedding', 'Портрет', 'фыа', 'travel', 'grrrr', 'nature', '14124', 'Портретная', 'asf', 'wedd', 'Порт', 'asfasf'];

export default {
    data() {
        return {
            categories: categoriesOptions,
            checkboxGroup: [],
        }
    },
    components: {
        "app-search": Search,
    }
}
</script>

<style scoped>
.main {
    display: flex;
    flex-direction: column;
    width: 80%;
    margin: auto;
}
.search {
    width: 100%;
    margin: 3rem 0;
}

.category {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
  }

.category:not(first-child) {
    margin-left: 2rem;
}

.one {
    margin-bottom: 5rem;
}
</style>