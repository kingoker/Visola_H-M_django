window.onload = () => {
    googleTranslateElementInit();
  };

function googleTranslateElementInit() {
    new google.translate.TranslateElement({pageLanguage: 'ru', includedLanguages: 'en,ru', layout: google.translate.TranslateElement.InlineLayout.SIMPLE}, 'google_translate_element');
}
  
document.querySelectorAll('img[data-lang]').forEach(flag => {
flag.addEventListener('click', () => {
    const lang = flag.dataset.lang;
    const googleTranslateElement = document.querySelector('.goog-te-banner-frame');
    if (googleTranslateElement) {
    googleTranslateElement.style.display = 'none';
    }
    new google.translate.TranslateElement({pageLanguage: 'ru', includedLanguages: lang, layout: google.translate.TranslateElement.InlineLayout.SIMPLE}, 'google_translate_element');
});
});
  

// $('.language__img').click(function () {
//     const googleTranslateConfig = {
//         lang: "ru",
//         userAgent: false,
//       };
      
//       function TranslateInit() {
//         let code = TranslateGetCode();
//         $('[data-google-lang="' + code + '"]').addClass('language__img_active');
//         if (code == googleTranslateConfig.lang) {
//           TranslateClearCookie();
//         }
//         new google.translate.TranslateElement({
//           pageLanguage: googleTranslateConfig.lang,
//         });
//         $('[data-google-lang]').click(function () {
//           TranslateSetCookie($(this).attr("data-google-lang"));
//           window.location.reload();
//         });
//       }
      
//       function TranslateGetCode() {
//         let lang = ($.cookie('googtrans') != undefined && $.cookie('googtrans') != "null") ? $.cookie('googtrans') : googleTranslateConfig.lang;
//         return lang.substr(-2);
//       }
      
//       function TranslateClearCookie() {
//         $.cookie('googtrans', null);
//         $.cookie("googtrans", null, {
//           domain: "." + document.domain,
//         });
//       }
      
//       function TranslateSetCookie(code) {
//         $.cookie('googtrans', "/auto/" + code);
//         $.cookie("googtrans", "/auto/" + code, {
//           domain: "." + document.domain,
//         });
//       }
// });