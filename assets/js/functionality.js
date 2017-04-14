function openNav() {
    document.getElementById("myNav").style.height = "100%";
}

function closeNav() {
    document.getElementById("myNav").style.height = "0%";
}

$(document).ready(function(){
	$('#nav-icon').click(function(){
		$(this).toggleClass('open');
	});
});