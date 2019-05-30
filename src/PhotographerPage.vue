<template>
    <div class='main' id='photopage'>
        <header>
            <div>
                <div class='message'>
                    <img src='./assets/images/message.png' alt='message'>
                </div>
            </div>
            <div>
                <div class='avatar'>
                    <img src="./assets/images/camera.png" alt='camera'>
                </div>
                <div class='category'>
                    <p class='type'>nature</p>
                    <p class='type'>travel</p>
                </div>
            </div>
        </header>
        <main>
            <div>
                <h1>Андрей Иванов (AIvan)</h1>
                <el-rate
                v-model="value"
                disabled>
                </el-rate>
                <p>Фотограф на Кипре и по всему миру ,семейные, индивидуальные, и лавстори фотосессии. 
                Создание семейных видеороликов. Провезу Вас по лучшим местам для фотосъемок</p>
                <div class='contacts'>
                    <div>
                        <h3>Номер телефона</h3>
                        <span>+7 909 999 99 99</span>
                    </div>
                    <div>
                        <h3>E-mail</h3>
                        <span>andri@mail.ru</span>
                    </div>
                </div>
            </div>
            <div>
                <h3>Ближайшие поездки</h3>
                <div>
                    <div class='card'>
                        <h4>Бали, Индонезия</h4>
                        <div>
                            <p>с 20.11.2018 по 20.12.2018</p>
                            <span>1000 руб./час</span>
                        </div>
                    </div>
                    <div class='card'>
                        <h4>Петропавловск-Камчатский, Россия</h4>
                        <div>
                            <p>с 20.11.2018 по 20.12.2018</p>
                            <span>договорная</span>
                        </div>
                    </div>
                    <div class='card'>
                        <h4>Бали, Индонезия</h4>
                        <div>
                            <p>с 20.11.2018 по 20.12.2018</p>
                            <span>1000 руб./час</span>
                        </div>
                    </div>
                </div>
                <div class="block">
                    <el-pagination
                        layout="prev, pager, next"
                        :total="30">
                    </el-pagination>
                </div>
            </div>
        </main>
        <div class='block1'>
            <div class='gallery'>
                <img src='./assets/images/ras.jpg' alt='ras'>
                <img src='./assets/images/in.jpg' alt='ras'>
                <img src='./assets/images/uh.jpg' alt='ras' >
                <img src='./assets/images/63.jpg' alt='ras'>
                <img src='./assets/images/vs.jpg' alt='ras'>
                <img src='./assets/images/bt.jpg' alt='ras'>
                <img src='./assets/images/ras.jpg' alt='ras'>
                <img src='./assets/images/63.jpg' alt='ras'>
                <img src='./assets/images/pn.jpg' alt='ras'>
                <img src='./assets/images/bt.jpg' alt='ras'>
                <img src='./assets/images/uh.jpg' alt='ras'>
            </div>
            <a href='#'>Ещё</a>
        </div>
        <div class='comments'>
            <div class='item'>
                <div class='user'>
                    <img src="./assets/images/camera.png" alt='camera'>
                </div>
                <div class='block2'>
                    <div>
                        <div>
                            <h3>Андрей Иванов</h3>
                            <el-rate
                            v-model="value1"
                            disabled>
                            </el-rate>
                        </div>
                        <h3>Бали, Индонезия</h3>
                    </div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,sed do eiusmod tempor incididunt
                    ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                    nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt
                    in culpa qui officia deserunt mollit anim id est laborum.</p>
                    <span class='date'>20.11.2018</span>
                </div>
            </div>
            <div class='item'>
                <img src="./assets/images/bt.jpg" alt='camera'class='user'>
                <div class='block2'>
                    <div>
                        <div>
                            <h3>Руслан Пустоцветов</h3>
                            <el-rate
                            v-model="value2"
                            disabled>
                            </el-rate>
                        </div>
                        <h3>Петропавловск-Камчатский, Россия</h3>
                    </div>
                    <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit
                    anim id est laborum.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut 
                    aliquip ex ea commodo consequat.</p>
                    <span class='date'>14.11.2018</span>
                </div>
            </div>
            <a href='#'>Ещё</a>
        </div>
    </div>
</template>

<script>

export default {
    data() {
      return {
        value: 3.7,
        value1: 4,
        value2: 5,
      }
    }
}
</script>

<style scoped>
.type {
    background: #E8E8E8;
    border-radius: 4px;
    color: #7E7E7E;
    padding: 0.4rem;
    width: 5rem;
    text-align: center;
    margin-top: 2vw;
    margin-left: 2rem;
}

.category {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
}

.type:first-child {
    margin-left: 0;
}

.message {
    width: 3rem;
    height: 3rem;
    background: #EC7948;
    border-radius: 50%;
}

.message > img {
    display: flex;
    margin: auto;
    padding-top: 0.5rem;
    width: 1.8rem;
    height: 1.8rem;
}

.avatar {
    width: 8rem;
    height: 8rem;
    background: #DBDBDB;
    border-radius: 50%;
}

.avatar > img {
    display: flex;
    margin: auto;
    padding-top: 3rem;
    width: 2rem;
    height: 2rem;
}

header {
    background: url('assets/images/ava.png');
    display: flex;
    flex-direction: column;
    align-items: center;
}

header > div:first-child {
    margin-left: auto;
    padding: 2rem 5rem;
}

header > div:last-child {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 2rem 0;
}

main {
    display: flex;
    flex-direction: column;
    margin: auto;
    width: 80%;
    padding-left: 1rem;
}

h1 {
    text-align: center;
}

main > div:first-child {
    display: flex;
    flex-direction: column;
    align-items: center;
}

main > div:first-child > p {
    width: 65%;
    text-align: center;
}

.contacts {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    margin-top: 2rem;
    width: 70%;
}

.contacts > div {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.contacts > div > span {
    color: #4F4F4F;
}

.card {
    box-shadow: 0px 0px 25px rgba(0, 0, 0, 0.15);
    border-radius: 8px;
    padding: 0.5rem;
    width: 30%;
    margin-right: 1.5rem;
}

.card p {
    font-size: 0.7rem;
    margin: 0.5rem 0;
}

.card span {
    color: #EC7948;
    font-size: 0.85rem;
    margin: 0.5rem 0;
}

.card > div {
    display: flex;
    flex-direction:row;
    justify-content: space-between;
}

h4 {
    margin-top: 0;
}

main > div:last-child > div {
    display: flex;
    flex-direction: row;
}

main > div:last-child > h3 {
    margin-top: 4rem ;
}

.block1 {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 2rem auto;
}

.block1 > a,
.comments > a {
    display: flex;
    justify-content: center;
    font-family: 'Roboto';
    font-weight: normal;
    margin-bottom: 3rem;
    color: #EC7948;
}

.main > div > a:hover,
.comments > a:hover { 
    text-decoration: underline;
}

.gallery {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: flex-start;
    width: 80%;
    padding-left: 1rem;
}

.gallery > img {
    height: 20vw;
    width: 31vw;
    object-fit: cover;
    margin: 0 0.5rem 1rem;
}


.gallery > img:nth-child(2n) {
    width: 21vw;
}

.gallery > img:nth-child(3n) {
    width: 21vw;
}

.comments {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    width: 80%;
    margin: auto;
}

.item {
    display: flex;
    flex-direction: row;
    border-top: 1px solid #C4C4C4;
    padding: 2rem 0;
}

.user {
    width: 4rem;
    height: 4rem;
    background: #DBDBDB;
    border-radius: 50%;
    margin-right: 1rem;
    object-fit: cover;
}

.user > img {
    display: flex;
    margin: auto;
    padding-top: 1.5rem;
    width: 1rem;
    height: 1rem;
}

.block2 {
    display: flex;
    flex-direction: column;
    width: 90%;
}

.block2 > div {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
}

.block2 > div > h3 {
    text-align: right;
}

.block2 > div > div {
    display: flex;
    flex-direction: row;
    width: 50%;
}

.date {
    font-size: 0.7rem;
}

.item h3 {
    margin: 0;
    margin-right: 0.5rem;
    display: flex;
}

@media (max-width: 1100px) {
    .gallery > img {
        height: 30vw;
        width: 45vw;
    }

    .gallery > img:nth-child(2n) {
        width: 30vw;
    }

    .gallery > img:nth-child(3n) {
        width: 77vw;
    }

    .card > div {
        display: flex;
        flex-direction: column;
    }

    .card > h4 {
        margin: 0;
    }

}

@media (max-width: 900px) {
    .gallery > img {
        height: 30vw;
        width: 40vw;
    }

    .gallery > img:nth-child(2n) {
        width: 30vw;
    }

    .gallery > img:nth-child(3n) {
        width: 72vw;
    }
    
    .block2 > div > div {
        flex-direction: column;
        width: 70%;
    }

    .block2 > div > div > h3 {
        margin-bottom: 1rem;
    }

    .category {
        margin-top: 1rem;
    }

}

@media (max-width: 600px) {
    .gallery > img {
        height: 40vw;
        width: 40vw;
    }

    .gallery > img:nth-child(2n) {
        width: 30vw;
    }

    .gallery > img:nth-child(3n) {
        width: 72.5vw;
    }

    main > div:last-child > div {
        display: flex;
        flex-direction: column;
    }

    .card {
        width: 90%;
        margin-bottom: 1rem;
    }
}

@media (max-width: 450px) {
    .gallery > img {
        height: 40vw;
        width: 40vw;
    }

    .gallery > img:nth-child(2n) {
        width: 30vw;
    }

    .gallery > img:nth-child(3n) {
        width: 74vw;
    }

    .contacts {
        flex-direction: column;
        margin-top: 2rem;
    }

    .block2 {
        width: 70%;
    }

    .block2 > div {
        flex-direction: column;
    }

    .block2 > div > h3 {
        text-align: left;
        font-size: 1.05rem;
        margin-top: 0.5rem;
    }
}

</style>