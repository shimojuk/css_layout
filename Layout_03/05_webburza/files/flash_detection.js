/**
* borrowed from the mighty sIFR package:
    http://www.mikeindustries.com/blog/archive/2005/02/sifr-2.0-release-candidate-4
    sIFR v2.0 RC4 SOURCE
    Copyright 2004 - 2005 Mike Davidson, Shaun Inman, Tomas Jogin and Mark Wubben
*/
var hasFlash = function() {
	var nRequiredVersion = 6;
	if (navigator.appVersion.indexOf("MSIE") != -1 && navigator.appVersion.indexOf("Windows") > -1) {
		document.write('<script language="VBScript"\> \non error resume next \nhasFlash = (IsObject(CreateObject("ShockwaveFlash.ShockwaveFlash." & ' + nRequiredVersion + '))) \n</script\> \n');
		/*	If executed, the VBScript above checks for Flash and sets the hasFlash variable. If VBScript is not supported it's value will still be undefined, so we'll run it through another test. This will make sure even Opera identified as IE will be tested */
		if (window.hasFlash != null) {
			return window.hasFlash;
		}
	}
	if (navigator.mimeTypes && navigator.mimeTypes["application/x-shockwave-flash"] && navigator.mimeTypes["application/x-shockwave-flash"].enabledPlugin) {
		var flashDescription = (navigator.plugins["Shockwave Flash 2.0"] || navigator.plugins["Shockwave Flash"]).description;
		return parseInt(flashDescription.charAt(flashDescription.indexOf(".") - 1)) >= nRequiredVersion;
	}
	return false;
}();