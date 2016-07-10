$(document).ready(function() {

// СКРЫТИЕ ИЛИ ПОКАЗ ПРИ ПРОКРУТКЕ
$(window).scroll(function() {
    var top = $(document).scrollTop();
        if (top > 80) { 
            $(".fix").removeClass('none');
            $('.fix-v-m').addClass('none');  
        }
        else { 
            $(".fix").addClass('none');
        }
});

$('.fix-rec').click(function() {
    $('.fix-v-m').toggleClass('none');
    return false;
})

$('.fancy').fancybox({
    'padding' : 0
});

$(".gal-el").fancybox({

});

$('a[rel=group]').fancybox({
    'padding' : 0
});

$('.minfull a').click(function(){
        var where_img = $('.full_img img');
        var who = $(this).find('img');
        where_img.animate({'opacity':'0'},306);
        setTimeout(function(){where_img.attr({'src':who.attr('src')})},306);
        where_img.parent().attr({'href':who.attr('src')});
        where_img.animate({'opacity':'1'},306);
        return false;
    });

$('.win-close').click(function(){
    $.fancybox.close();
});



/******/
var range_all_sliders = {
    'min': [     70 ],
    '10%': [   500,  500 ],
    '50%': [  4000, 1000 ],
    'max': [ 150 ]
};
var slider1 = $('#st3'),
    input1 = $('#st1');
    input2 = $('#st2');

slider1.noUiSlider({
    start: [70, 120],
    step: 1,
    connect: true,
    
    range: {
        'min': 70,
        'max': 150
    }
});
slider1.Link('upper').to(input2, null , wNumb({decimals: 0}));
slider1.Link('lower').to(input1, null , wNumb({decimals: 0}));
$(".pips-range").noUiSlider_pips({
    mode: 'range',
    density: 30,
});


$('.more').click(function(){
    $(this).css({'display':'none'}).parent('.form-line').next().css({'display':'block'});
    return false;
    
});

/*имя файла*/

$('#upload').change(function()
{

    $('#upload').each(function() {
        var name = this.value;
        reWin = /.*\\(.*)/;
        var fileTitle = name.replace(reWin, "$1");
        reUnix = /.*\/(.*)/;
        fileTitle = fileTitle.replace(reUnix, "$1");
        $('#fileformlabel').html(fileTitle);
    });

});

$('minfull a').click(function(){
    $(this).addClass('active');
    $('minfull a').addClass('default');
    return false;
});

$('.minfull a').click(function() {
    $('.minfull a').removeClass("min-active");
})

});