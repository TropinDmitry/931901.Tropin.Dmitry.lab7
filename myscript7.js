function getn(fgr)
{
	var n = document.getElementById('number').value;
	for (i = 0; i < n; i++) 
	{
		var a = document.createElement("div");
		a.className = fgr;
		createf(a);
	}
}
function createf(fgr)
{
	if (fgr.className == "triangle")
	{
		var size = getElement(100, 200);
		fgr.style.border = size + "px solid transparent";
		fgr.style.borderBottom = size + "px solid blue";	
		fgr.onclick = function() 
		{
			fgr.style.borderBottom = size + "px solid yellow"
		};
	} 
	else 
	{
		fgr.style.width = getElement(100, 200) + "px";
		fgr.style.height = fgr.style.width;
		fgr.onclick = function() 
		{
			fgr.style.backgroundColor = "yellow"
		};
	}
	fgr.ondblclick = function()
	{
		fgr.style.display = "none"
	};
	document.body.appendChild(fgr);
	fgr.style.top = getElement(50, 500) + "px";
	fgr.style.left = getElement(0, 1300) + "px";
}
function getElement(min, max)
{
	return Math.random() * (max - min) + min;
}