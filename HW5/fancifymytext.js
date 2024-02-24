function bigger_button()
{
	alert("Hello, world!");
	document.getElementById("textbox_id").style.fontSize = "4em";
}

function fancy_button()
{
	document.getElementById("textbox_id").style.backgroundColor = "red";
}

function boring_button()
{
	document.getElementById("textbox_id").style.color = "black";
	document.getElementById("textbox_id").style.backgroundColor = "white";
}

function change()
{
	checked = document.getElementById("fancy").checked;
	if (checked) 
	{
		document.getElementById("textbox_id").style.color = "blue";
		document.getElementById("textbox_id").style.fontWeight = "bold";
		document.getElementById("textbox_id").style.textDecorationLine = "underline";
	}
	else 
	{
		document.getElementById("textbox_id").style.color = "black";
		document.getElementById("textbox_id").style.fontWeight= "normal";
		document.getElementById("textbox_id").style.textDecorationLine = "none";
	}
}
function moo_button()
{
	document.getElementById("textbox_id").value = document.getElementById("textbox_id").value.toUpperCase();
	document.getElementById("textbox_id").value = sentences = document.getElementById("textbox_id").value.split(".").join("-Moo.");
}
