function addEvent(el,evtName,fn){
	if(el.addEventListener){
		el.addEventListener(evtName,fn,false);
	} else {
		el.attachEvent("on"+evtName,fn);
	}
}

addEvent(window,"load",function(){
	var container = document.querySelector(".meter");//Need it to fix safari rendering issue
	addEvent(document.querySelector(".meter"), "change", function(e){
		document.querySelector(".checked").className = ""; //Do not have any other class on lable so safely change classname
		e.target.parentNode.className = "checked"; 

		/*Start - Safari Workaround to force rendring*/
		container.className = "";
		container.className = "meter";
		/*End - Safari  Workaround to force rendring*/
	});
});