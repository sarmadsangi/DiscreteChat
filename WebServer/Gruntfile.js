module.exports = function(grunt) {
	grunt.initConfig({
		sass: {
			dist: {
				files: {
					"app/dist/style.css": "app/styles/main.scss"
				}
			}
		},
		watch: {
			css: {
				files: 'app/styles/*.scss',
				tasks: ['sass']
			}
		}
	});
	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-contrib-watch');
	
	grunt.registerTask('default',['watch']);
}