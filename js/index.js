$(function () {
  const redirectTo = (url) => {
    window.location.href = url;
  };

  $('#btnLogin').click(function (e) {
    e.preventDefault();
    redirectTo('loginScreen.html');
  });

  $('#btnRegistro').click(function (e) {
    e.preventDefault();
    redirectTo('registerScreen.html');
  });

  $('#btnCatalog').click(function (e) {
    e.preventDefault();
    redirectTo('catalogScreen.html');
  });

  $('#btnDocumentation').click(function (e) {
    e.preventDefault();
    redirectTo('faqScreen.html');
  });
});
