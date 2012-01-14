if (window.innerWidth && window.innerWidth <= 480) { 
    $(document).ready(function(){ 
        $('#nav ul').addClass('hide'); 
        $('#header').append('<div class="leftButton" onclick="toggleMenu()">Menu</div>'); 
    });
    function toggleMenu() { 
        $('#nav ul').toggleClass('hide'); 
        $('#header .leftButton').toggleClass('pressed')

    }
}
$(document).ready(function(){ 
    loadPage();
});
function loadPage(url) {
$('body').append('<div id="progress"><br><img src="loading_1.gif" width="40" height="40"><br>Loading</div>');
   if (url == undefined) {
      $('#news-strip').load('http://www.memverse.com #news-strip ul', hijackLinks);
   } else {
      $('#container').load(url + ' #content', hijackLinks);
   }
}
function hijackLinks() {
    $('#container a').click(function(e){
        e.preventDefault();
        loadPage(e.target.href);
    });
$('#progress').remove();
}