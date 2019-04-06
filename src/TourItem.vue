<template>
    <div>
        <div>
            <div>
                <img src='' alt=''>
                <h3>{{ touritem }}</h3>
                <p></p>
            </div>
            <div>
                <h3></h3>
                <p>c по</p>
            </div>
        </div>
        <div>
            <div>
                <p class='roles'></p>
            </div>
        </div>

    </div>
</template>
<script>
import axios from 'axios';

export default {
   data() {
    return {
    };
  },
  props: ['touritem']
}
</script>

<style>

</style>