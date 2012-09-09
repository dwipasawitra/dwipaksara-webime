/*
 	** Dwipaksara Web IME Javascript **
	Convert Latin text to Unicode based Balinese font, and vice versa.
	
	Author:
	Putu Wiramaswara Widya <initrunlevel0@gmail.com>
	http://wiramaswara.blogspot.com
*/


// latin2bali character mapping
var latin2bali = new Array();

// consonant
latin2bali['k'] = '\u1B13';
latin2bali['kh'] = '\u1B14';
latin2bali['g'] = '\u1B15';
latin2bali['gh'] = '\u1B16';
latin2bali['ng'] = '\u1B17';
latin2bali['c'] = '\u1B18';
latin2bali['ch'] = '\u1B19';
latin2bali['j'] = '\u1B1A';
latin2bali['jh'] = '\u1B1B';
latin2bali['ny'] = '\u1B1C';
latin2bali['tt'] = '\u1B1D';
latin2bali['tth'] = '\u1B1E';
latin2bali['dd'] = '\u1B1F';
latin2bali['ddh'] = '\u1B20';
latin2bali['nn'] = '\u1B21';
latin2bali['t'] = '\u1B22';
latin2bali['th'] = '\u1B23';
latin2bali['d'] = '\u1B24';
latin2bali['dh'] = '\u1B25';
latin2bali['n'] = '\u1B26';
latin2bali['p'] = '\u1B27';
latin2bali['ph'] = '\u1B28';
latin2bali['b'] = '\u1B29';
latin2bali['bh'] = '\u1B2A';
latin2bali['m'] = '\u1B2B';
latin2bali['y'] = '\u1B2C';
latin2bali['r'] = '\u1B2D';
latin2bali['l'] = '\u1B2E';
latin2bali['w'] = '\u1B2F';
latin2bali['sh'] = '\u1B30';
latin2bali['ss'] = '\u1B31';
latin2bali['s'] = '\u1B32';
latin2bali['h'] = '\u1B33';

// svara
latin2bali['a'] = '';
latin2bali['aa'] = '\u1B35';
latin2bali['i'] = '\u1B36';
latin2bali['ii'] = '\u1B37';
latin2bali['u'] = '\u1B38';
latin2bali['uu'] = '\u1B39';
latin2bali['rr'] = '\u1B3A';
latin2bali['rrr'] = '\u1B3B';
latin2bali['ll'] = '\u1B3C';
latin2bali['lll'] = '\u1B3D';
latin2bali['e'] = '\u1B3E';
latin2bali['ai'] = '\u1B3F';
latin2bali['o'] = '\u1B40';
latin2bali['au'] = '\u1B41';
latin2bali['ae'] = '\u1B42';
latin2bali['oe'] = '\u1B43';

//tengenan
latin2bali['+ng'] = '\u1B02';
latin2bali['+r'] = '\u1B03';
latin2bali['+h'] = '\u1B04';

// latin2bali converter
function latinbali_convert(input) {
	input = input.toLowerCase();
	var length = input.length;
	var syllength = 0;
	var itssyl = '';
	var idx = 0;
	var output = '';
	var decider = 0;
	
	// pattern checker using regex
	var CONS = 'kh|gh|ng|jh|ny|tt|tth|dd|ddh|nn|th|dh|ph|bh|sh|ss|[b-dg-hj-pr-twy]';
	var CONS_2 = 'ng|h|r';
	var CONS_3 = '[rwy]';
	var SVARA = 'ii|uu|rr|rrr|ll|lll|ai|au|ae|oe|[aiueo]';
	var SYL = '^('+CONS+')?('+SVARA+')';		// Normal sylabic form -- 1st: The consonant, 2nd: Its vocal
	var CONSONLY = '^('+CONS+')?';				// Consonant only form
	var SVARAONLY = '^('+SVARA+')?';				// Svara only form
	
	
	while (idx < length) {
		// sylabic decision maker
		// 1st: check the normal sylabic form
		decider = input.match(SYL);
		if(decider !== null) {	// sylabic
			if(!decider[3]) {
				itssyl = decider[1] + decider[2];
				output += latin2bali[decider[1]] + latin2bali[decider[2]];
				document.getElementById('status').innerHTML = decider[1] + " + " + decider[2];
			}
		} else {
			decider = input.match(CONSONLY);
			if (decider !== null) { // consonant only
				itssyl = decider[1]
				output += latin2bali[decider[1]] + '\u1B44'
			} else {
				decider = input.match(SVARAONLY);
				if(decider !== null) {
					itssyl = decider[2]
					output += latin2bali[decider[2]]
				}
			}
		}
		
		syllength = itssyl.length;
		idx += syllength;
		input = input.substr(syllength);
	}
	
	return output;
}

// trigger when user write something in latin text
function do_latin2bali() {
	var textlatin = document.getElementById('latin').value;
	var textbali = latinbali_convert(textlatin);
	
	document.getElementById('bali').value = textbali;
}