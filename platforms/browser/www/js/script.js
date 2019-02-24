/*** Liens actifs ***/

$(document).ready(function(){

var path = window.location.pathname.split("/").pop();
  
  if ( path == '' ) { path = 'accueil.html'; }
      
  var target = $('a[href="'+path+'"]');
  
/*
  var winClass = path.replace('.html', '');
  $('body').addClass(winClass);
*/
  
  target.addClass('actif');
  
  if ( path == 'accueil.html' ){  $('#header').addClass('headerHP'); }
  
});


/*** Mobile nav ***/


$(document).ready(function(){
	
	$('.mobile-nav').on('click', function(){
		$('.menu-mobile-icon').toggleClass('is-clicked'); 
		$('#header').toggleClass('menu-is-open');
		$('body, html').toggleClass('no-scroll');
		
	    
	    $('.menu-overlay').on('click', function(){  closeNav(); });
	    
		if( $('.menu').hasClass('is-visible') ) {
			$('body, html').removeClass('no-scroll');
			$('#header').removeClass('menu-is-open');
			$('.menu').removeClass('is-visible').one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend',function(){
			});
		} else {
			$('body, html').addClass('no-scroll');
			$('#header').addClass('menu-is-open');
			$('.menu').addClass('is-visible').one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend',function(){
			});	
		}
		
		$('.menu a').on('click', function(event){ 
			closeNav();
			
		});
		
	    function closeNav() {
			$('#header').removeClass('menu-is-open');
	        $('.menu-mobile-icon').removeClass('is-clicked');
	        $('body, html').removeClass('no-scroll');
	        $('.menu').removeClass('is-visible');
		}
		
		
		
	});
	
	
});


function loadPlaylist(){

$.post('http://villomediapps.julydesign.com/apps.php?crypto=hiloulaRabetnewRab!',{action:'playlist'},function(e){
	var data = e.split(';');
	for(var i=0;i<data.length;i++){
	var datas = data[i].split('|');
	if(datas[1]){
	$('.table-row').after('<div class="table-row"><div class="w30">'+datas[1]+'</div><div class="w50">'+datas[2]+'</div><div class="w20">1</div></div>');
				}
	
									}
});

		   }					   
					   
