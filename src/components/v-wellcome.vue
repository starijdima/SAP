<template>

    <div class="wellcome-block">
<p class="wellcome-block__text">Вас приветствует веб-студия GSdevelopment.</p>
<p class="wellcome-block__text">Это обучающий курс по веб-разработке</p>
 <router-link :to="{name: 'vWays'}" class="from-wellcome__to-modules-btn">Далее</router-link>

  </div>
</template>
 
<script>


export default {
  name: "v-wellcome",
  components: {},
  
};
</script> 