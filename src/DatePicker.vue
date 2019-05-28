<template>
  <div>
    <el-date-picker class='calendar'
      v-model="value1"
      type="daterange"
      range-separator="—"
      start-placeholder="Прибытие"
      end-placeholder="Отбытие"
      v-bind:start-date="value1"
      v-bind:finish-date="value2">
    </el-date-picker>
  </div>
</template>

<script>
export default {
    data() {
      return {
        pickerOptions: {
          shortcuts: [{
            text: 'Last week',
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
              picker.$emit('pick', [start, end]);
            }
          }, {
            text: 'Last month',
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
              picker.$emit('pick', [start, end]);
            }
          }, {
            text: 'Last 3 months',
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
              picker.$emit('pick', [start, end]);
            }
          }]
        },
        value1: '',
        value2: ''
      };
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