<template>
   <div class="block">
    <span class="demonstration">до {{ value }} руб./час</span>
    <el-slider
      v-model="value"
      :value="value"
      :step="10"
      :max='5000'>
    </el-slider>
  </div>
</template>

<script>
import store from '../store'


export default {
    data() {
      return {
        value: store.state.cost,
      }
    },
    watch: {
      value: function() {
        store.dispatch('SET_COST', this.value)
      }
    },
}
</script>