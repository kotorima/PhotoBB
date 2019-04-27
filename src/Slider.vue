<template>
   <div class="block">
    <span class="demonstration">до {{ value }} руб./час</span>
    <el-slider
      v-model="value"
      :step="10"
      :max='5000'>
    </el-slider>
  </div>
</template>

<script>
import Vuex from 'vuex';

export default {
    data() {
      return {
        value: 0,
      }
    },
    computed: Vuex.mapState(['cost']),
}
</script>