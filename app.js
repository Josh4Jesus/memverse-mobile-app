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

}