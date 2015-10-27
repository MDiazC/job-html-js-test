conso

$(function(){


    // sercher animations

    $('.search').click(function(){
        if(!$('.input_text').is(":visible")){
            showInputText();
        }
    });



    $('#searcher').focusout(function(){
        $('#searcher .input_text').removeClass('loading');
        removeResultList();
        $('#searcher .input_text').val('');
        hideInputText();
    });

    $('#searcher').keypress(function() {
        $('#searcher .input_text').addClass('loading');

    });

    $('#searcher').keyup(function() {
        setTimeout(function(){ $('#searcher .input_text').removeClass('loading');showResultList(); }, 2000);
    });


   //go to actions


    $(".story").click(function(){
        moveToStory();
    });

    $(".services").click(function(){
        moveToServices();
    });

     $(".work").click(function(){
         moveToWork();
     });

     $(".journal").click(function(){
         moveToJournal();
     });

     $(".contact").click(function(){
         moveToContact();
     });

    $("#arrow_down").click(function(){
        moveToServices();
    });

    $(window).bind('mousewheel DOMMouseScroll', function(event){
        if (event.originalEvent.wheelDelta > 0 || event.originalEvent.detail < 0) {
            moveScrollUp();
        }
        else {
            moveScrollDown();
        }
    });

    $(document).keydown(function(e) {
        if(e.keyCode == 38){
            moveScrollUp();
        }else{
            if(e.keyCode == 40){
                moveScrollDown();
            }
        }
    });

});

function moveToStory() {
    $('html, body').animate({
        scrollTop: $("#home").offset().top
    }, 1000);
}
function moveToServices() {
    $('html, body').animate({
        scrollTop: $("#services").offset().top
    }, 1000);
}
function moveToWork() {
    $('html, body').animate({
        scrollTop: $("#work").offset().top
    }, 1000);
}
function moveToJournal() {
    $('html, body').animate({
        scrollTop: $("#journal").offset().top
    }, 1000);
}
function moveToContact() {
    $('html, body').animate({
        scrollTop: $("#contact").offset().top
    }, 1000);
}

function getCurrentPosition(){
    return $(document).scrollTop();
}

function moveScrollDown(){
    var contactTop = $("#contact").offset().top;
    var journalTop = $("#journal").offset().top;
    var workTop = $("#work").offset().top;
    var servicesTop = $("#services").offset().top;
    var currentPosition= getCurrentPosition();

    if(currentPosition < servicesTop-1){
        moveToServices();
    }else{
        if(currentPosition < workTop-1){
            moveToWork()
        }else{
            if(currentPosition < journalTop-1){
                moveToJournal()
            }else{
                if(currentPosition < contactTop-1){
                    moveToContact();
                }
            }
        }
    }
}

function moveScrollUp(){
    var stroyTop = $("#home").offset().top;
    var contactTop = $("#contact").offset().top;
    var journalTop = $("#journal").offset().top;
    var workTop = $("#work").offset().top;
    var servicesTop = $("#services").offset().top;
    var currentPosition= getCurrentPosition();

    if(currentPosition > contactTop){
        moveToContact();
    }else{
        if(currentPosition > journalTop){
            moveToJournal()
        }else{
            if(currentPosition > workTop){
                moveToWork()
            }else{
                if(currentPosition > servicesTop){
                    moveToServices();
                }else{
                    if(currentPosition > stroyTop){
                        moveToStory();
                    }
                }
            }
        }
    }
}

function showInputText(){
    $('.input_text').css('display',"inline-block");
    $('.input_text').animate({ width: "150px" }, 2000, "linear");
}

function hideInputText(){
    $('.input_text').animate({ width: "0px" },
        2000, "linear",function() {
            $('.input_text').css('display',"none");
        });

}

function showResultList (){
    var results=[];
    results[0]='Work';
    results[1]='Services';
    results[2]='Journal';
    results[3]='Contact';
    results[4]='Team';
    results[5]='Our story';
    results[6]='Social networks';
    results[7]='More';

    removeResultList();

    var numResults=Math.floor(Math.random() * results.length);
    for(var i=0;i<numResults;i++) {
        var rand = results[Math.floor(Math.random() * results.length)];
        $('#searcher').append("<div class='results'>"+rand+"</div>");
    }
}

function removeResultList (){
    $('.results').remove();
}



