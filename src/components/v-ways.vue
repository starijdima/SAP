<template>

    <div class="wellcome-block min-margin">
        <p class="wellcome-block__text">Выберите направление обучения</p>
        <div class="modules-block non-margin">
        <router-link :to="{name: 'vModules'}" class="modules-block__item">
            <div class="background-blur__block"><p class="module-number">FRONT-END</p><p class="module-name">develop</p></div>

            <div class="modules-block__item-decription">
                <p>Набор учебного материала для освоения front-end разработки</p>
            </div>
        </router-link>
        <router-link :to="{name: 'vBackModules'}" class="modules-block__item">
            <div class="background-blur__block"><p class="module-number">BACK-END</p><p class="module-name">develop</p></div>

            <div class="modules-block__item-decription">
                <p>Набор учебного материала для освоения back-end разработки</p>
            </div>
        </router-link>
        </div>>
    </div>
</template>

<script>


    export default {
        name: "v-ways",
        components: {},

    };
</script>