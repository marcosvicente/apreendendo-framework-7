var app = new Framework7({
  swipePanel: 'left',
  debug: true

});

var $$ = Dom7


var mainView = app.addView('.view-main', {
    // Because we use fixed-through navbar we can enable dynamic navbar
    // dynamicNavbar: true
});



/**
 * Page filmes
 */
mainView.router.load({pageName: 'filme'});


/**
 * Page  Historia
 */
 mainView.router.load({pageName: 'historia'});



/**
 * Abrir menu
 */
$$("open-panel-right").on('click', function(e) {
  app.openPanel('right');
});

/**
* Quiz salvar json 
*/

$$('form.ajax-submit').on('form:success', function (e) {
  var xhr = e.detail.xhr; // actual XHR object

  var data = e.detail.data; // Ajax response from action file
  // do something with response data
});
