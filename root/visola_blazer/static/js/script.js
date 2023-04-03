// Работа с гугл 
document.cookie = "googtrans=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
location.reload();


// loader на сайте
window.addEventListener('load', function() {
  const preloader = document.querySelector('.preloader');
  preloader.classList.add('hide');
});


// Замена основы
// Получаем ссылки на все маленькие изображения
var baseOfJacet = document.querySelectorAll(".baseOfJacet__list .components__item img");

// Обходим все маленькие изображения и назначаем обработчик событий для щелчка
for (var i = 0; i < baseOfJacet.length; i++) {
    baseOfJacet[i].addEventListener("click", function() {
    // Получаем путь к маленькому изображению
    var smallImagePath = this.src;

    // Обновляем большое изображение
    var bigImage = document.getElementById("mainBaseOfJacet");
    bigImage.src = smallImagePath;
  });
}


// Замена воротника
// Получаем ссылки на все маленькие изображения
var headerOfJacet = document.querySelectorAll(".headerOfJacet__list .components__item img");

// Обходим все маленькие изображения и назначаем обработчик событий для щелчка
for (var i = 0; i < headerOfJacet.length; i++) {
    headerOfJacet[i].addEventListener("click", function() {
    // Получаем путь к маленькому изображению
    var headerOfJacetsmallImagePath = this.src;

    // Обновляем большое изображение
    var headerOfJacetImage = document.getElementById("headerOfJacet");
    headerOfJacetImage.src = headerOfJacetsmallImagePath;
  });
}


// Замена рукавов
// Получаем ссылки на все маленькие изображения
var handsOfJacet = document.querySelectorAll(".handsOfJacet__list .components__item img");

// Обходим все маленькие изображения и назначаем обработчик событий для щелчка
for (var i = 0; i < handsOfJacet.length; i++) {
    handsOfJacet[i].addEventListener("click", function() {
    // Получаем путь к маленькому изображению
    var handsOfJacetsmallImagePath = this.src;

    // Обновляем большое изображение
    var headerOfJacetImage = document.getElementById("handsOfJacet");
    headerOfJacetImage.src = handsOfJacetsmallImagePath;
  });
}


// Замена кармана
// Получаем ссылки на все маленькие изображения
var pocketOfJacet = document.querySelectorAll(".pocketOfJacet__list .components__item img");

// Обходим все маленькие изображения и назначаем обработчик событий для щелчка
for (var i = 0; i < pocketOfJacet.length; i++) {
    pocketOfJacet[i].addEventListener("click", function() {
    // Получаем путь к маленькому изображению
    var pocketOfJacetsmallImagePath = this.src;

    // Обновляем большое изображение
    var headerOfJacetImage = document.getElementById("pocketOfJacet");
    headerOfJacetImage.src = pocketOfJacetsmallImagePath;
  });
}



// Замена верхнего кармана
// Получаем ссылки на все маленькие изображения
var toppocketOfJacet = document.querySelectorAll(".toppocketOfJacet__list .components__item img");

// Обходим все маленькие изображения и назначаем обработчик событий для щелчка
for (var i = 0; i < toppocketOfJacet.length; i++) {
    toppocketOfJacet[i].addEventListener("click", function() {
    // Получаем путь к маленькому изображению
    var toppocketOfJacetsmallImagePath = this.src;

    // Обновляем большое изображение
    var headerOfJacetImage = document.getElementById("toppocketOfJacet");
    headerOfJacetImage.src = toppocketOfJacetsmallImagePath;
  });
}






// Добавление и удаление классов
// получаем все элементы с классом "components__item"
const items = document.querySelectorAll(".components__item");

// перебираем элементы и назначаем обработчик клика на каждый из них
items.forEach((item) => {
  item.addEventListener("click", function() {
    // получаем родительский элемент, содержащий элемент, на который был сделан клик
    const parentFrame = item.closest(".components__frame");
    
    // ищем все элементы внутри родительского элемента, кроме текущего элемента, и удаляем у них классы
    parentFrame.querySelectorAll(".components__item").forEach((otherItem) => {
      if (otherItem !== item) {
        otherItem.classList.remove("components__item-active");
      }
    });
    
    // добавляем класс "components__item-active" текущему элементу
    item.classList.add("components__item-active");
  });
});






// изменение информации о выбранном компаненте
// меняем нажатый номер
let modelNames = {
  "1": "Воротник",
  "2": "Верхний карман",
  "3": "Основа",
  "4": "Рукава",
  "5": "Карманы",
};

let numbers = document.querySelectorAll('.number');

numbers.forEach(function(number) {
  number.addEventListener('click', function() {
    let selectedNumber = this.textContent;
    document.querySelector('.model__number').textContent = selectedNumber;
    document.querySelector('.model__name').textContent = modelNames[selectedNumber];
  });
});





// Меняем значения описания детали
function activateComponent(componentNumber) {
  const componentsList = document.querySelectorAll('.components__list');
  const activeComponent = componentsList[componentNumber - 1].querySelector('.components__item-active');
  const description = activeComponent.nextElementSibling.innerHTML;
  document.querySelector('.model__information__text').innerHTML = description;
}




// Появление кнопки
const modelElements = document.querySelectorAll('.model__element');

modelElements.forEach(modelElement => modelElement.addEventListener('load', () => {
  const allElementsLoaded = [...modelElements].every(modelElement => modelElement.getAttribute('src'));
  const instructionButton = document.querySelector('.instruction__button');
  if (allElementsLoaded) {
    instructionButton.style.display = 'block';
  }
}));





// Изменение цвета
const colorsImg = document.querySelectorAll('.colors__img');
const modelElement = document.querySelectorAll('.model__element');
colorsImg.forEach(c => {
  c.addEventListener('click', function() {
      modelElement.forEach(m => {
            let classes = m.className.split(' ');
            if (classes.length > 1) {
              m.classList.remove(classes[classes.length-1]);
            }
            m.classList.add(this.classList[1]);            
      });
  });
});




// Отправка параметров в ссылке
const instructionButton3 = document.querySelector('.instruction__button');

const observer = new MutationObserver(function(mutations) {
    for (let mutation of mutations) {
        // Запрет на изменение элементов
        const components_items = document.querySelectorAll('.components__item');
        components_items.forEach(function(elem) {
          elem.style.pointerEvents = "none";
        });

        if (mutation.attributeName === 'style' && instructionButton3.style.display === 'block') {
            const activeBase = document.querySelector('.baseOfJacet__list .components__item-active .component__pk').textContent;
            const activeHeader = document.querySelector('.headerOfJacet__list .components__item-active .component__pk').textContent;
            const activeHands = document.querySelector('.handsOfJacet__list .components__item-active .component__pk').textContent;
            const activePocket = document.querySelector('.pocketOfJacet__list .components__item-active .component__pk').textContent;
            const activetopPocket = document.querySelector('.toppocketOfJacet__list .components__item-active .component__pk').textContent;

            const url = `/instruction/${activeBase}/${activeHeader}/${activeHands}/${activePocket}/${activetopPocket}`;
            instructionButton3.setAttribute('href', url);
        }
    }
});

observer.observe(instructionButton3, {attributes: true});