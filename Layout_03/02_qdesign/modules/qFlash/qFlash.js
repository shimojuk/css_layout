var plugin = (navigator.mimeTypes && navigator.mimeTypes["application/x-shockwave-flash"]) ? navigator.mimeTypes["application/x-shockwave-flash"].enabledPlugin : 0;
if (plugin) {
		var words = navigator.plugins["Shockwave Flash"].description.split(" ");
		for (var i = 0; i < words.length; ++i)
		{
		if (isNaN(parseInt(words[i])))
		continue;
		var version = words[i]; 
		}
	var hasFlash = version >= 6;
}
else if (navigator.userAgent && navigator.userAgent.indexOf("MSIE")>=0 
   && (navigator.appVersion.indexOf("Win") != -1)) {
	document.write('<scr' + 'ipt language=VBScript\> \n'); //FS hide this from IE4.5 Mac by splitting the tag
	document.write('on error resume next \n');
	document.write('hasFlash = ( IsObject(CreateObject("ShockwaveFlash.ShockwaveFlash." & 6)))\n');
	document.write('</scr' + 'ipt\> \n');
}
 
var generated   = 0;

var needle = new Array(
	new Array("h1","1a1a1a",36,"FFFFFF","main_heading",420,34,"main_heading")
);

function generateText(elem){
	genText = "";
	var i;
 	for(i=0;i<elem.childNodes.length;i++){
		switch(elem.childNodes[i].nodeType){
			case 1 :
				genText += generateText(elem.childNodes[i]);
			break;
			case 3: 
				genText += elem.childNodes[i].nodeValue;
			break;
		}
	}
	return genText;
}

function replaceTags(){
	if(hasFlash){
		var k;
		for(k = 0; k < needle.length; k++){
			items = document.getElementsByTagName(needle[k][0]);
			var i;
			for(i = 0; i < items.length; i++){
				if (items[i].className==needle[k][7]){
					text = generateText(items[i]);
					lungimeText = text.length;
					latime   = needle[k][5];
					inaltime = lungimeText < 37 ? needle[k][6] : needle[k][6]*(Math.ceil(lungimeText/37));
					generated ++;
					items[i].innerHTML = '<object type="application/x-shockwave-flash" data="modules/qFlash/'+needle[k][4]+'.swf?text='+text+'&culoare='+needle[k][1]+'&marime='+needle[k][2]+'&fundal='+needle[k][3]+'&curent='+generated+'" width="'+latime+'" height="'+inaltime+'" id="qFlash">'+
											'<param name="movie" value="modules/qFlash/'+needle[k][4]+'.swf?text='+text+'&culoare='+needle[k][1]+'&marime='+needle[k][2]+'&fundal='+needle[k][3]+'&curent='+generated+'" />'+
											'<param name="wmode" value="transparent" />'+
											'<embed src="modules/qFlash/'+needle[k][4]+'.swf" quality=high bgcolor=#ffffff  width="'+latime+'" height="'+inaltime+'" swLiveConnect=true ID="qFlash" name="qFlash" align=""  type="application/x-shockwave-flash" pluginspage="http://www.macromedia.com/go/getflashplayer"></embed>'
											'</object>';
				}
			}
		}
	}
}
	
window.onload = replaceTags;

function verificaCifre(care){
 	care = (care) ? care : window.event;
    var charCode = (care.which) ? care.which : care.keyCode;
    if(charCode>31 && (charCode<48 || charCode>57)){ 
    	return false; 
    }else 
    	return true;
}