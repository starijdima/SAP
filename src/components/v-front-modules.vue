<template>
    <div class="scroll-modules">
  <div class="modules-block">
      <router-link :to="{name: 'vWays'}" class="to-modules__link">
          <img class="to-modules__link-img" v-bind:src="backArrow" alt /><p class="to-modules__link-text">Выбрать другое направление</p></router-link>
      <h2 class="module-title">FRONT-END DEVELOP</h2>
    <router-link :to="{name: 'vModuleOne'}" class="modules-block__item">
      <div class="background-blur__block"><p class="module-number">Модуль 1</p><p class="module-name">Сборка проекта</p></div>
      <div class="modules-block__item-decription">
        <p>Модуль содержит как теоретическую, так и практическую часть, позволяющая освоить этапы создания проекта</p>
      </div>
   </router-link>
   <router-link :to="{name: 'vModuleTwo'}" class="modules-block__item">
      <div class="background-blur__block"><p class="module-number">Модуль 2</p><p class="module-name">Изучение макета сайта</p></div>

      <div class="modules-block__item-decription">
        <p>В данном модуле содержится информация о секретах логики и видения макета для дальнейшего планирования HTML-кода</p>
      </div>
    </router-link>
   <router-link :to="{name: 'vModuleThree'}" class="modules-block__item">
      <div class="background-blur__block"><p class="module-number">Модуль 3</p><p class="module-name">Таблицы стилей</p></div>

      <div class="modules-block__item-decription">
        <p>Модуль о главных вопросах о CSS: подключение стилей, шрифтов, различие селекторов</p>
      </div>
    </router-link>
    <router-link :to="{name: 'vModuleFour'}" class="modules-block__item">
      <div class="background-blur__block"><p class="module-number">Модуль 4</p><p class="module-name">CSS Flexbox</p></div>

      <div class="modules-block__item-decription">
        <p>Модуль для изучения верстки на CSS Flexbox </p>
      </div>
    </router-link>
      <router-link :to="{name: 'vModuleFive'}" class="modules-block__item">
          <div class="background-blur__block"><p class="module-number">Модуль 5</p><p class="module-name">CSS Отступы</p></div>

          <div class="modules-block__item-decription">
              <p>Модуль для изучения отступов на CSS</p>
          </div>
      </router-link>

  </div>
    </div>
</template>
<style scoped>
    @media screen and (max-width:425px) {
        .module-title {
            position: absolute;
            width: 90%;
            top: 10rem;
            text-align: center;
            color: white;
            font-size: 2.1875rem;
        }
    }


</style>
<script>
import firstModuleImg from "@/assets/first-module-img.png";
import secondModuleImg from "@/assets/second-module-img.png";
import thirdModuleImg from "@/assets/third-module-img.png";
import fourthModuleImg from "@/assets/fourth-module-img.png";
import backArrow from "@/assets/back-arrow.svg";

export default {
  name: "v-modules",
  components: {},
  data: function () {
    return {
      firstModuleImg,
      secondModuleImg,
      thirdModuleImg,
      fourthModuleImg,
        backArrow
    };
  },
};
</script>
