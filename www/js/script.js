/*** Liens actifs ***/

function info_custom(){

$.post('http://villomediapps.villomedia.com/apps.php?crypto=hiloulaRabetnewRab!',{action:'info_client'},function(e){ 
$('.bonjour').html(e.nom+' '+e.prenom);
$('.ttpromo').html(e.nbpromo);
maxpromo(e.nbpromo);
$('.usr-logo').attr('src',e.logo);
});


	
				      }

function _destroyconnexion(){
	
	$.post('http://villomediapps.villomedia.com/apps.php?crypto=hiloulaRabetnewRab!',{action:'deconnexion'},function(e){ document.location.href="index.html"; return;});
	
							 }

function _testlogin(){

info_custom();
	
$.post('http://villomediapps.villomedia.com/apps.php?crypto=hiloulaRabetnewRab!',{action:'info_client'},function(e){	
	
if(e){
	
}else{
document.location.href="index.html";
return;
}
					});
					
					}

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

$.post('http://villomediapps.villomedia.com/apps.php?crypto=hiloulaRabetnewRab!',{action:'playlist'},function(e){
	var data = e.split(';');
	for(var i=0;i<data.length;i++){
	var datas = data[i].split('|');
	if(datas[1]){
		
/*
		if(datas[5] > 0){
			var lastspan = '<span rel="'+datas[3]+'" class="icon versmoins" data-icon="&#xec71;"></span> '+datas[4]+' <span class="icon versplus" data-icon="&#xec72;"></span>';
		}else{
			var lastspan = '';
		}
*/

var t = datas[0].split('.');

if(t[1] == 'mp4'){ var link = 'http://manager.villomedia.com/img/temps/'+datas[0]; }else{ var link = 'http://villomediapps.villomedia.com/players/themes/bienvenue.php?id_annonce='+datas[5]; }

	var lastspan = '';	
	$('.flex-table').append('<div class="table-row"><div class="w55">'+datas[1]+'</div><div class="w30">'+datas[2]+'</div><div class="w15"><a href="'+link+'" target="_blank" class="icon btn small-btn bgcolor1" data-icon="&#xe9b8;"></a></div>');
				}
	
									}
									
									$('.flex-table').on('click','.versmoins',function(e){ alert($(this).attr('rel')); });
});



		   }	
		   

$('.table-content').on('click','.editerpromo',function(){ 
document.location.href='add-promo.html?'+$(this).attr('rel');	

});
		   
function loadPromo(){

$.post('http://villomediapps.villomedia.com/apps.php?crypto=hiloulaRabetnewRab!',{action:'promo'},function(e){
	var data = e.split(';');
	for(var i=0;i<data.length;i++){
	var datas = data[i].split('|');
	if(datas[1]){
	
	
	if(datas[5] == 1){ var actif = 'bgcolor3'; }else{ var actif = 'bgcolor1'; }
	
	$('.flex-table').append('<div class="table-row"><div class="w30">'+datas[0]+'</div><div class="w15">'+datas[1]+' €</div><div class="w20">'+datas[2]+' €</div><div class="w15"><span class="highlight bubble '+actif+'"></span></div><div class="w35"><a href="#0" class="icon btn small-btn bgcolor1 editerpromo" rel="'+datas[3]+'-'+datas[4]+'" data-icon="&#xe926;"></a><a href="#0" class="icon btn small-btn bgcolor2 supprpromo" data-annonce="'+datas[3]+'" data-icon="&#xe994;"></a></div></div>');
				}
	
									}
									
									$('.supprpromo').on('click',function(e){ 
									
			$.post('http://villomediapps.villomedia.com/apps.php?crypto=hiloulaRabetnewRab!',{action:'delpromo',id_annonce:$(this).attr('data-annonce')},function(e){ document.location.href="promo.html";	 }); 
								
																						});
});



		   }
		   
		   
		   
function loadtheme(){

if(document.location.href.split('?')[1]){

$('#idannonce').val(document.location.href.split('?')[1].split('-')[0]);

if($('#idannonce').val()){ 
	
	$('#prevzns').attr('src','http://villomediapps.villomedia.com/players/themes/'+document.location.href.split('?')[1].split('-')[1]+'?id_annonce='+$('#idannonce').val()); 
	
	
	$('#idtheme').val(document.location.href.split('?')[1].split('-')[1]);
						}
										}

$.post('http://villomediapps.villomedia.com/apps.php?crypto=hiloulaRabetnewRab!',{action:'theme'},function(e){
	
	var data = e[0].split(';');
	for(var i=0;i<data.length;i++){
	var datas = data[i].split('|');
	if(datas[1]){
	
	$('#nomchmps').before('<span rel="'+datas[2]+'" data-input="'+datas[3]+'" class="check-icon"><img src="themes/thumbs/'+datas[1]+'"><input type="radio" id="revenu1" name="theme[]" value="1"><i><span class="btn bgcolor2" data-name="'+datas[0]+'">'+datas[0]+'</span></i></span>');
				}
	if($('.check-icon').find('input').prop('checked')){ $('.check-icon').addClass('selected');}
									}
									
									$('.flex-table').on('click','.versmoins',function(e){ alert($(this).attr('rel')); });
// 									$('.prev').html(e[1]);
});

/*
$('#prix').val($("#prevzns").contents().find('.old-price').html().replace('€',''));
$('#nvprix').val($("#prevzns").contents().find('.new-price').html().replace('€',''));
*/

		   }		   			   				   



$('.flexGrid').on('change','.check-icon',function(e){

				$('#prevzns').attr('src','http://villomediapps.villomedia.com/players/themes/'+$(this).attr('rel')+'?id_annonce='+$('#idannonce').val());
				$('#idtheme').val($(this).attr('rel')); 
				if($(this).find('input').prop('checked')){ $(this).addClass('selected'); $(this).siblings().removeClass('selected'); }else{ $(this).removeClass('selected'); }
				

//Ont masque ou ont affiche le champs en fonction
$('#prix').show();
$('#nvprix').show();

if( $(this).attr('data-input') ){ 
var chmpsin = $(this).attr('data-input').split('-');
var inp = chmpsin[0].split('/');

if(inp[0] == 1){
$('.inmptxtold').html(inp[1]);
if(!chmpsin[1]){ $('#nvprix').hide(); }else{ var inp2 = chmpsin[1].split(':'); $('.newprixtxtimp').html(inp2[1]); $('#nvprix').show(); }
			   }

							
								
								
								}
				
				 });
					   
//CONNEXION
$('.connexion').on('click',function(e){
$.post('http://villomediapps.villomedia.com/apps.php?crypto=hiloulaRabetnewRab!',{action:'verif_login',login:$('#login').val(),pass:$('#password').val()},function(e){
	if(e != 'OK'){
		
	$('.login-error').html(e);
				 }else{
	$('.login-error').html('');	
	
document.location.href="home.html";
			 
				 }
});
	
	});
	
//CONTACT
$('#contactBT').on('click',function(e){
$.post('http://villomediapps.villomedia.com/apps.php?crypto=hiloulaRabetnewRab!',{action:'contact',
	nom:$('#nom').val(),
	prenom:$('#prenom').val(),
	tel:$('#tel').val(),
	email:$('#email').val(),
	obj:$('#obj').val(),
	message:$('#message').val(),
	},function(e){	
	
	if(e != 'send'){
	for(var i=0;i<7;i++){
		if(e[i]){
	$('.err'+i).html(e[i]);
	console.log(e[i]);
				}
				
									     }
									     
									     }else{
					$('.form-content').html('<h3 class="ss-title">Votre message a bien été envoyé</h3><p>Nous vous répondrons dans les plus brefs délais.</p><p> Nous vous remercions, de votre confiance.</p>');
				}

	});
	
		});
		
jQuery(document).ready(function($){
	
	$('.modal-btn').on('click', function(){  $('.modal').addClass('is-visible');  });
    
	$('.modal').on('click', function(event){
	if ($(event.target).is('.modal') || $(event.target).is('.modal-close')) { 
		$('.modal').removeClass('is-visible'); 
		return false;
		}	
	});
});		
	
$('#searchBrand').on('click',function(e){
	
	$.post('http://villomediapps.villomedia.com/apps.php?crypto=hiloulaRabetnewRab!',{action:'findmarque',find:$('#search').val()
		
		},
		function(e){
		
		var data = '';
		
		for(i=0;i<e.length;i++){
		
			if(e){
			
				data += '<li><a href="#0" rel="'+e[i].id_marques+'" class="listimg-item"><img class="center-item" src="http://villomediapps.villomedia.com/players/themes/img/marques/'+e[i].logo_marque+'" alt=""/></a></li>';
		
				
				
				

				
				}
				
							}
							
			$('.reponselsit').on('click','.listimg-item, .prodtc', function(event){ 
			if(!$(this).hasClass('prodtc')){
			
			$.post('http://villomediapps.villomedia.com/apps.php?crypto=hiloulaRabetnewRab!',{action:'findproduit',marque:$(this).attr('rel')},function(z){ 
			var data2 = '';	
			
			
			
			for(i=0;i<z.length;i++){
		
		
		
		
			data2 += '<li><a href="#0" rel="'+z[i][1]+'" data-marque="'+z[i][2]+'" data-nom="'+z[i][2]+'" class="listimg-item prodtc"><img class="center-item" src="http://villomediapps.villomedia.com/players/themes/img/'+z[i][1]+'" alt=""/></a></li>';
			
							       }
			$('.reponselsit').html(data2);	
			
										
				
			});
			                            }else{
				                            $('.modal').removeClass('is-visible'); 
				                            //$("#prevzns").contents().find("h1").html($(this).attr('data-marque'));
				                           $("#prevzns").contents().find(".imgchange").attr('src','http://villomediapps.villomedia.com/players/themes/img/'+$(this).attr('rel') ); 
				                           $('#visuel').val($(this).attr('rel'));
				                          	$('#header').removeClass('menu-is-open');
	        $('.menu-mobile-icon').removeClass('is-clicked');
	        $('body, html').removeClass('no-scroll');
	        $('.menu').removeClass('is-visible');
				                          
				                            
			                            }
			});				
							
			$('.reponselsit').html(data);				
		}
		);
	

	
	});	

		
$('#prix, #nvprix').on('keypress mouseout focus change keyup',function(e){ 
	var prfx = '';
	if($("#prevzns").contents().find('.prefix').html()){
	var prfx = '<span class="prefix">'+$("#prevzns").contents().find('.prefix').html()+'</span>';
														}

	$("#prevzns").contents().find('.old-price').html(prfx+' '+$('#prix').val()+'€'); 
	
	});

$('#nvprix, #prix').on('keypress mouseout focus change keyup',function(e){ 
	var prfx = '';
	if($("#prevzns").contents().find('.prefix2').html()){
	var prfx = '<span class="prefix2">'+$("#prevzns").contents().find('.prefix2').html()+'</span>';
													    }
	
	$("#prevzns").contents().find('.new-price').html(prfx+' '+$('#nvprix').val()+'€');  
	
	});	
	
$('#savepromo').on('click',function(e){
	
	var prix   = $('#prix').val();
	var nvprix = $('#nvprix').val();
	var thms   = $('#idtheme').val();
	var visu   = $('#visuel').val();
	
	if(!prix || isNaN(prix) == true){
		
	alert('Prix Obligatoire');
	}else{
	
	$.post('http://villomediapps.villomedia.com/apps.php?crypto=hiloulaRabetnewRab!',{action:'add_theme',prix:prix,nvprix:nvprix,theme:thms,visuel:visu,id_annonce:$('#idannonce').val(),chosen:$('#chosen-value').val()
	
	},
		function(e){
			
		$('.form-content').html('<h1>Votre Promotion a bien été enregistré et sera diffusé dans quelques instants. Pour modifier ou supprimer directement vers "la liste de vos promotions".</h1>');
		setTimeout(function(){location.href="promo.html"} , 3000);  
	//document.location.href="promo.html";	
			});	
		
	}
	});	
	
	function maxpromo(nbpromo){
		if(nbpromo < 3){
			$('.creepromo').attr('href','add-promo.html');
		}else{
		    $('.maxatteins').html('Promotions Max. atteintes');	
		}
					          }
					          
					          
	function setTextColor(picker) {
		var color = picker.toString();
		var gradient = 'background: linear-gradient(to bottom, #FFF, #'+color+');'
		$("iframe").contents().find("body").attr("style", gradient);
		//document.getElementsByTagName('body')[0].style.color = '#' + picker.toString()
	}				          