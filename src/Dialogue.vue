<template>
    <div class='main'>
        <div class='dialogue'>
            <h2>Личные сообщения</h2>
            <div class='contacts'>
                <div class='contact'>
                    <img src='./assets/images/bt.jpg' alt='name'>
                    <div>
                        <div>
                            <h3>Анастасия Романенко</h3>
                            <span>19:40</span>
                        </div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut 
                        labore et.</p>
                    </div>
                </div>
                <div class='contact'>
                    <img src='./assets/images/in.jpg' alt='name'>
                    <div>
                        <div>
                            <h3>Илья Захаров</h3>
                            <span>19.02.2019</span>
                        </div>
                        <p>Lorem ipsum dolor sit amet</p>
                    </div>
                </div>
            </div>
        </div>
        <div class='messages'>
            <div class='block'>
                <div class='companion'>
                    <img src='./assets/images/bt.jpg' alt='name'>
                    <div>
                        <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                        pariatur.</p>
                    </div>
                </div>
                <div class='me'>
                    <img src='./assets/images/vs.jpg' alt='my'>
                    <div>
                        <p>Voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                        <p>Ut enim ad minim veniam? </p>
                    </div>
                </div>
                <div class='companion'>
                    <img src='./assets/images/bt.jpg' alt='name'>
                    <div>
                        <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim 
                        id est laborum. Duis aute irure dolor in reprehenderit in voluptate velit esse. </p>
                        <p>Ut aliquip ex ea commodo consequat?</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut 
                        labore et</p>
                    </div>
                </div>
            </div>
            <div class='option'>
                <button class='request'>Создать заявку</button>
                <div>
                    <textarea placeholder='Сообщение' row='1'></textarea>
                    <button class='send'><img src='./assets/images/send.png' alt='send'></button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style scoped>
.main {
    display: flex;
    flex-direction: row;
    width: 80%;
    margin: auto;
    padding: 2rem 0;
}

.dialogue,
.messages {
    display: flex;
    flex-direction: column;
    width: 50%;
    box-sizing: border-box;
}

.contacts {
    overflow-y: scroll;
    height: 60vh;
    padding-right: 2rem;
}

.messages {
    padding-left: 2rem;
}

.contacts img,
.messages img {
    object-fit: cover;
    border-radius: 50%;
}

.contacts img {
    width: 5rem;
    height: 5rem;
    margin-right: 1rem;
}

.messages img {
    width: 2rem;
    height: 2rem;
}

h2 {
    font-size: 1.5rem;
}

.contact {
    display: flex;
    flex-direction: row;
    padding: 1rem 0;
    border-bottom: solid 2px #E8E8E8;
}

.contact:last-child {
    border: none;
}

.contact > div > div {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
}

.contact > div {
    display: flex;
    flex-direction: column;
    width: 90%;
}

.contact h3 {
    margin: 0;
}

.companion {
    display: flex;
    flex-direction: row;
}

.companion img {
    margin-right: 1rem;
}

.companion div,
.me div {
    width: 80%;
    margin-bottom: 1rem;
}

.me {
    display: flex;
    flex-direction: row-reverse;
}

.me img {
    margin-left:  1rem;
}

.messages p {
    margin-top: 0;
}

textarea {
    resize: none;
    border: solid 1px #C4C4C4;
    border-radius:  4px 0px 0px 4px;
    width: 80%;
    height: 2.5rem;
    margin: 0;
    padding: 0.5rem;
    box-sizing: border-box;
}

textarea::placeholder {
    color: #A1A1A1;
}

.request {
    background: #E8E8E8;
    border: none;
    border-radius: 4px;
    color: #7E7E7E;
    padding: 0.5rem 1rem;
    margin-bottom: 1rem;
}

.request:hover {
    background: #4A5283;
    color: white;
}

.send {
    margin: 0;
    background: #4A5283;
    border: none;
    border-radius:  0px 4px 4px 0px;
    width: 4rem;
    height: 2.5rem;
}

.option {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
}

.option > div {
    display: flex;
    flex-direction: row;
    width: 100%;
}

.block {
    overflow-y: scroll;
    height: 50vh; 
    padding-right: 2rem;
}
</style>