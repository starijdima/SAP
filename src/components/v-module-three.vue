<template>
  <div>
      <div v-on:click="darkTheme" class="dark-theme__block">
          <div class="dark-theme__block-item">
              <div class="dark-theme__block-item__thumb"></div>
              <div class="dark-theme__block-item__ring"></div>
          </div>
          <p class="dark-theme__block-text">Темная тема</p>
      </div>
  <router-link :to="{name: 'vModules'}" class="to-modules__link">
  <img class="to-modules__link-img" v-bind:src="backArrow" alt /><p class="to-modules__link-text">Вернуться к списку модулей</p></router-link>
  <h2 class="module-title">Модуль 3. Таблицы стилей.</h2>
    <div class="pagination-block">
      <div class="pagination-block__item pag-active"></div>
      <div class="pagination-block__item"></div>
      <div class="pagination-block__item"></div>
      <div class="pagination-block__item"></div>
      <div class="pagination-block__item"></div>
      <div class="pagination-block__item"></div>
      <div class="pagination-block__item"></div>
      <div class="pagination-block__item"></div>
      <div class="pagination-block__item"></div>
      <div class="pagination-block__item"></div>
      <div class="pagination-block__item"></div>
      <div class="pagination-block__item"></div>
   
      
    </div>

    <div class="main-module__stage st-active">
      <p
        class="main-module__stage-text"
      >Изучив макет от господина-дизайнера и набросав html-документ, пора переходить к стилизации нашего сайта. Повторно взглянув на макет, можно заметить, что в хэдэре все ссылки имеют красивый шрифт. Скачать его можно по ссылке: <a href="https://drive.google.com/drive/folders/10veKWZjjW6VCNHWHrNuvpTCvTb13kyaS" target="_blank" class="text-link">https://drive.google.com/drive/folders/10veKWZjjW6VCNHWHrNuvpTCvTb13kyaS</a> в папке «Шрифты». Шрифт называется “Montserrat”.</p>
      <p class="main-module__stage-text">
        Для подключения стилей к проекту, существует специальный тэг "link". В созданном проекте откроем html-документ и найдем тэг "head". В пределах этого тэга прописываются тэги, которые содержат так называемые “мысли” нашего сайта - то, что находится у него в голове. Это подключение шрифтов, таблиц стилей, скриптов, название страницы и другие нужные мета-тэги. 
      </p>
       <p class="main-module__stage-text">
        Стоит подметить то, что нельзя путать "head" от "header", это принципиально разные вещи, где "head" это область подключения скриптов, стилей и метатэгов, а "header" - это целый блок, который мы будем видеть. 
      </p>
      <p class="main-module__stage-text attention">
        Запомни: "head" мы не видим, а "header" видим.
      </p>
      <div class="st-img__block"></div>
      <div class="next-btn__block">
      <router-link :to="{name: 'vModuleTwo'}" class="back-module__router">
       <img class="st-img" v-bind:src="nextModuleArrow" alt />
        <p>Модуль 2. Изучение макета сайта</p>
        
        </router-link>
        <div v-on:click="moduleSwipeNext" class="next-btn">Далее</div>
      </div>
    </div>
    <div class="main-module__stage">
     
      <p class="main-module__stage-text">
        Создадим файл с таблицей стилей в нашем проекте. Найдем созданную ранее папку “styles” и создадим в ней файл “styles.css” и откроем его в редакторе кода.
      </p>
      <div class="st-img__block">
        <img class="st-img" v-bind:src="st1" alt />
      </div>
       <p class="main-module__stage-text">
        Как видно на рисунке выше, среда разработки может разделяться на несколько частей для удобства написания кода. Созданный css-файл был помещен в правую сторону.
      </p>
      <p class="main-module__stage-text">
        Теперь нужно подключить этот файл к html-документу.
      </p>

      <div class="next-btn__block">
        <div v-on:click="moduleSwipePrev" class="prev-btn">Назад</div>
        <div class="next-btn">Далее</div>
      </div>
    </div>
    <div class="main-module__stage">
     
      <p class="main-module__stage-text">
        Напишем в html-документ тэг "link" с атрибутами, представленными на рисунке ниже:
      </p>
      <div class="st-img__block">
        <img class="st-img" v-bind:src="st2" alt />
      </div>
       

      <div class="next-btn__block">
        <div v-on:click="moduleSwipePrev" class="prev-btn">Назад</div>
        <div class="next-btn">Далее</div>
      </div>
    </div>
    <div class="main-module__stage">
     
      <p class="main-module__stage-text">
        Чтобы браузер при отображении документа понимал, что имеет дело не с простым текстом, а с элементом форматирования – для этого и применяются теги. Общий синтаксис написания тегов следующий.
      </p>
      <div class="st-img__block">
        <img class="st-img" v-bind:src="st9" alt />
      </div>
       <p class="main-module__stage-text">
        Как видно из данного примера, теги бывают двух типов — одиночные и парные (контейнеры). Одиночный тег используется самостоятельно, а парный может включать внутри себя другие теги или текст. У тегов допустимы различные атрибуты, которые разделяются между собой пробелом. Впрочем, есть теги без всяких дополнительных атрибутов. Условно атрибуты можно подразделить на обязательные, они непременно должны присутствовать, и необязательные, их добавление зависит от цели применения тега.
      </p>
       

      <div class="next-btn__block">
        <div v-on:click="moduleSwipePrev" class="prev-btn">Назад</div>
        <div class="next-btn">Далее</div>
      </div>
    </div>
     <div class="main-module__stage">
     
      <p class="main-module__stage-text">
        Разберем строку подключения файла со стилями. Сначала идет тэг: "link…" , потом идет первый атрибут rel=”stylesheet”. Атрибут rel определяет отношения между текущим документом и документом, на который ведет ссылка, заданная атрибутом href. Stylesheet переводится с английского как «таблица стилей». Отделив пробелом первый атрибут, пишем второй – href. Этот атрибут явлется атрибутом ссылки. Ссылка может вести как на локальный ресурс, так и на сетевой. Говоря простым языком, мы можем писать либо путь к файлу в нашем проекте, либо написать ссылку на интернет-ресурс. В данном случае была прописана ссылка на локальный ресурс – к файлу css. Работу с путями между файлами мы разберем в следующих модулях. 
      </p>
       <p class="main-module__stage-text">
        Файл css подключен, теперь нужно поместить папку со шрифтом в нужную папку нашего проекта и таким же образом подключить его в html-документе. Поместив папку со шрифтом в папку проекта с названием fonts, нужно подключить находящийся в папке со шрифтом css-файл в html-документе. Прибегаем к уже знакомому способу подключения css-файла.
      </p>
      <div class="st-img__block">
        <img class="st-img" v-bind:src="st3" alt />
      </div>
       <p class="main-module__stage-text">
        Теперь в нашем проекте подключен основной файл со стилями и шрифт. Теперь перейдем к стилизации нашего проекта. 
      </p>
       

      <div class="next-btn__block">
        <div v-on:click="moduleSwipePrev" class="prev-btn">Назад</div>
        <div class="next-btn">Далее</div>
      </div>
    </div>
     <div class="main-module__stage">
     
      <p class="main-module__stage-text">
       Первым делом нужно знать, что у всех блоков в браузере есть несколько слоев. Они называются отступами. 
      </p>
       <div class="st-img__block">
        <img class="st-img" v-bind:src="st4" alt />
      </div>
       <p class="main-module__stage-text">
        Данная схема демонстрирует все возможные отступы у элемента. По умолчанию у всех элементов страницы заданы некоторые отступы, которые изначально нужно убрать. 
      </p>
     

      <div class="next-btn__block">
        <div v-on:click="moduleSwipePrev" class="prev-btn">Назад</div>
        <div class="next-btn">Далее</div>
      </div>
    </div>
     <div class="main-module__stage">
     
      <p class="main-module__stage-text">
       Чтобы каким-то образом обратиться к какому-либо элементу на странице, существуют так называемые селекторы. CSS-селекторы – это связующее звено между стилями и html-кодом. Есть 4 основных вида селекторов: 
      </p>
      <ul class="main-module__stage-list">
        <li class="main-module__stage-list-item"><span class="text-link">*</span> - селектор, с помощью которого можно обратиться ко всем элементам страницы.</li>
        <li class="main-module__stage-list-item"><span class="text-link">body, a, li…</span> - селектор обращения к тэгам. Важной особенностью данного селектора является его написание без каких либо обозначений, нежели у классов или идентификаторов.</li>
        <li class="main-module__stage-list-item"><span class="text-link">.content, .top-block…</span> - селектор обращения к классам (class). Важной особенностью данного селектора является его написание с использованием точки (.).</li>
        <li class="main-module__stage-list-item"><span class="text-link">#form, #main-block</span> – селектор обращения к идентификаторам (id). Важной особенностью данного селектора является его написание с использованием решетки (#).</li>
      </ul>
     
     

      <div class="next-btn__block">
        <div v-on:click="moduleSwipePrev" class="prev-btn">Назад</div>
        <div class="next-btn">Далее</div>
      </div>
    </div>
     <div class="main-module__stage">
     
       <p class="main-module__stage-text">
        Итак, теперь мы знаем, к чему нужно обратиться, чтобы убрать отступы.
      </p>
      <div class="st-img__block">
        <img class="st-img" v-bind:src="st5" alt />
      </div>
       <p class="main-module__stage-text">
        Запись, представленная выше означает, что у всех элементов, которые будут на странице, отступы, установленные по умолчанию, будут отменены. 
      </p>
       <p class="main-module__stage-text">
        Обратите внимание на синтаксис написания css-кода. Сначала идет селектор, потом открываются фигурные скобки, а в них пишется свойство и значение:
      </p>
       <div class="st-img__block">
        <img class="st-img" v-bind:src="st10" alt />
      </div>
      
       

      <div class="next-btn__block">
        <div v-on:click="moduleSwipePrev" class="prev-btn">Назад</div>
        <div class="next-btn">Далее</div>
      </div>
    </div>
      <div class="main-module__stage">
     
       <p class="main-module__stage-text">
        Перейдем на наш сайт и убедимся, что надпись «это мой первый сайт» прижалась к левому верхнему углу.
      </p>
      <div class="st-img__block">
        <img class="st-img" v-bind:src="st6" alt />
      </div>
       <p class="main-module__stage-text">
        Так и есть, тем самым можно убедиться, что css-файл был подключен верно. Но где же изменения в шрифте? Мы ведь подключили его в html. Но это было только 50% дела. Осталось Обозначить шрифт в css. 
      </p>
       
    
       

      <div class="next-btn__block">
        <div v-on:click="moduleSwipePrev" class="prev-btn">Назад</div>
        <div class="next-btn">Далее</div>
      </div>
    </div>
    <div class="main-module__stage">
     
       <p class="main-module__stage-text">
        Обратимся в этот раз не через “*”, а к селектору тэга "html":
      </p>
      <div class="st-img__block">
        <img class="st-img" v-bind:src="st7" alt />
      </div>
       <p class="main-module__stage-text">
        Свойство font-family отвечает за название используемого шрифта данного блока, по селектору которого мы к нему обращаемся. В данном случае мы обратились ко всей страницы, установив на ней шрифт Montserrat. Проверим, как выглядит наша страница.
      </p>
       
    
       

      <div class="next-btn__block">
        <div v-on:click="moduleSwipePrev" class="prev-btn">Назад</div>
        <div class="next-btn">Далее</div>
      </div>
    </div>
    <div class="main-module__stage">
     
       
      <div class="st-img__block">
        <img class="st-img" v-bind:src="st8" alt />
      </div>
       <p class="main-module__stage-text">
        Как видно, шрифт изменился, а также об этом говорит консоль разработчика, открываемая по нажатию клавишу F12.
      </p>
       
    
       

      <div class="next-btn__block">
        <div v-on:click="moduleSwipePrev" class="prev-btn">Назад</div>
        <div class="next-btn">Далее</div>
      </div>
    </div>
     <div class="main-module__stage">
     
       
    
       <p class="lang-name">Вывод.</p>
       <p class="main-module__stage-text">
    
В данном модуле мы разобрали как подключаются шрифты и стили к html-документу.

      </p>
      <p class="lang-name">Задание к модулю 3.</p>
       <p class="main-module__stage-text">
    
Подключите шрифты и стили к своему проекту. Произведите вывод текста на страницу браузера.

      </p>
       
    
       

      <div class="next-btn__block">
        <div v-on:click="moduleSwipePrev" class="prev-btn">Назад</div>
      <router-link :to="{name: 'vModuleFour'}" class="next-module__router">
        <p>Модуль 4. CSS Flexbox</p>
        <img class="st-img" v-bind:src="nextModuleArrow" alt />
        </router-link>
      </div>
    </div>
    
  </div>
</template>
 
<script>

import st1 from "@/assets/M-3/3-1.png";
import st2 from "@/assets/M-3/3-2.png";
import st3 from "@/assets/M-3/3-3.png";
import st4 from "@/assets/M-3/3-4.png";
import st5 from "@/assets/M-3/3-5.png";
import st6 from "@/assets/M-3/3-6.png";
import st7 from "@/assets/M-3/3-7.png";
import st8 from "@/assets/M-3/3-8.png";
import st9 from "@/assets/M-3/3-9.png";
import st10 from "@/assets/M-3/3-10.png";
import backArrow from "@/assets/back-arrow.svg";
import nextModuleArrow from "@/assets/next-module-arrow.svg";




export default {
  name: "v-module-three",
  components: {},
    methods:{
        darkTheme: function(){
            let darkItem = document.querySelector('.dark-theme__block-item')
            let darkThumb = document.querySelector('.dark-theme__block-item__thumb')
            let darkRing = document.querySelector('.dark-theme__block-item__ring')
            let bodyDark = document.querySelector('body')
            let mainModuleStageText = document.querySelectorAll('.main-module__stage-text')

            let headerLogo = document.querySelector('.header-logo')

            let moduleTitle = document.querySelector('.module-title')
            let moduleListItem = document.querySelectorAll('.main-module__stage-list-item')
            let langName = document.querySelectorAll('.lang-name')

            if(darkRing.style.right=='0%'||darkRing.style.right==''){
                darkRing.style.right='50%';
                darkRing.style.background='#707070';
                darkThumb.style.background='#484848'
                bodyDark.style.background='#E8E8E8'
                for(let i=0; i<mainModuleStageText.length;i++){
                    mainModuleStageText[i].style.color='#2D2D2D'
                }
                moduleTitle.style.color='#2D2D2D'
                headerLogo.style.filter='brightness(0.2)'
                for(let i=0; i<moduleListItem.length;i++){
                    moduleListItem[i].style.color='#5F5F5F'
                }
                for(let i=0; i<langName.length;i++){
                    langName[i].style.color='#5F5F5F'
                }

            }
            else{
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
        },
        moduleSwipeNext: function(){
            let mainModuleStage = document.querySelectorAll(".main-module__stage");
            let nextBtn = document.querySelectorAll(".next-btn");
            let paginationItem = document.querySelectorAll(".pagination-block__item");

            for (let i = 0; i < nextBtn.length; i++) {
                nextBtn[i].onclick = function () {

                    mainModuleStage[i].classList = "main-module__stage st-complete";
                    mainModuleStage[i + 1].classList = "main-module__stage st-active";
                    paginationItem[i].classList = "pagination-block__item pag-compl";
                    paginationItem[i + 1].classList = "pagination-block__item pag-active";
                };
            }
        },
        moduleSwipePrev: function(){
            let mainModuleStage = document.querySelectorAll(".main-module__stage");
            let prevBtn = document.querySelectorAll('.prev-btn')
            let paginationItem = document.querySelectorAll(".pagination-block__item");

            for (let k = 0; k < prevBtn.length; k++) {
                prevBtn[k].onclick = function () {

                    mainModuleStage[k].classList = "main-module__stage st-active";
                    mainModuleStage[k + 1].classList = "main-module__stage";
                    paginationItem[k + 1].classList = "pagination-block__item pag-compl";
                    paginationItem[k].classList = "pagination-block__item pag-active";
                };
            }
        },


    },
   data: function () {
    return {
      st1,
      st2,
      st3,
      st4,
      st5,
      st6,
      st7,
      st8,
      st9,
      st10,
      backArrow,
      nextModuleArrow
     
    };
  },
    methods:{
        darkTheme(){
            let darkItem = document.querySelector('.dark-theme__block-item')
            let darkThumb = document.querySelector('.dark-theme__block-item__thumb')
            let darkRing = document.querySelector('.dark-theme__block-item__ring')
            let bodyDark = document.querySelector('body')
            let mainModuleStageText = document.querySelectorAll('.main-module__stage-text')

            let headerLogo = document.querySelector('.header-logo')

            let moduleTitle = document.querySelector('.module-title')
            let moduleListItem = document.querySelectorAll('.main-module__stage-list-item')
            let langName = document.querySelectorAll('.lang-name')

            if(darkRing.style.right=='0%'||darkRing.style.right==''){
                darkRing.style.right='50%';
                darkRing.style.background='#707070';
                darkThumb.style.background='#484848'
                bodyDark.style.background='#E8E8E8'
                for(let i=0; i<mainModuleStageText.length;i++){
                    mainModuleStageText[i].style.color='#2D2D2D'
                }
                moduleTitle.style.color='#2D2D2D'
                headerLogo.style.filter='brightness(0.2)'
                for(let i=0; i<moduleListItem.length;i++){
                    moduleListItem[i].style.color='#5F5F5F'
                }
                for(let i=0; i<langName.length;i++){
                    langName[i].style.color='#5F5F5F'
                }

                localStorage.dark = false

            }
            else{
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
                localStorage.dark = true

            }

        },
        moduleSwipeNext(){
            let mainModuleStage = document.querySelectorAll(".main-module__stage");
            let nextBtn = document.querySelectorAll(".next-btn");
            let paginationItem = document.querySelectorAll(".pagination-block__item");

            for (let i = 0; i < nextBtn.length; i++) {
                nextBtn[i].onclick = function () {

                    mainModuleStage[i].classList = "main-module__stage st-complete";
                    mainModuleStage[i + 1].classList = "main-module__stage st-active";
                    paginationItem[i].classList = "pagination-block__item pag-compl";
                    paginationItem[i + 1].classList = "pagination-block__item pag-active";
                };
            }
        },
        moduleSwipePrev(){
            let mainModuleStage = document.querySelectorAll(".main-module__stage");
            let prevBtn = document.querySelectorAll('.prev-btn')
            let paginationItem = document.querySelectorAll(".pagination-block__item");

            for (let k = 0; k < prevBtn.length; k++) {
                prevBtn[k].onclick = function () {

                    mainModuleStage[k].classList = "main-module__stage st-active";
                    mainModuleStage[k + 1].classList = "main-module__stage";
                    paginationItem[k + 1].classList = "pagination-block__item pag-compl";
                    paginationItem[k].classList = "pagination-block__item pag-active";
                };
            }
        },
        checkTheme(){
            let darkItem = document.querySelector('.dark-theme__block-item')
            let darkThumb = document.querySelector('.dark-theme__block-item__thumb')
            let darkRing = document.querySelector('.dark-theme__block-item__ring')
            let bodyDark = document.querySelector('body')
            let mainModuleStageText = document.querySelectorAll('.main-module__stage-text')

            let headerLogo = document.querySelector('.header-logo')

            let moduleTitle = document.querySelector('.module-title')
            let moduleListItem = document.querySelectorAll('.main-module__stage-list-item')
            let langName = document.querySelectorAll('.lang-name')




            if (localStorage.getItem('dark')==='false'){
                darkRing.style.right='50%';
                darkRing.style.background='#707070';
                darkThumb.style.background='#484848'
                bodyDark.style.background='#E8E8E8'
                for(let i=0; i<mainModuleStageText.length;i++){
                    mainModuleStageText[i].style.color='#2D2D2D'
                }
                moduleTitle.style.color='#2D2D2D'
                headerLogo.style.filter='brightness(0.2)'
                for(let i=0; i<moduleListItem.length;i++){
                    moduleListItem[i].style.color='#5F5F5F'
                }
                for(let i=0; i<langName.length;i++){
                    langName[i].style.color='#5F5F5F'
                }
            }
            else{
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
        }
    },
    mounted() {
        this.moduleSwipeNext()
        this.moduleSwipePrev()
        this.checkTheme()
    }
  
};
</script> 