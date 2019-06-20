<template>
  <div>
    <el-date-picker class='calendar'
      v-model="value"
      type="daterange"
      range-separator="—"
      start-placeholder="Прибытие"
      end-placeholder="Отбытие"
      format="dd.MM.yyyy"
      value-format="yyyy-MM-dd">
    </el-date-picker>
  </div>
</template>

<script>
import store from '../store';

export default {
    data() {
      return {
        value: store.state.date,
      };
    },
    watch: {
      value: function() {
        store.dispatch('SET_DATE', this.value);
      }
    },
  };
</script>

<style scoped>
.calendar {
  border: none;
  padding: 0;
  margin: 0;
  width: 100%;
  height: 1.5rem;
  margin-right: auto;
}
</style>