function URL(){
}

URL.getParameter = function(parameter){
	var FullURL= window.location.search.substring(1);

	var parametersArray = FullURL.split('&')

	for (var i=0; i<parametersArray.length; i++)
	{
		var currentParameter = parametersArray[i].split('=');

		if (currentParameter[0] == parameter)
		{
			return decodeURIComponent(currentParameter[1]);
		}
	}

}