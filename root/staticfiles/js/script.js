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
const modelNumbers = document.querySelectorAll('.model__image .number');
const modelInformationNumber = document.querySelector('.model__number');
const modelInformationName = document.querySelector('.model__name');
const modelInformationText = document.querySelector('.model__information__text');

function changeModelInformation(event) {
  // Get the number of the clicked button
  const buttonNumber = event.target.textContent;

  // Change the text in the model information block based on the button number
  if (buttonNumber === '1') {
    modelInformationNumber.textContent = "1";
    modelInformationName.textContent = "Рукава “Аля-Бонжур”";
    modelInformationText.textContent = "Информация о компаниях в категории Рукава напорные была проверенной и достоверной на момент включения каждой из компаний на сайт Prom.uz Информация ой из компаний на сайт Prom.uz Информация о компаниях в категории Рукава напорные была проверенной и достоверной на момент.";
  } else if (buttonNumber === '2') {
    modelInformationNumber.textContent = "2";
    modelInformationName.textContent = "Мужской воротник с застежкой на две пуговицы";
    modelInformationText.textContent = "Информация о компаниях в категории Воротники мужские была проверенной и достоверной на момент включения каждой из компаний на сайт Prom.uz. Будьте внимательны, проверяйте информацию перед покупкой.";
  } else if (buttonNumber === '3') {
    modelInformationNumber.textContent = "3";
    modelInformationName.textContent = "Карманы с клапанами";
    modelInformationText.textContent = "Информация о компаниях в категории Карманы для пиджаков была проверенной и достоверной на момент включения каждой из компаний на сайт Prom.uz. Будьте внимательны, проверяйте информацию перед покупкой.";
  } else if (buttonNumber === '4') {
    modelInformationNumber.textContent = "4";
    modelInformationName.textContent = "Базовая ткань мужского пиджака";
    modelInformationText.textContent = "Информация о компаниях в категории Ткани для пиджаков мужских была проверенной и достоверной на момент включения каждой из компаний на сайт Prom.uz. Будьте внимательны, проверяйте информацию перед покупкой.";
  }
}

// Add event listeners to all the number buttons
modelNumbers.forEach(button => {
  button.addEventListener('click', changeModelInformation);
});



// Повявление кнопк
let modelImages = document.querySelectorAll('.model__element');

modelImages.forEach(function(image) {
  image.addEventListener('load', function() {
    let allLoaded = true;
    modelImages.forEach(function(image) {
      if (!image.getAttribute('src')) {
        allLoaded = false;
      }
    });
    if (allLoaded) {
      document.querySelector('.button.instruction__button').style.display = "block";
    }
  });
});