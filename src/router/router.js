import Vue from 'vue'
import Router from 'vue-router'

import vWellcome from '../components/v-wellcome'
import vModuleOne from '../components/v-module-one'
import vModuleTwo from '../components/v-module-two'
import vModuleThree from '../components/v-module-three'
import vModuleFour from '../components/v-module-four'
import vModuleFive from '../components/v-module-five'
import vWays from '../components/v-ways'
import vBackModules from '../components/v-back-modules'
import vModules from '../components/v-front-modules'

Vue.use(Router);
let router = new Router({
    mode: 'history',
    routes:[
        {
            path: '/',
            name: 'vWellcome',
            component: vWellcome
        },

        {
            path: '/one',
            name: 'vModuleOne',
            component: vModuleOne,
            beforeRouteLeave (to, from, next) {
                if (from.name == 'vModuleOne'){
                    localStorage.removeItem('reloadPage')
                }
            }
        },
        {
            path: '/two',
            name: 'vModuleTwo',
            component: vModuleTwo
        },
        {
            path: '/three',
            name: 'vModuleThree',
            component: vModuleThree
        },
        {
            path: '/four',
            name: 'vModuleFour',
            component: vModuleFour
        },
        {
            path: '/ways',
            name: 'vWays',
            component: vWays
        },
        {
            path: '/backend',
            name: 'vBackModules',
            component: vBackModules
        },
        {
            path: '/frontend',
            name: 'vModules',
            component: vModules


        },
        {
            path: '/five',
            name: 'vModuleFive',
            component: vModuleFive
        },
    ]
    
})


router.afterEach(to => {
    if (to.name == 'vModuleFive' || to.name == 'vModules' || to.name == 'vModuleTwo' || to.name == 'vWays' || to.name == 'vBackModules' || to.name == 'vWellcome' || to.name == 'vModuleFour' || to.name == 'vModuleThree' || to.name == 'vModuleOne'){
        let darkItem = document.querySelector('.dark-theme__block-item')
        let darkThumb = document.querySelector('.dark-theme__block-item__thumb')
        let darkRing = document.querySelector('.dark-theme__block-item__ring')
        let bodyDark = document.querySelector('body')
        let mainModuleStageText = document.querySelectorAll('.main-module__stage-text')

        let headerLogo = document.querySelector('.header-logo')

        let moduleTitle = document.querySelector('.module-title')
        let moduleListItem = document.querySelectorAll('.main-module__stage-list-item')
        let langName = document.querySelectorAll('.lang-name')

        darkRing.style.right='0%';
        darkRing.style.background='#AAEC92';
        darkThumb.style.background='#C4C4C4'
        bodyDark.style.background='#2D2D2D'
        for(let i=0; i<mainModuleStageText.length;i++){
            mainModuleStageText[i].style.color='#FFFFFF'
        }
        moduleTitle.style.color='#FFFFFF'
        headerLogo.style.filter='brightness(1)'
        for(let i=0; i<moduleListItem.length;i++){
            moduleListItem[i].style.color='#C1C1C1'
        }
        for(let i=0; i<langName.length;i++){
            langName[i].style.color='#C1C1C1'
        }

    }
})
router.afterEach(to => {
    if (to.name == 'news'){

    }





})


  

  

export default router;



