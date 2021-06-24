$(function () {
    //accordionok
    let acButton = $('.aboutBtn');
    let leNyil = true;

    acButton.on('click', function (e) {
        
        //aboutszovegek kivalasztasa
        $(this).parent().next()
            .slideDown(() => {
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









});/*document.ready*/