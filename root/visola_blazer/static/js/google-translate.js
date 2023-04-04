// Определяем текущий язык страницы
const currentLang = navigator.language || navigator.userLanguage;

// Находим все флаги
const flags = document.querySelectorAll('.language-selector img');

// Обрабатываем клик по флагу
flags.forEach((flag) => {
  flag.addEventListener('click', () => {
    // Получаем выбранный язык
    const selectedLang = flag.dataset.lang;

    // Если выбранный язык не совпадает с текущим языком страницы, то переводим страницу
    if (selectedLang !== currentLang) {
      // Устанавливаем новый язык страницы
      document.documentElement.lang = selectedLang;

      // Запускаем автоматический перевод страницы
      const script = document.createElement('script');
      script.src = `//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit`;
      document.body.appendChild(script);
    }
  });
});