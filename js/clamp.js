var p=$('.post_preview_text p');
var divh=$('.post_preview_text').height();
while ($(p).outerHeight()>divh) {
    $(p).text(function (index, text) {
        return text.replace(/\W*\s(\S)*$/, '...');
    });
}
