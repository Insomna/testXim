function accordeon(controller){
  $(controller.data('accordeon')).toggleClass('active');
}

$(function (){
  $('.accordeon__controller').click(function(){
    accordeon($(this));
  });
});
//# sourceMappingURL=all.js.map
