<template>
    <div style="width: 100%" class="modules-block">
        <router-link :to="{name: 'vWays'}" class="to-modules__link">
            <img class="to-modules__link-img" v-bind:src="backArrow" alt /><p class="to-modules__link-text">Выбрать другое направление</p></router-link>
        <h2 class="module-title">BACK-END DEVELOP</h2>

        <div class="wellcome-block">
            <p class="wellcome-block__text">В данном направлении пока что нет актуальных модулей</p>

            <router-link :to="{name: 'vWays'}" class="from-wellcome__to-modules-btn">Назад</router-link>

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