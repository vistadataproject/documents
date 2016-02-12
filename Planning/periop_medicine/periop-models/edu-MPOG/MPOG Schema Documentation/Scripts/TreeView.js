function expandNode (node, startsExpanded)
{
	if (
	    (startsExpanded == 1 && document.getElementById (node + '-children').style.display == "none")
	    ||
	    (startsExpanded == 0 && document.getElementById (node + '-children').style.display != "block")
	    )
	{
		document.getElementById (node + '-children').style.display = "block";
		document.getElementById (node + '-btn').src =pathToRoot +"/Images/minus-btn.gif";
	}
	else
	{
		document.getElementById (node + '-children').style.display = "none";
		document.getElementById (node + '-btn').src = pathToRoot +"/Images/plus-btn.gif";
	}
}