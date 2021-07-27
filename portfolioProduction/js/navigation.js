/**
 * File navigation.js.
 *
 * Handles toggling the navigation menu for small screens and enables TAB key
 * navigation support for dropdown menus.
 */

$('document').ready(function (){
	const siteNavigation = document.getElementsByClassName('menu-mobil' )[0];
	


/*const button = siteNavigation.getElementsByTagName( 'button' )[ 0 ];*/
	const button = document.getElementById("hamburgerButton");
	const menu = document.getElementById( "menuUlDivMobil");


	// Toggle the .toggled class and the aria-expanded value each time the button is clicked.
	button.addEventListener( 'click', function() {
		siteNavigation.classList.toggle("toggledMenu");

		if ( button.getAttribute( 'aria-expanded' ) === 'true' ) {
			button.setAttribute('aria-expanded', 'false');
			button.style.backgroundColor = "#d69db5";
			
		}
		else 
			button.setAttribute( 'aria-expanded', 'true' );
			button.style.backgroundColor = "#d69db5";
		
	} );

	// Remove the .toggled class and set aria-expanded to false when the user clicks outside the navigation.
	document.addEventListener( 'click', function( event ) {
		const isClickInside = siteNavigation.contains( event.target );

		if ( ! isClickInside ) {
			//siteNavigation.classList.remove( 'toggledMenu' );
			button.setAttribute( 'aria-expanded', 'false' );
		}
	} );


	
});
