$('div[class^=carousel]').carousel({interval:3000});

var active=false;

function activeDropMenu () {
	if(!active){
		$('#dropmenu').css("transform", "translateY(70px)")
		active = true;
	} else{
		$('#dropmenu').css("transform", "translateY(-105px)")
		active = false;
	}
}