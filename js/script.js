


$('document').ready(function () {

  particlesJS.load('particles-js', 'particles.json', function () {
    console.log('particles.js loaded - callback');
  });
  
   
  let projectBox = $('#projectBoxContainer');
  let szoftProject = $('#szoftProject');
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
    projectBox.show(1000);
    projektCim.fadeIn(1000).css( "transform","scale(1.2)",
        "transition","transform 1000ms");
    /*start particles*/
   /* particlesJS.load('particles-p-js', 'particles_p.json', function() {
  console.log('particles.js loaded - callback');
    });*/
    


  });

  projectCloseButton.on('click', function(e){
    projectBox.hide(1000);
    e.stopPropagation();
  });
  

//webes doboz interakciói
  let nyitoProjektWebBtn = $("#webProject");
  let closeButtonWeb = $('#projektCloseBtnWeb');
  let webBoxContainer = $('#webBoxContainer');


  nyitoProjektWebBtn.on('click', () => {
    webBoxContainer.toggle(1000);
  } )

  closeButtonWeb.on('click', function (e) {
    webBoxContainer.hide(1000);
    e.stopPropagation();
  }
  );


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
      $(inputs[0]).css("border","3px solid red");
      $(form_controls[0]).children("i.fa-frown-open")
         .animate({ 'left': '30px' })
        .css({ 'opacity': 1, 'color': 'red' });
      $(form_controls[0]).children("i.fa-smile-wink")
        .animate({ 'left': '0' })
        .css({ 'opacity': 0 });
      $(this).css({ "color": "red", 'padding-left': '30px' });
      $(form_controls[0]).children('p').css("visibility", "visible");
      validNev = false; 
    }
    else {
      $(this).css("border","3px solid purple");
      $(form_controls[0]).children("i.far.fa-smile-wink")
        .animate({ 'left': '30px' })
        .css({ 'opacity': 1, 'color': 'purple' });
      $(form_controls[0]).children("i.fa-frown-open")
        .animate({ 'left': 0})
        .css({ 'opacity': 0 });
      $(inputs[0]).css({"color": "rgb(222, 127, 222)","padding-left":'30px',"border":"rgb(222, 127, 222)"});
      $(form_controls[0]).children('p').css("visibility", "hidden");
       validNev = true;
       
    }
    buttonFelold();
  }); //focusout #nev
//email ellenőrzése
   $(inputs[1]).focusout(() => {
    if ($(inputs[1]).val() == "" || !emailReg.test($(inputs[1]).val())) {
      $(inputs[1]).css("border","3px solid red");
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
      $(inputs[1]).css({"color": "rgb(222, 127, 222)","padding-left":'30px',"border":"rgb(222, 127, 222)"});
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




});  //document ready





