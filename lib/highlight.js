var domready = require('domready')
var parser = require('./parser')

function processAllPreElements() {
	var pres = document.getElementsByTagName('pre')
	for (var i = 0, len = pres.length; i < len; i++) {
		var pre = pres[i]
		var id = pre.getAttribute('data-src')
		if (!id) continue
		var source = document.getElementById(id)
		if (source) {
			try {
				var result = parser.parse(trim(source.innerHTML))
			} catch (e) {
				throw e
			}
		}
		pre.innerHTML = result && result.join ? result.join('') : result
	}
}

function trim(str) {
	var i = 0
	var j = str.length
	var ch
	while (ch = str[i]) {
		if (/\s/.test(ch)) {
			i++
		} else {
			break
		}
	}
	while (ch = str[j - 1] && j > i) {
		if (/\s/.test(ch)) {
			j--
		} else {
			break
		}
	}
	if (j > i) {
		return str.slice(i, j)
	} else {
		return ''
	}
}

domready(processAllPreElements)