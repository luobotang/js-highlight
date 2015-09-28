var parser = require('./parser')

var pres = document.getElementsByTagName('pre')
for (var i = 0, len = pres.length; i < len; i++) {
	var pre = pres[i]
	var id = pre.getAttribute('data-src')
	if (!id) continue
	var source = document.getElementById(id)
	if (source) {
		try {
			var result = parser.parse(source.innerHTML)
		} catch (e) {
			console.error(e)
		}
	}
	pre.innerHTML = result && result.join ? result.join('') : result
}