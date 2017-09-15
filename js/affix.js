$('#nav').affix({

  offset: {
    top: function() { return $('#header').height()+10; }
  }
});
