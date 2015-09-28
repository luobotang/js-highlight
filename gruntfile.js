var fs = require('fs')
var peg = require('pegjs')

module.exports = function (grunt) {

	grunt.registerMultiTask('pegbuild', 'build peg', function () {
		this.files.forEach(function(filePair) {
			filePair.src.forEach(function(src) {
				var data = grunt.file.read(src, { encoding: 'UTF-8' })
				try {
  				var parser = peg.buildParser(data, {output: 'source'})
				} catch (e) {
  				console.error(e)
  				throw e
				}

				grunt.file.write(filePair.dest, 'module.exports = ' + parser)
				grunt.log.ok(filePair.dest + ' builded')
			})
		})
	})

	grunt.initConfig({
		pegbuild: {
			build: {
				src: 'lib/syntax',
				dest: 'lib/parser.js'
			}
		},
		browserify: {
			build: {
				src: 'lib/highlight.js',
				dest: 'highlight.js'
			}
		},
		less: {
			build: {
				src: 'css/highlight.less',
				dest: 'highlight.css'
			}
		}
	})

	grunt.loadNpmTasks('grunt-browserify')
	grunt.loadNpmTasks('grunt-contrib-less')

	grunt.registerTask('default', ['pegbuild:build', 'browserify:build', 'less:build'])
}