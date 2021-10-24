/*$desktop:1400px;
$desktopDetailRolamPage:1222px;

$tablet:760px;
$tabletDetailRolamPage:900px;

$mobileDetailRolamPage:560px;
$mobile:400px;*/

$(function () {
    //accordionok
    let abButton = $('.aboutBtn');
    let leNyil = true;
    let profilSzovActive = false;

    abButton.on('click', function (e) {
        
        console.log($(this).prop('aria-expanded'));
        
        if ($(this).prop('aria-expanded')===true) {
            $(this).parent().next()
                .hide(1000).removeClass('plusz');;
            $(this).prop('aria-expanded', false);
            
        }
        else
        {
            //aboutszovegek kivalasztasa
            $(this).parent().next()
                .show().animate().addClass('plusz');
            $(this).prop('aria-expanded', true);
            /*profilos ablak grid legyen*/
            if ($(abButton[0]).parent().next().hasClass('plusz') && window.innerWidth > 770) {
                $("#profilSzov").css("display", "grid");
                profilSzovActive = true;
            }
            else if ($(abButton[0]).parent().next().hasClass('plusz') && window.innerWidth < 770) {
                $("#profilSzov").css("display", "block");
                profilSzovActive = true;
            }
            else {
                $("#profilSzov").css("display", "none");
                profilSzovActive =false;
            }

            
        }
        if (leNyil == true ) {
            console.log("bekerültem");
            $(this).html("<i class='fas fa-chevron-up'></i>");
            leNyil = false;
        }
        else {
            $(this).html("<i class='fas fa-chevron-down'></i>");
            leNyil = true;
        }
        
    })  //click function

//functions
    function nyilValtas() {
        if (leNyil == true) {
            $(this).html("<i class='fas fa-chevron-up'></i>");
            leNyil = false;
        }
        else {
            $(this).html("<i class='fas fa-chevron-down'></i>");
            leNyil = true;
        }
    }

//ha közben változik a window, profilszöveg layoutja:
    $(window).resize(function () {
        if (window.innerWidth < 770 && profilSzovActive == true) {
             $("#profilSzov").css("display", "block");
        }
        if (window.innerWidth > 770 && profilSzovActive == true) {
             $("#profilSzov").css("display", "grid");
        }
        if ( profilSzovActive == false) {
             $("#profilSzov").css("display", "none");
        }
        

    });
 


});/*document.ready*/



