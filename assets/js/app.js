$('.toggle').on('click', function(){
    $('.toggle.active').removeClass('active');
    $(this).toggleClass('active');
});
