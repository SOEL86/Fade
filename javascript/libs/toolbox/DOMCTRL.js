function newE(parent, tag, id, classname)
{
	if (id != "" && classname != "") {
	console.log(parent,tag,id,classname);
		parent.append("<"+tag+" id='"+id+"' class='"+classname+"'></"+tag+">");
		return $("#"+id);
	}
	if (id == "" && classname != "") {
	console.log(parent,tag,id,classname);
		parent.append("<"+tag+" class='"+classname+"'></"+tag+">");
		return $("."+classname);
	}
	if (id != "" && classname == "") {
	console.log(parent,tag,id,classname);
		parent.append("<"+tag+" id='"+id+"' class='"+classname+"'></"+tag+">");
		return $("#"+id);
	}
}
function bgc(obj,color)
{
	obj.css("background-color","#"+color);
}
function winXY()
{
	return [$(window).width(), $(window).height()];
}
function winX()
{
	return $(window).width();
}
function winY()
{
	return $(window).height();
}
function resized()
{
	size = winXY();
	width = size[0];
	height = size[1];
	console.log(size);
}
function placementLT(obj,w,h,xpos,ypos)
{
	obj.css({
		"width":w+"px",
		"height":h+"px",
		"left":xpos+"px",
		"top":ypos+"px"
	});
}
function placementRB(obj,w,h,xpos,ypos)
{
	obj.css({
		"width":w+"px",
		"height":h+"px",
		"right":xpos+"px",
		"bottom":ypos+"px"
	});
}