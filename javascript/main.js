//code to load external script
//loadEF(1,script);

//code to load external style
//loadEF(0,style);

	var width;
	var height;
	var body;
$(document).ready(function()
{
	body=$("body");
	go();
});


$(window).resize(function()
{
	resized();
});

function go()
{
	resized();
	wrap = newE(body,"div","wrap","");
	console.log(wrap);
	bgc(wrap,randomcolor());
	bgcFadeRandom(wrap);
	clock = new Clock(70,20,0,0,1);
	words = newE(wrap,"p","words","");
	words.text("Hello, Michael.");
	TweenLite.from(words,5,{left:"-10%",opacity:"0"});
}


