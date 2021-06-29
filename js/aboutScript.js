$(function () {
    //accordionok
    let abButton = $('.aboutBtn');
    let leNyil = true;

    abButton.on('click', function (e) {
        
        console.log($(this).prop('aria-expanded'));
        
        if ($(this).prop('aria-expanded')===true) {
            $(this).parent().next()
                .hide(1000).removeClass('plusz');;
            $(this).prop('aria-expanded', false);
            console.log("bekerültem kintre");
        }
        else
        {
            //aboutszovegek kivalasztasa
            $(this).parent().next()
                .show().animate().addClass('plusz');
            $(this).prop('aria-expanded', true);
            console.log("bekerültem");
        }
        if (leNyil == true) {
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





});/*document.ready*/



/*acButton.on('click', function (e) {

//aboutszovegek kivalasztasa
$(this).parent().next()
    .slideToggle(() => {
        $(this).parent().next()
            .toggleClass("plusz").css("display", "flex")
    })
    ;


if (e.target == $("#profilSzov")) {
    $("#profilSzov").css("display", "grid");
}

if (leNyil == true) {
    $(this).html("<i class='fas fa-chevron-up'></i>");
    leNyil = false;
}
else {
    $(this).html("<i class='fas fa-chevron-down'></i>");
    leNyil = true;
}
    })

*/