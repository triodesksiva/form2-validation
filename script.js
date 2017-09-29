function validateform() {
	var fname = document.getElementById('firstname').value;
	if(null==fname || fname=="")
	{
		 document.getElementById('firstnameerror').innerHTML = "* enter first name";
		 
	     
	}
	else {
		document.getElementById('firstnameerror').innerHTML = "";
	}
	
	var lname = document.getElementById('lastname').value;
	if(null==lname || lname=="")
	{
		document.getElementById('lastnameerror').innerHTML = "* enter last name";
		 
	}
	else {
		document.getElementById('lastnameerror').innerHTML = "";
	}

	var gmail =  document.getElementById('mail').value;
	
	var atposition = gmail.indexOf("@");
	var dotposition = gmail.lastIndexOf(".");
	if (atposition<4 || dotposition<atposition+2 || dotposition>=gmail.length) 
	{
        document.getElementById('mailerror').innerHTML = "* enter mail...";
	}
	else {
		document.getElementById('mailerror').innerHTML = "";
	}
	var password = document.getElementById('securepassword').value;
	if(null==password || password=="")
	{
		document.getElementById('securepassworderror').innerHTML = "* enter password";
	}
	else  {
		document.getElementById('securepassworderror').innerHTML = "";
	} 
	// 
	var address1 = document.getElementById('txtaddress1').value;
	if(null==address1 || address1=="")
	{
        document.getElementById('textaddress1error').innerHTML = "* enter address...";
	}
	else {
		document.getElementById('textaddress1error').innerHTML = "";
	} 
	var address2 = document.getElementById('txtaddress2').value;
	if(null==address2 || address2=="")
	{
        document.getElementById('textaddress2error').innerHTML = "* enter address...";
	}
	else {
		document.getElementById('textaddress2error').innerHTML = "";
	} 
	var town = document.getElementById('city').value;
	if (null==town || town=="") 
	{
		document.getElementById('entercity').innerHTML = "* choose city";
	}
	else {
		document.getElementById('entercity').innerHTML = "";
	} 

	var reg = document.getElementById('state').value;
	if (null==reg || reg=="") 
	{
		document.getElementById('enterstate').innerHTML = "* choose state";
	}
	else {
		document.getElementById('enterstate').innerHTML = "";
	} 
	var gen = document.getElementById('gender').value;
	if (null==gen || gen=="") 
	{
		document.getElementById('entergender').innerHTML = "* choose gender";
	}
	else {
		document.getElementById('entergender').innerHTML = "";
	} 
}