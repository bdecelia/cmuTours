var nav = document.getElementById("myNav");

function openNav() {
    nav.style.height = "100%";
}

function closeNav() {
    nav.style.height = "0%";
}

$(document).ready(function(){
	$('#nav-icon').click(function(){
		$(this).toggleClass('open');
	});
});

function toggleNav() {
	if (nav.style.height == "100%"){
		closeNav();
	} else {
		openNav();
	}
}