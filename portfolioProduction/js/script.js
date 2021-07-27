


$('document').ready(function () {

  particlesJS.load('particles-js', 'particles.json', function () {
    console.log('particles.js loaded - callback');
  });
  particlesJS2.load('particles-js-web', 'particles2.json', function () {
    console.log('particles2.js loaded - callback');
  });
  
   
  let projectBox = $('#projectBoxContainer');
  let szoftProject = $('#szoftProject h1');
  let projectCloseButton = $('#projektCloseBtn');
  let projektCim = $('#projektNev');

  //functions
  function windowClose(windowTarget) {
    $(windowTarget).hide(1000);
  
  }
  function buttonFelold() {
    console.log("probalom");
    if (validNev == true && validEmail == true) {
      console.log("igeeen");
      submitBtn.removeAttr("disabled");
    }
  }
  
  function buttonZar() {
    submitBtn.attr("disabled","disabled");
  }

  function h1HatraKuldes() {
    nyitoProjektWebBtn.css({ "z-index": 8 });
    szoftProject.css({ "z-index": 8 });
  }
  function boxFunctionsNyitasnal() {
    h1HatraKuldes();
    bodyScrollOff();
  }
  function boxFunctionsClose() {
    h1Vissza();
    bodyScroll();
  }
  function h1Vissza() {
     nyitoProjektWebBtn.css({ "z-index": 10 });
    szoftProject.css({ "z-index": 10 });
  }
  function bodyScrollOff() {
    $('body').css({ 'overflow': 'hidden' });
  }
  function bodyScroll() {
    $('body').css({ 'overflow': 'auto' });
  }
  /*$(function () {
    projectBox.dialog({
      autoOpen: false,
      draggable: false,
      height: 600,
      width: 600,
        modal: true
    });
  });*/
    projectBox.hide();
  szoftProject.on('click', function(){
    projectBox.show(1000).css({"display":"inline-block","overflow":"visible"});
    
    projektCim.fadeIn(1000).css( "transform","scale(1.2)",
      "transition", "transform 1000ms");
    boxFunctionsNyitasnal();
    
    /*start particles*/
   /* particlesJS.load('particles-p-js', 'particles_p.json', function() {
  console.log('particles.js loaded - callback');
    });*/
    
  });

  projectCloseButton.on('click', function(e){
    projectBox.hide(1000);
    e.stopPropagation();
    boxFunctionsClose();
  });
  

//webes doboz interakciói
  let nyitoProjektWebBtn = $("#webProject h1");
  let closeButtonWeb = $('#projektCloseBtnWeb');
  let webBoxContainer = $('#webBoxContainer');


  nyitoProjektWebBtn.on('click', () => {
    webBoxContainer.toggle(1000);
    boxFunctionsNyitasnal();
    /*if ($(window).width() < 500) {
      simpleBarBox[0].setAttribute('data-simplebar');
    }*/
   

  });
  
  /*function simpleBarToggle() {
     if ($(window).width() < 500) {
      simpleBarBox[0].toggleAttribute('data-simplebar');
    }
  };*/


  closeButtonWeb.on('click', function (e) {
    webBoxContainer.hide(1000);
    e.stopPropagation();
    boxFunctionsClose();
  }
  );
/*simplebar  remove if resize
  let simpleBarBox = $('#simple-bar');
  $(window).resize(function(){
    if ($(window).width() > 500 && simpleBarBox[0].hasAttribute('data-simplebar')) {
      simpleBarBox.removeAttr("data-simplebar");
    }
    else {
      simpleBarBox[0].setAttribute('data-simplebar');
    };


  });

  */    
  


//form validálás
  let form_controls = $('.form-control');
  let inputs= $('.form-control input');
  let submitBtn = $("#formBtn");
  const emailReg = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
  //const nevReg = [A - Z];
  
  let validNev = false;
  let validEmail = false;

  //#nev ellenorzese
  $(inputs[0]).focusout(() => {
    if ($(inputs[0]).val().trim() == "") {
      $(inputs[0]).css({ "border": "3px solid red" }).animate({"border-left-width": "35px"});
      //$(form_controls[0] + " input").animate({ "left-border-width": "35px" });
      $(form_controls[0]).children("i.fa-frown-open")
         .animate({ 'left': '30px' })
        .css({ 'opacity': 1, 'color': 'red' });
      $(form_controls[0]).children("i.fa-smile-wink")
        .animate({ 'left': '0' })
        .css({ 'opacity': 0 });
      $(this).css({ "color": "red", 'padding-left': '30px', "border-left-width": "35px" });
      $(form_controls[0]).children('p').css("visibility", "visible");
      validNev = false; 
    }
    else {
      $(form_controls[0]).children("i.fa-smile-wink")
        .animate({ left: '30px' })
        .css({ 'opacity': 1, 'color': 'purple' });
      $(form_controls[0]).children("i.fa-frown-open")
        .animate({ left: '0'})
        .css({ 'opacity': 0 });
      $(inputs[0]).css({"color": "rgb(222, 127, 222)","border":"2px solid rgb(222, 127, 222)"}).animate({"border-left-width": "35px"});
      $(form_controls[0]).children('p').css("visibility", "hidden");
       validNev = true;
       
    }
    buttonFelold();
  }); //focusout #nev
//email ellenőrzése
   $(inputs[1]).focusout(() => {
    if ($(inputs[1]).val() == "" || !emailReg.test($(inputs[1]).val())) {
      $(inputs[1]).css("border","3px solid red").animate({"border-left-width": "35px"});
      $(form_controls[1]).children("i.fa-frown-open")
         .animate({ left: '30px' })
        .css({ 'opacity': 1, 'color': 'red' });
      $(form_controls[1]).children("i.fa-smile-wink")
        .animate({ left: '0' })
        .css({ 'opacity': 0 });
      $(this).css({ "color": "red", 'padding-left': '30px' });
      $(form_controls[1]).children('p').css("visibility", "visible");
      validEmail = false;
    }
    else {
      $(form_controls[1]).children("i.fa-smile-wink")
        .animate({ left: '30px' })
        .css({ 'opacity': 1, 'color': 'purple' });
      $(form_controls[1]).children("i.fa-frown-open")
        .animate({ left: '0'})
        .css({ 'opacity': 0 });
      $(inputs[1]).css({"color": "rgb(222, 127, 222)","border":"2px solid rgb(222, 127, 222)"}).animate({"border-left-width": "35px"});
      $(form_controls[1]).children('p').css("visibility", "hidden");
      validEmail = true;
      
    }
     buttonFelold();
   }); //focusout #email
  //ikonok eltüntetése ujrakattintásnál
  $(inputs[0]).focusin(() => {
    $(this).nextAll().css("opacity", 0);
  });

   $(inputs[1]).focusin(() => {
    $(this).nextAll().css("opacity", 0);
  });
 


  



//üzenetküldés
  let working = false;
$('.contact-form').on('submit', function(e) {
  e.preventDefault();
  if (working) return;
  
  working = true;
    let $this = $(this),
      $state = $this.find('button > .state');
    $this.addClass('loading')
      .css({ "color": "purple", "font-weight": "bold" });
    $state.html('Küldés folyamatban')
      .css({ "color": "purple", "font-weight": "bold" });


  if (submitBtn.children("div").hasClass("notLoading")) {
    setTimeout(function () {
      $this.addClass('notOk');
      $state.html('Üzenet küldése sikertelen! \uf57a').css({ "color": "white", "font-weight": "bold" }).animate();
      setTimeout(function () {
        $state.html('Küldés');
        $this.removeClass('notOk loading');
        working = false;
      }, 2000);
    }, 1500);
    
  }
  else {

  setTimeout(function() {
    $this.addClass('ok');
    
    $state.html('Üzenet elküldve!');
    setTimeout(function() {
      $state.html('Küldés');
      $this.removeClass('ok loading');
      working = false;
    }, 4000);
  }, 3000);

  }
  
  $(inputs).val('');

  buttonZar();
});


//mobilemenu hatteradása
  if(window.length == 600){
    $("#menuUlDivMobil").addClass('acrylic');
  }

});  //document ready





