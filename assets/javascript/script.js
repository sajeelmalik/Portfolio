//Sajeel Malik
//script.js 


$(document).ready(function(){

    //track mouse movement on the   
    $(document).mousemove(function(event) {
        windowWidth = $(window).width();
        windowHeight = $(window).height();
        
        mouseXpercentage = Math.round(event.pageX / windowWidth * 100);
        mouseYpercentage = Math.round(event.pageY / windowHeight * 100);
        
        $('.radial-gradient').css('background', 'radial-gradient(at ' + mouseXpercentage + '% ' + mouseYpercentage + '%,  #f5f5f5, #f8f0cd)');
    });

    var translated = false;

    if(!translated){

        $(document).on("click", "#sajeel", function(){
        // keyframeScaling.restart();
        $("#loading").hide();
        $(this).removeClass("uk-animation-slide-top-medium");
        // $(this).addClass("uk-animation-slide-top uk-animation-reverse uk-animation-slow");
        
        //remove social buttons animation and add exit animation
        $(".social-buttons").removeClass("uk-animation-slide-bottom-medium");
        $(".social-buttons").addClass("uk-animation-slide-bottom uk-animation-reverse uk-animation-slow");

        $(this).css("text-align", "left")
        $(this).css("width", "80%")
        // $(this).css("margin-bottom", "40px")

        $(".liner").addClass("uk-animation-fade uk-animation-slow");
        
        setTimeout(function(){
            $("#footer").append($(".social-buttons"))
            $(".social-buttons").removeClass("uk-animation-slide-bottom uk-animation-reverse uk-animation-slow");
            // $(".social-buttons").addClass("uk-animation-fade uk-animation-slow");
            $(".social-buttons").attr("uk-scrollspy","target: > a; cls:uk-animation-fade; delay: 300");
            

            $(".bio").css("display", "flex")
            $("#footer").show();
            console.log(translated)
            $("#navbar").show();
            $(".portfolio").show();
            $(".liner").show();
            translated = true;
            // $(".radial-gradient").addClass("uk-animation-fade uk-animation-reverse uk-animation-slow");
        }, 2000)
        ;
     })
    }

    //modal triggers to see a full-screen image
    $(document).on("click", ".enlarge-image", function(){
        $("#image-modal").attr("src", $(this).find(':nth-child(1)').attr("src"));
    })

    //Fireworks
    window.human = false;
    var centerX = window.innerWidth / 2;
    var centerY = window.innerHeight / 2;

    function autoClick() {
    //   if (window.human) return;
    //   fireworks.animateParticules(
    //     anime.random(centerX-50, centerX+50), 
    //     anime.random(centerY-50, centerY+50)
    //   );
      anime({duration: 200}).finished.then(autoClick);
    }

    window.addEventListener('load', function() {
      fireworks.render.play();
      autoClick();
      fireworks.setCanvasSize();
    }, false);
      
})