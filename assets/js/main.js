/**************************************************
 *
 * Functions for Donald Knuth Biography
 * AUTHOR   David Leger
 *          www.davidleger.me
 *
 **************************************************/

$(document).ready(function(){

    if(window.location.hash) {
        id = window.location.hash;
        
    }else {
        id = "#introduction";
    }
    changePanel(id);
    $('.nav-item a[href='+ id +']').addClass('active');
    
    navigation();
    scrolling();
});

function navigation(){
    $('.nav-item a').on('click', function(){
        
        var id = $(this).attr('href');
        changePanel(id);
        
        $('.nav-item a').removeClass('active');
        $(this).addClass('active');
        $('.navbar').removeClass('active');
        
    });
    
    $('.next-bubble').on('click', function(){
        var id = $(this).attr('href');
        changePanel(id);
        $('.nav-item a').removeClass('active');
        $('.nav-item a[href='+ id +']').addClass('active');
    });
    
    $('.nav-button').on('click', function(){
        $('.navbar').toggleClass('active');
    });
}


function changePanel(id){
    
    //$('.panel').addClass('out');
    $('.panel').hide();
    $('.panel').removeClass('active');
    $(id).show(300);
    
    $(id).addClass('active');
    $(id).focusin();
    
}

function scrolling(){
    
    $(window).bind('DOMMouseScroll', function(e){
        var delta = e.originalEvent.wheelDelta;
        var content = $('.panel.active .content-body').scrollTop();
        
        $('.panel.active .content-body').scrollTop(content - delta);

     //prevent page fom scrolling
     //return false;
    });

    //IE, Opera, Safari
    $(window).bind('mousewheel', function(e){
    
        var delta = e.originalEvent.wheelDelta;
        var content = $('.panel.active .content-body').scrollTop();
        
        $('.panel.active .content-body').scrollTop(content - delta);

     //prevent page fom scrolling
     //return false;
    });
}