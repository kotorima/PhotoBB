<template>
    <div class='main-item'>
        <div class='header-item'>
            <div class='left'>
                <div>
                    <img v-if="touritem.user.ava_social" v-bind:src="touritem.user.ava_social" v-bind:alt='touritem.user.username' >
                    <img v-else src='./assets/images/ava.png' v-bind:alt='touritem.user.username' >
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
                <span v-if="!touritem.cost"> договорная </span>
                <span v-else> {{ touritem.cost }} руб./час </span>
            </div>
        </div>
        <div class='photos'>
            <button v-if='touritem.file.length>3' class='next' v-on:click="nextPhotos($event, touritem.file.length)">
                <svg width="30" height="62" viewBox="0 0 40 72" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M6.41215 1.47899C5.0476 0.109869 2.83523 0.109869 1.47068 1.47899C0.106129 2.8481 0.106129 5.06788 1.47068 6.43699L30.8932 35.958L1.47068 65.479C0.106129 66.8481 0.106128 69.0679 1.47068 70.437C2.83523 71.8061 5.0476 71.8061 6.41215 70.437L37.8502 38.8937C38.0252 38.7733 38.1917 38.635 38.3473 38.479C39.0402 37.7837 39.3812 36.8692 39.3704 35.958C39.3812 35.0468 39.0402 34.1322 38.3473 33.437C38.1917 33.281 38.0252 33.1427 37.8502 33.0222L6.41215 1.47899Z" fill="white"/>
                </svg>
            </button>
            <div  v-if='touritem.file.length > 0'>
                <img v-for='photo in touritem.file' v-bind:key='photo.id' v-bind:src="'http://photobb.dev.webant.ru/uploads/'+photo.path" v-bind:alt='photo.name'>
            </div>
            <div v-else>
                <h4>Нет фото</h4>
            </div>
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
        distance: 0,
        morePhotos: '',
        countOfPhotos: 0,
    };
  },
  methods: {
      reformatDate: function(date) {
          let newDate = new Date(date);
          let day = newDate.getDate()
          let month = newDate.getMonth() + 1
          let fullYear = newDate.getFullYear()
          let parseDate = day + "." + month + "." + fullYear;
          return parseDate;
      },
      nextPhotos: function (event, countOfPhotos) {
        let element = $(event.target);
        let parent = element.parents('.photos').find('> div');
            if(this.distance >= countOfPhotos/2*55-110) {
                
                let img = parent.children();
                if(countOfPhotos*3 <= img.length) {
                    for(let i = 0; i < countOfPhotos; i++) {
                        img[i].remove();
                    }
                    this.distance = -55;
                }
                else {
                    let morePhotos = img.clone().appendTo(parent);
                }
            }
            if(this.distance >= countOfPhotos/2*55-55) {
                this.distance += 55;
                parent.css('transform', 'translateX(-'+this.distance+'vw)');
            }
            else {
                this.distance += 55;
                parent.css('transform', 'translateX(-'+this.distance+'vw)');
                parent.css('transition', 'all 1s ease 0s');
            }

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
     font-weight: normal;
 }

 p, span, img, button, h4 {
     font-family: 'Roboto';
 }

 p {
     font-size: 0.7rem;
     margin-top: 0.5rem;
 }
 
 button {
     cursor: pointer;
 }

 h4 {
     font-weight: normal;
     color: #7E7E7E;
     margin: auto;
     padding: 5vw 5vw 9vw;
 }

 .main-item {
     display: flex;
     flex-direction: column;
     width: 70vw;
     margin: 0;
     padding: 2vw 3vw;
     background: #FFFFFF;
     box-shadow: 0px 0px 25px rgba(0, 0, 0, 0.15);
     border-radius: 8px;
     margin-bottom: 10vh;
 }

 .header-item {
     display: flex;
     flex-direction: row;
     justify-content: space-between;
     margin-bottom: 2vw;
 }

 .right {
     display: flex;
     flex-direction: column;
     text-align: right;
 }

 .left {
     display: flex;
     flex-direction: column;
 }

 .left > div {
     display: flex;
     flex-direction: row;
     margin-left: 1vw;
 }

 .left > div > img {
     width: 5vw;
     height: 5vw;
     border-radius: 50%;
     object-fit: cover;
     margin-right: 1vw;
     margin-left: -1vw;
 }

 .discription {
     display: flex;
     flex-direction: column;
 }

 .contact {
     display: flex;
     justify-content: center;
     align-self: flex-end;
     background: #EC7948;
     border-radius: 0.2rem;
     border: none;
     width: 8rem;
     height: 2rem;
     color: #FFFFFF;
     font-weight: normal;
     margin-top: 2vw;
 }

 .type {
     background: #E8E8E8;
     border-radius: 4px;
     color: #7E7E7E;
     padding: 0.4rem;
     width: 5rem;
     text-align: center;
     margin-top: 2vw;
 }

 span {
     color: #EC7948;
     padding-top: 2vw;
 }

 .photos { 
     position: relative;
     overflow: hidden;
     width: 104.6%;
 }

 .photos > div {
     display: flex;
     flex-direction: row;
     margin:0;
 }

.photos img {
    width: 200px;
    height: 200px;
    padding-right: 3vw;
    object-fit: cover;
    box-sizing:content-box;
    flex-shrink: 0;
}

.next {
    border: none;
    background: none;
    position: absolute;
    z-index: 100;
    top: 50%;
    left: 90%;
    transform: translateY(-50%);
}

@media(max-width: 1050px) {
    .photos img {
        width: 240px;
        height: 240px;
    }
}

@media(max-width: 800px) {
    .photos img {
        width: 180px;
        height: 180px;
    }
}

@media(max-width: 600px) {
    .main-item {
        width: 78%;
        padding: 6vw;
    }
    .header-item {
        flex-direction: column;
    }

    .right {
        text-align: left;
    }
    .left > div > img {
     width: 10vw;
     height: 10vw;
    }
    .contact {
        align-self: center;
    }

    h3 {
        font-size: 1rem;
    }
    .right > h3 {
        font-size: 0.85rem;
    }
}

</style>