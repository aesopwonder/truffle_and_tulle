function setWidth() {
  var one = document.getElementById("js_width_1");
  var two = document.getElementById("nav");
  style = window.getComputedStyle(one);
  wdt = style.getPropertyValue('width');
  console.log(wdt + " WIDTH ");
  two.style.width = wdt;
}
setWidth();
window.onresize = setWidth;
