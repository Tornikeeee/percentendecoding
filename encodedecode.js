var Url = {

 	// public method for URL encoding
 	encode : function (text) {

		if(Array.isArray(text)){
			var masivi = [];
			for(i=0;i<text.length();i++){
				text[i] = text[i].replace(/\r\n/g,"\n");
 	 			ar utftext = "";

				for (var n = 0; n < text[i].length; n++) {
					var c = text[i].charCodeAt(n);
					if (c < 128) {
							utftext += text[i].fromCharCode(c);
					} else if((c > 127) && (c < 2048)) {
						utftext += text[i].fromCharCode((c >> 6) | 192);
						utftext += text[i].fromCharCode((c & 63) | 128);
					} else {
						utftext += text[i].fromCharCode((c >> 12) | 224);
						utftext += text[i].fromCharCode(((c >> 6) & 63) | 128);
						utftext += text[i].fromCharCode((c & 63) | 128);
					}
				}
				masivi.push(utftext);
			}				
			
			for(i=0;i<masivi.length();i++){
				console.log(masivi[i]);
			}
		}
		
		if(typeof text=="object"){
			var key = [];
			var value =[];
			var codi="";
			
			for (var item in text){
				item = item.replace(/\r\n/g,"\n");
				var result1 = "";
				var result2 = "";
				
				for (var n = 0; n < item.length; n++) {
					var c = item.charCodeAt(n);
					if (c < 128) {
							result1 += item.fromCharCode(c);
					} else if((c > 127) && (c < 2048)) {
						result1 += item.fromCharCode((c >> 6) | 192);
						result1 += item.fromCharCode((c & 63) | 128);
					} else {
						result1 += item.fromCharCode((c >> 12) | 224);
						result1 += item.fromCharCode(((c >> 6) & 63) | 128);
						result1 += item.fromCharCode((c & 63) | 128);
					}
					key.push(result1);
				}
				
				for (var n = 0; n < property[item].length; n++) {
					var c = property[item].charCodeAt(n);
					if (c < 128) {
							result2 += property[item].fromCharCode(c);
					} else if((c > 127) && (c < 2048)) {
						result2 += property[item].fromCharCode((c >> 6) | 192);
						result2 += property[item].fromCharCode((c & 63) | 128);
					} else {
						result2 += property[item].fromCharCode((c >> 12) | 224);
						result2 += property[item].fromCharCode(((c >> 6) & 63) | 128);
						result2 += property[item].fromCharCode((c & 63) | 128);
					}
					value.push(result2);
				}
				
				for(i=0;i<key.length;i++){
					codi=result1+"="+result2+"&";
				}								
			}
			console.log(codi);
		}
	
		text = text.replace(/\r\n/g,"\n");
 	 	var utftext = "";

  		for (var n = 0; n < text.length; n++) {
   			var c = text.charCodeAt(n);
   			if (c < 128) {
    				utftext += text.fromCharCode(c);
 			} else if((c > 127) && (c < 2048)) {
  				utftext += text.fromCharCode((c >> 6) | 192);
  				utftext += text.fromCharCode((c & 63) | 128);
 			} else {
  				utftext += text.fromCharCode((c >> 12) | 224);
  				utftext += text.fromCharCode(((c >> 6) & 63) | 128);
 	 			utftext += text.fromCharCode((c & 63) | 128);
 			}
		}

		console.log(utftext);
 	},

 	// public method for URL decoding
	 decode : function (string) {
		  		 var string = "";
				 var i = 0;
				 var c = c1 = c2 = 0;

				while ( i < utftext.length ) {
					 c = utftext.charCodeAt(i);
					if (c < 128) {
							string += String.fromCharCode(c);
							i++;
					} else if((c > 191) && (c < 224)) {
						   c2 = utftext.charCodeAt(i+1);
							string += String.fromCharCode(((c & 31) << 6) | (c2 & 63));
							i += 2;
					} else {
						   c2 = utftext.charCodeAt(i+1);
							c3 = utftext.charCodeAt(i+2);
							string += String.fromCharCode(((c & 15) << 12) | ((c2 & 63) << 6) | (c3 & 63));
						 i += 3;
					}
				}
				console.log(unescape(string));
 	},
}
