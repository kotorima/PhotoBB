<template>
    <div class='main-item'>
        <div class='header-item'>
            <div class='left'>
                <div>
                    <img src='' v-bind:alt='touritem.user.username'>
                    <div class='discription'>
                        <h3>{{ touritem.user.name }} {{ touritem.user.surname }} ({{ touritem.user.username }})</h3>
                        <p>{{ touritem.user.email }}</p>
                    </div>
                </div>
                <p class='type'>{{ touritem.photos_type }}</p>
            </div>
            <div class='right'>
                <h3>{{ touritem.city.location_name }}</h3>
                <p>c {{ reformatDate(touritem.start_date) }} по {{ reformatDate(touritem.finish_date) }}</p>
                <span v-if="touritem.cost == 0"> договорная </span>
                <span v-else> {{ touritem.cost }} руб./час </span>
            </div>
        </div>
        <div>
          <img v-for='photo of touritem.file' v-bind:src='photo.name' v-bind:alt='photo.name'>
          <button class='next'>
            <svg width="40" height="72" viewBox="0 0 40 72" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M6.41215 1.47899C5.0476 0.109869 2.83523 0.109869 1.47068 1.47899C0.106129 2.8481 0.106129 5.06788 1.47068 6.43699L30.8932 35.958L1.47068 65.479C0.106129 66.8481 0.106128 69.0679 1.47068 70.437C2.83523 71.8061 5.0476 71.8061 6.41215 70.437L37.8502 38.8937C38.0252 38.7733 38.1917 38.635 38.3473 38.479C39.0402 37.7837 39.3812 36.8692 39.3704 35.958C39.3812 35.0468 39.0402 34.1322 38.3473 33.437C38.1917 33.281 38.0252 33.1427 37.8502 33.0222L6.41215 1.47899Z" fill="white"/>
            </svg>
          </button>
        </div>
        <button class='contact'>Связаться</button>
    </div>
</template>
<script>
export default {
   data() {
    return {
        date: '',
        result: '',
    };
  },
  methods: {
      reformatDate: function(date) {
          this.date = new Date(date);
          this.result = this.date.getDate() + ".0" + (this.date.getMonth() + 1)+ "." + this.date.getFullYear();
          return this.result;
      }
  },
  props: ['touritem']

}
</script>

<style scoped>
*{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
}
 h3{
     font-family:'Exo2';
 }
 p, span, img, button {
     font-family: 'Roboto';
 }
 .main-item {
     display: flex;
     flex-direction: column;
     width: 80vw;
     margin: auto;
     padding: 2rem;
     background: #FFFFFF;
     box-shadow: 0px 0px 25px rgba(0, 0, 0, 0.15);
     border-radius: 8px;
     margin-bottom: 10vh;
 }
 .header-item {
     display: flex;
     flex-direction: row;
     justify-content: space-between;
 }
 .right {
     text-align: right;
 }
 .left {
     display: flex;
     flex-direction: column;
 }
 .left > div {
     display: flex;
     flex-direction: row;
     margin-left: 1rem;
 }
 .discription {
     display: flex;
     flex-direction: column;
 }
 .contact {
     background: #EC7948;
     border-radius: 0.2rem;
     border: none;
     width: 8rem;
     height: 2rem;
     color: #FFFFFF;
     font-weight: normal;
 }
 .type {
     background: #E8E8E8;
     border-radius: 4px;
     color: #7E7E7E;
     font-size: 0.7rem;
     padding: 0.4rem;
     width: 5rem;
     text-align: center;
 }
 span {
     color: #EC7948
 }
</style>