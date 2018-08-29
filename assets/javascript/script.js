//Sajeel Malik
//script.js 

$(document).mousemove(function(event) {
    windowWidth = $(window).width();
    windowHeight = $(window).height();
    
    mouseXpercentage = Math.round(event.pageX / windowWidth * 100);
    mouseYpercentage = Math.round(event.pageY / windowHeight * 100);
    
    $('.radial-gradient').css('background', 'radial-gradient(at ' + mouseXpercentage + '% ' + mouseYpercentage + '%,  #f5f5f5, #f8f0cd)');
  });

// $(document).on("click", ".fa-linkedin", function(event){
//     $('.radial-gradient').css('background', 'radial-gradient(at center,  rgb(230, 231, 238), rgb(94, 106, 236))');
// })