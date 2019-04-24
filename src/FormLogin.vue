<template>
    <form>
        <h2>{{ headline }}</h2>
        <div>
            <p>{{ question }}</p>
            <a href="#"><img src="./assets/images/vk.png" alt="VK"></a>
            <input type='text' placeholder="Имя" v-show='auth' required autofocus>
            <input type='text' placeholder="Логин / e-mail" required>
            <input type='password' placeholder='Пароль' required>
            <input type='password' placeholder='Пароль' v-show='auth' required>
            <input type='submit' v-bind:value='text'>
            <input type='button' v-on:click='replacementForm' v-bind:value='sort'> 
            <a href='#' v-show='auth'>Вы фотограф?</a>
        </div>
    </form>
</template>

<script>
export default {
    data() {
        return {
            auth: false,
            headline: 'Воход',
            question: 'Войти через:',
            sort: 'Зарегистрироваться',
            text: 'Войти'
        };
    },
    methods: {
        replacementForm: function () {
            if(this.auth == false) {
                this.auth = true;
                this.headline = 'Регистрация';
                this.question = 'Авторизоваться через:';
                this.text = 'Зарегистрироваться';
                this.sort = 'Уже зарегистрирован';
            }
            else {
                this.auth = false;
                this.headline = 'Вход';
                this.question = 'Войти через:';
                this.text = 'Войти';
                this.sort = 'Зарегистрироваться';
            }
        }
    }
}
</script>

<style scoped>
    form {
        display: flex;
        flex-direction: column;
        width: 30%;
        background: #FFFFFF;
        box-shadow: 0px 4px 25px rgba(0, 0, 0, 0.25);
        border-radius: 8px;
        padding: 2rem;
        margin: 4rem auto;
    }

    div {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    input {
        font-family: 'Roboto';
        width: 100%;
        padding: 0.5rem;
        margin-top: 1rem;
        border: 1px solid #7E7E7E;
        box-sizing: border-box;
        border-radius: 5px;
    }

    input[type='submit'] {
        background: #4A5283;
        border: none;
        color: #ffffff;
    }

    input[type='button'] {
        border: 0.1rem solid #4A5283;
        color: #4A5283;
        background: #ffffff;
        font-weight: bold;
        margin-bottom: 1rem;
    }

    input[type='submit']:hover {
        background: #323A6D;
    }

    input[type='button'] {
        border: 0.1rem solid #323A6D;
        color: #323A6D;
    }

    h2 {
        font-weight: bold;
        margin-bottom: 1rem;
    }

    a:last-child {
        font-family: 'Roboto';
        font-weight: normal;
        color: #8A8A8A;
    }
</style>