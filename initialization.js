document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('select');
    var options = document.querySelectorAll('option')
    var instances = M.FormSelect.init(elems, options);
  });


  document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.carousel');
    var instances = M.Carousel.init(elems, {fullwidth: true});
  });