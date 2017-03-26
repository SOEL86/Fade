function Clock(w,h,xpos,ypos,align)
{
	this.clock = newE(wrap,"div","clock","");
	
	if (align){
		placementRB(this.clock,w,h,xpos,ypos);
	}
	else
	{
		placementLT(this.clock,w,h,xpos,ypos);
	}
	
	this.hours = newE(this.clock,"div","hours","face");
	newE(this.clock,"div","","spacer");
	this.minutes = newE(this.clock,"div","minutes","face");
	newE(this.clock,"div","","spacer");
	this.seconds = newE(this.clock,"div","seconds","face");
	
	this.faces = $(".face");
	this.faces.css({"height":h+"px","width":h+"px","font-size":(h/2)+"px"});
	
	this.spacers = $(".spacer");
	this.spacers.css("height",h);
	
	this.date = new Date();
	
	setInterval(function(object){
		object.date = new Date();
		if(object.date.getHours()<10)
		{
			object.hours.html("<p class='digits'>0"+object.date.getHours()+"</p>");
		}
		else
		{
			object.hours.html("<p class='digits'>"+object.date.getHours()+"</p>");
		}
		if(object.date.getMinutes()<10)
		{
			object.minutes.html("<p class='digits'>0"+object.date.getMinutes()+"</p>");
		}
		else
		{
			object.minutes.html("<p class='digits'>"+object.date.getMinutes()+"</p>");
		}
		if(object.date.getSeconds()<10)
		{
			object.seconds.html("<p class='digits'>0"+object.date.getSeconds()+"</p>");
		}
		else
		{
			object.seconds.html("<p class='digits'>"+object.date.getSeconds()+"</p>");
		}
		object.spacers.html("<p class='digits'>:</p>");
	},1000, this);

}


