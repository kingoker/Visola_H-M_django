function translatePage(lang) {
    // Выбор элемента для перевода
    var translateContainer = document.getElementById('page-content');
    // Установка языка для перевода
    var languageCode = lang;
    // Вызов функции Google Translate
    new google.translate.TranslateElement({pageLanguage: 'ru', includedLanguages: languageCode, layout: google.translate.TranslateElement.InlineLayout.HORIZONTAL}, 'page-content');
  }


function googleTranslateElementInit() {
    new google.translate.TranslateElement({pageLanguage: 'ru', layout: google.translate.TranslateElement.InlineLayout.HORIZONTAL}, 'google_translate_element');
}
  