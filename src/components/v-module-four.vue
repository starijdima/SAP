<template>
  <div class="module">
    <div v-on:click="darkTheme" class="dark-theme__block">
      <div class="dark-theme__block-item">
        <div class="dark-theme__block-item__thumb"></div>
        <div class="dark-theme__block-item__ring"></div>
      </div>
      <p class="dark-theme__block-text">Темная тема</p>
    </div>
  <router-link :to="{name: 'vModules'}" class="to-modules__link">
  <img class="to-modules__link-img" v-bind:src="backArrow" alt /><p class="to-modules__link-text">Вернуться к списку модулей</p></router-link>
    <h2 class="module-title">Модуль 4. CSS Flexbox.</h2>
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
      <div class="pagination-block__item"></div>
      <div class="pagination-block__item"></div>
      <div class="pagination-block__item"></div>
      <div class="pagination-block__item"></div>
   
    </div>
    <div class="main-module__stage st-active">
      <p
        class="main-module__stage-text"
      >Важной составляющей частью верстки страниц является понимание стилизации блоков и их расположения. В случае построения правильного HTML-дерева вашей страницы, вам нужно грамотно все расставить с помощью языка CSS. За расположение дочерних блоков относительно родительского отвечает технология Flexbox, которая является частью CSS. Данная технология насчитывает множество свойств и их значений, из которых только несколько пользуются популярностью у фронтэнд-разработчиков. Почему Flexbox?</p>

      <div class="next-btn__block">
      <router-link :to="{name: 'vModuleThree'}" class="back-module__router">
       <img class="st-img" v-bind:src="nextModuleArrow" alt />
        <p>Модуль 3. Таблицы стилей</p>
        
        </router-link>
        <div v-on:click="moduleSwipeNext" class="next-btn">Далее</div>
      </div>
    </div>
    <div class="main-module__stage">
      <p
        class="main-module__stage-text"
      >Долгое время единственными надёжными инструментами CSS верстки были такие способы как Float (обтекание) и позиционирование.</p>
      <p
        class="main-module__stage-text"
      >С их помощью сложно или невозможно достичь следующих простых требований к макету:</p>
      <ul class="main-module__stage-list">
        <li class="main-module__stage-list-item">Вертикального выравнивания блока внутри родителя.</li>
        <li
          class="main-module__stage-list-item"
        >Оформления всех детей контейнера так, чтобы они распределили между собой доступную ширину/высоту, независимо от того, сколько ширины/высоты доступно.</li>
        <li
          class="main-module__stage-list-item"
        >Сделать все колонки в макете одинаковой высоты, даже если наполнение в них различно.</li>
      </ul>
      <p
        class="main-module__stage-text"
      >Все вышеперечисленные пункты можно сделать, зная и применяя Flexbox. Перейдем к разбору свойств и значений.</p>

      <div class="next-btn__block">
        <div v-on:click="moduleSwipePrev" class="prev-btn">Назад</div>
        <div class="next-btn">Далее</div>
      </div>
    </div>
    <div class="main-module__stage">
      <p
        class="main-module__stage-text"
      >Список самых важных и часто используемых flex-свойств и значений:</p>

      <p class="main-module__stage-text">
        <span class="property-name">display</span>:
        <span class="property-value">flex</span>
        <span
          class="property-description"
        >//включает все flex-свойства у данного селектора (без него ни одно flex-свойство работать не будет)</span>
      </p>
      <div class="next-btn__block">
        <div v-on:click="moduleSwipePrev" class="prev-btn">Назад</div>
        <div class="next-btn">Далее</div>
      </div>
    </div>
    <div class="main-module__stage">
      <p
        class="main-module__stage-text"
      >Список самых важных и часто используемых flex-свойств и значений:</p>

      <p class="main-module__stage-text">
        <span class="property-name">flex-direction</span>:
        <span class="property-value">row</span> |
        <span class="property-value">column</span>
        <span
          class="property-description"
        >//в зависимости от надобности – свойство расположения всех элементов относительно оси Х и Y. В случае, если необходимо значение данного свойства row, его можно не писать, так как значение row установлено по умолчанию. По умолчанию при значении row, свойство justify-content отвечает за ось X, а свойство align-items отвечает за ось Y. При установке значения column у свойства flex-direction, свойство justify-content отвечает за ось Y, а свойство align-items отвечает за ось X</span>
      </p>
      <div class="next-btn__block">
        <div v-on:click="moduleSwipePrev" class="prev-btn">Назад</div>
        <div class="next-btn">Далее</div>
      </div>
    </div>
    <div class="main-module__stage">
      <p
        class="main-module__stage-text"
      >Список самых важных и часто используемых flex-свойств и значений:</p>

      <p class="main-module__stage-text">
        <span class="property-name">justify-content</span>:
        <span class="property-value">flex-start</span> |
        <span class="property-value">flex-end</span> |
        <span class="property-value">center</span> |
        <span class="property-value">space-around</span> |
        <span class="property-value">space-between</span>
        <span
          class="property-description"
        >//свойство главной flex-оси (ось X при flex-direction: row и ось Y при flex-direction: column). Значение flex-start прижимает все дочерние элементы к началу блока, т.е. к левому краю. Значение flex-end прижимает все дочерние элементы к концу блока, т.е. к правому краю. Значение center выравнивает все дочерние блоки по центру родительского блока. Значение space-around расставляет дочерние блоки так, чтобы между всеми дочерними элементами было одинаковое расстояние, при чем у крайних элементов со стороны границы родительского блока расстояние равно половине от расстояния между всеми остальными дочерними элементами. Значение space-between так располагает дочерние элементы, что крайние дочерние элементы прижимаются к краям родительского блока, а между остальными элементами делается одинаковое расстояние.</span>
      </p>
      <div class="st-img__block">
        <img class="st-img" v-bind:src="st1" alt />
      </div>
      <div class="st-img__block">
        <img class="st-img" v-bind:src="st2" alt />
      </div>
      <div class="st-img__block">
        <img class="st-img" v-bind:src="st3" alt />
      </div>
      <div class="st-img__block">
        <img class="st-img" v-bind:src="st4" alt />
      </div>
      <div class="st-img__block">
        <img class="st-img" v-bind:src="st5" alt />
      </div>
      <div class="next-btn__block">
        <div v-on:click="moduleSwipePrev" class="prev-btn">Назад</div>
        <div class="next-btn">Далее</div>
      </div>
    </div>
    <div class="main-module__stage">
      <p
        class="main-module__stage-text"
      >Список самых важных и часто используемых flex-свойств и значений:</p>
      <p class="main-module__stage-text">
        <span class="property-name">align-items</span>:
        <span class="property-value">flex-start</span> |
        <span class="property-value">flex-end</span> |
        <span class="property-value">center</span>
        <span
          class="property-description"
        >//свойство побочной flex-оси (ось Y при flex-direction: row и ось X при flex-direction: column). Значение flex-start прижимает все дочерние элементы к началу блока, т.е. к верху. Значение flex-end прижимает все дочерние элементы к концу блока, т.е. к низу. Значение center выравнивает все дочерние блоки по центру родительского блока.</span>
      </p>
      <div class="st-img__block">
        <img class="st-img min-img" v-bind:src="st6" alt />
        <img class="st-img min-img" v-bind:src="st7" alt />
        <img class="st-img min-img" v-bind:src="st8" alt />
      </div>

      <div class="next-btn__block">
        <div v-on:click="moduleSwipePrev" class="prev-btn">Назад</div>
        <div class="next-btn">Далее</div>
      </div>
    </div>
    <div class="main-module__stage">
      <p
        class="main-module__stage-text"
      >Список самых важных и часто используемых flex-свойств и значений:</p>
      <p class="main-module__stage-text">
        <span class="property-name">flex-wrap</span>:
        <span class="property-value">no-wrap</span> |
        <span class="property-value">wrap</span>
        <span
          class="property-description"
        >//flex-свойство переноса дочерних блоков в родительском. При значении wrap при невлезании дочерних блоков в ширину родительского блока, дочерние будут переноситься на следующую «строку». При значении no-wrap перенос будет отменен и все элементы будут умещены в одну «строку».</span>
      </p>

      <div class="st-img__block">
        <img class="st-img" v-bind:src="st9" alt />
      </div>
      <div class="st-img__block">
        <img class="st-img" v-bind:src="st10" alt />
      </div>
      <p
        class="main-module__stage-text"
      >Как видно на верхнем скриншоте, с flex-wrap нужно быть внимательней, так как можно столкнуться с проблемой нехватки места в «строке».</p>
      <div class="next-btn__block">
        <div v-on:click="moduleSwipePrev" class="prev-btn">Назад</div>
        <div class="next-btn">Далее</div>
      </div>
    </div>
    <div class="main-module__stage">
      <p
        class="main-module__stage-text"
      >Еще стоит подметить одну особенность, что при изменении значения свойства flex-direction, главная и побочная ось меняются местами:</p>
      <div class="st-img__block">
        <img class="st-img" v-bind:src="st11" alt />
      </div>
      <p
        class="main-module__stage-text"
      >Для того, чтобы использовать свойства для осей, такие как justify-content и align-items, нужно задать блоку высоту и ширину. Если вы прописываете данные свойства и у вас ничего не получается, значит проверьте, что вы задали высоту и ширину блоку и прописали display: flex.</p>

      <div class="next-btn__block">
        <div v-on:click="moduleSwipePrev" class="prev-btn">Назад</div>
        <div class="next-btn">Далее</div>
      </div>
    </div>
    <div class="main-module__stage">
      <p
        class="main-module__stage-text"
      >Чтобы расположить блоки на нижнем скриншоте, нужно написать следующий код:</p>
      <div class="st-img__block">
        <img class="st-img" v-bind:src="st12" alt />
      </div>
      <div class="st-img__block">
        <img class="st-img" v-bind:src="st13" alt />
      </div>
      <p
        class="main-module__stage-text"
      >Давайте сделаем такой же блок, но укажем для него id, чтобы задать другое значение justify-content.</p>

      <div class="next-btn__block">
        <div v-on:click="moduleSwipePrev" class="prev-btn">Назад</div>
        <div class="next-btn">Далее</div>
      </div>
    </div>
    <div class="main-module__stage">
      <p class="main-module__stage-text">Получится следующий код и результат:</p>
      <div class="st-img__block">
        <img class="st-img" v-bind:src="st14" alt />
      </div>
      <div class="st-img__block">
        <img class="st-img" v-bind:src="st15" alt />
      </div>

      <div class="next-btn__block">
        <div v-on:click="moduleSwipePrev" class="prev-btn">Назад</div>
        <div class="next-btn">Далее</div>
      </div>
    </div>
    <div class="main-module__stage">
      <p
        class="main-module__stage-text"
      >Для установки серых квадратов по центру белого прямоугольника, продублируем блок и переопределим значение для justify-content:</p>
      <div class="st-img__block">
        <img class="st-img" v-bind:src="st16" alt />
      </div>
      <div class="st-img__block">
        <img class="st-img" v-bind:src="st17" alt />
      </div>

      <div class="next-btn__block">
        <div v-on:click="moduleSwipePrev" class="prev-btn">Назад</div>
        <div class="next-btn">Далее</div>
      </div>
    </div>
    <div class="main-module__stage">
      <p
        class="main-module__stage-text"
      >Повторим те же действия для значений space-around и space-between:</p>
      <div class="st-img__block">
        <img class="st-img" v-bind:src="st18" alt />
      </div>
      <div class="st-img__block">
        <img class="st-img" v-bind:src="st19" alt />
      </div>

      <div class="next-btn__block">
        <div v-on:click="moduleSwipePrev" class="prev-btn">Назад</div>
        <div class="next-btn">Далее</div>
      </div>
    </div>
    <div class="main-module__stage">
      <p
        class="main-module__stage-text"
      >Для всех ранее перечисленных блоков был задан align-items: center, следовательно все серые квадраты располагаются по центру, относительно вертикальной оси. Давайте сделаем несколько блоков и зададим разные значения для свойства align-items:</p>
      <div class="st-img__block">
        <img class="st-img" v-bind:src="st20" alt />
      </div>
      <p class="main-module__stage-text">Получаем результат:</p>
      <div class="st-img__block">
        <img class="st-img" v-bind:src="st21" alt />
      </div>

      <div class="next-btn__block">
        <div v-on:click="moduleSwipePrev" class="prev-btn">Назад</div>
        <div class="next-btn">Далее</div>
      </div>
    </div>
    <div class="main-module__stage">
      <p
        class="main-module__stage-text"
      >Для демонстрации работы свойства flex-direction, сделаем блок с новым классом, задав селектору свойству flex-direction значение column:</p>
      <div class="st-img__block">
        <img class="st-img" v-bind:src="st22" alt />
      </div>
      <p class="main-module__stage-text">Ниже представлен результат выполнения данного кода:</p>
      <div class="st-img__block">
        <img class="st-img" v-bind:src="st23" alt />
      </div>
      <p class="main-module__stage-text">Обратите внимание на CSS код:</p>
      <div class="st-img__block">
        <img class="st-img" v-bind:src="st24" alt />
      </div>

      <div class="next-btn__block">
        <div v-on:click="moduleSwipePrev" class="prev-btn">Назад</div>
        <div class="next-btn">Далее</div>
      </div>
    </div>
    <div class="main-module__stage">
      <p
        class="main-module__stage-text"
      >Установив свойство justify-content со значением space-around серые квадраты расположились согласно данному свойству, однако находятся в вертикальном положении и вроде бы за вертикальное положение отвечает свойство align-items? Нет. В данном случае мы применили свойство flex-direction: row, которое повернуло оси на 90 градусов и теперь для вертикальной оси я могу задавать свойство justify-content (не забываем памятку, которую видели наверху). При чем для свойства align-items не существует значений space-between и space-around, поэтому к данному расположению дочерних блоков нужно подходить с умом и иметь отдельную логику.</p>

      <div class="next-btn__block">
        <div v-on:click="moduleSwipePrev" class="prev-btn">Назад</div>
        <div class="next-btn">Далее</div>
      </div>
    </div>
    <div class="main-module__stage">
      <p class="main-module__stage-text"></p>
      <p class="lang-name">Вывод:</p>
      <p
        class="main-module__stage-text"
      >Итогом изучения данного модуля должно стать понимание технологии CSS Flexbox. Вы должны запомнить 5 основных flex-свойств и их значений: display: flex; flex-direction; justify-content; align-items; flex-wrap.</p>
      <p class="main-module__stage-text">
        Ссылка на примеры, используемые в данном модуле:
        <a
          href="https://drive.google.com/drive/folders/1m2bCLMfloo9ABA10N1MhepH5NF00vQok?usp=sharing"
          target="_blank"
          class="text-link"
        >https://drive.google.com/drive/folders/1m2bCLMfloo9ABA10N1MhepH5NF00vQok?usp=sharing</a>
      </p>

      <div class="next-btn__block">
        <div v-on:click="moduleSwipePrev" class="prev-btn">Назад</div>
        <router-link :to="{name: 'vModuleFive'}" class="next-module__router">
          <p>Модуль 5. CSS Отступы</p>
          <img class="st-img" v-bind:src="nextModuleArrow" alt />
        </router-link>
      </div>
    </div>
  </div>
</template>
 
<script>
import st1 from "@/assets/M-4/4-1.png";
import st2 from "@/assets/M-4/4-2.png";
import st3 from "@/assets/M-4/4-3.png";
import st4 from "@/assets/M-4/4-4.png";
import st5 from "@/assets/M-4/4-5.png";
import st6 from "@/assets/M-4/4-6.png";
import st7 from "@/assets/M-4/4-7.png";
import st8 from "@/assets/M-4/4-8.png";
import st9 from "@/assets/M-4/4-9.png";
import st10 from "@/assets/M-4/4-10.png";
import st11 from "@/assets/M-4/4-11.png";
import st12 from "@/assets/M-4/4-12.png";
import st13 from "@/assets/M-4/4-13.png";
import st14 from "@/assets/M-4/4-14.png";
import st15 from "@/assets/M-4/4-15.png";
import st16 from "@/assets/M-4/4-16.png";
import st17 from "@/assets/M-4/4-17.png";
import st18 from "@/assets/M-4/4-18.png";
import st19 from "@/assets/M-4/4-19.png";
import st20 from "@/assets/M-4/4-20.png";
import st21 from "@/assets/M-4/4-21.png";
import st22 from "@/assets/M-4/4-22.png";
import st23 from "@/assets/M-4/4-23.png";
import st24 from "@/assets/M-4/4-24.png";
import backArrow from "@/assets/back-arrow.svg";
import nextModuleArrow from "@/assets/next-module-arrow.svg";


export default {
  name: "v-module-four",
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
      st11,
      st12,
      st13,
      st14,
      st15,
      st16,
      st17,
      st18,
      st19,
      st20,
      st21,
      st22,
      st23,
      st24,
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




      if (localStorage.getItem('dark')===false){
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