$('.toggle').on('click', function () {
  $('.toggle.active').removeClass('active');
  $(this).toggleClass('active');
});

// prevent  inspect
document.addEventListener('contextmenu', function (e) {
  e.preventDefault();
});
