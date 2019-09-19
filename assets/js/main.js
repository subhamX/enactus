  document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.sidenav');
    var instances = M.Sidenav.init(elems);
    var elems = document.querySelectorAll('.parallax');
    var instances = M.Parallax.init(elems);
    var elems = document.querySelectorAll('#projects');
    var instances = M.Carousel.init(elems, {fullWidth:true, indicators:true});
    var elems = document.querySelectorAll('#mainslider');
    var instances = M.Carousel.init(elems, {fullWidth:false, indicators:true});
    var projects = M.Carousel.getInstance(document.getElementById('projects'));
    
    document.getElementById('projectpast-next').addEventListener('click', ()=>{
      projects.next();
  });
    
    var elems = document.querySelectorAll('#mobprojects');
    var instances = M.Carousel.init(elems);
  });