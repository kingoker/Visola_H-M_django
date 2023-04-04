const russianFlag = document.getElementById('russian-flag');
const englishFlag = document.getElementById('english-flag');
const uzbekFlag = document.getElementById('uzbek-flag');

russianFlag.addEventListener('click', () => {
  // Устанавливаем язык страницы на русский
  document.documentElement.lang = 'ru';
  // Переводим страницу на русский язык с помощью Google Translate
  googleTranslateElementInit();
});

englishFlag.addEventListener('click', () => {
  // Устанавливаем язык страницы на английский
  document.documentElement.lang = 'en';
  // Переводим страницу на английский язык с помощью Google Translate
  googleTranslateElementInit();
});

uzbekFlag.addEventListener('click', () => {
    // Устанавливаем язык страницы на английский
    document.documentElement.lang = 'uz';
    // Переводим страницу на английский язык с помощью Google Translate
    googleTranslateElementInit();
});