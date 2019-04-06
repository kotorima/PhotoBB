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
                <p>c {{ touritem }} по {{ touritem }}</p>
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

export default {
   data() {
    return {
    };
  },
  props: ['touritem']

}
</script>

<style scoped>

</style>