window.sr = ScrollReveal();

	sr.reveal('.logo', {
		duration: 1500, //tiempo
		origin: 'bottom', //origen
		distance: '-50px', //distancia
		


	}); 

	

	sr.reveal('.atrevete', {
		duration: 1500, //tiempo
		origin: 'right', //origen
		distance: '-100px', //distancia
		

	});

	sr.reveal('.catalogo', {
		duration: 1500, //tiempo
		origin: 'top', //origen
		distance: '-100px', //distancia
		reset: 1000

	});

	sr.reveal('.buttonsCatalogo', {
		duration: 1500, //tiempo
		origin: 'top', //origen
		distance: '-100px', //distancia
		

	});

	sr.reveal('.precios', {
		duration: 1500, //tiempo
		origin: 'top', //origen
		distance: '-100px', //distancia
		reset: 1000

	});

	sr.reveal('.piepagina', {
		duration: 1500, //tiempo
		origin: 'bottom', //origen
		distance: '-100px', //distancia
		reset: 1000

	}); 

	sr.reveal('.float', {
		duration: 1500, //tiempo
		origin: 'top', //origen
		distance: '-100px', //distancia
		reset: 1000

	}); 

	sr.reveal('.pricing-table', {
		duration: 1500, //tiempo
		origin: 'top', //origen
		distance: '-100px', //distancia
	

	}); 

	

$(document).ready(function () {
  $(".nav-link").on('click', function (event) {

    if (this.hash !== "") {
      event.preventDefault();

      var hash = this.hash;

      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 1000, function () {


      });
    }
  });
});

$(document).ready(function(){ 
    $(window).scroll(function(){ 
        if ($(this).scrollTop() > 100) { 
            $('#scroll').fadeIn(); 
        } else { 
            $('#scroll').fadeOut(); 
        } 
    }); 
    $('#scroll').click(function(){ 
        $("html, body").animate({ scrollTop: 0 }, 600); 
        return false; 
    }); 
});