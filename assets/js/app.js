$('.toggle').on('click', function () {
  $('.toggle.active').removeClass('active');
  $(this).toggleClass('active');
});

// prevent  inspect
document.onkeydown = function (e) {
  if (e.keyCode == 123) {
    console.log('You cannot inspect Element');
    return false;
  }
  if (e.ctrlKey && e.shiftKey && e.keyCode == 'I'.charCodeAt(0)) {
    console.log('You cannot inspect Element');
    return false;
  }
  if (e.ctrlKey && e.shiftKey && e.keyCode == 'C'.charCodeAt(0)) {
    console.log('You cannot inspect Element');
    return false;
  }
  if (e.ctrlKey && e.shiftKey && e.keyCode == 'J'.charCodeAt(0)) {
    console.log('You cannot inspect Element');
    return false;
  }
  if (e.ctrlKey && e.keyCode == 'U'.charCodeAt(0)) {
    console.log('You cannot inspect Element');
    return false;
  }
};
// prevents right clicking
document.addEventListener('contextmenu', (e) => e.preventDefault());
