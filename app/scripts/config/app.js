'use strict';

/* Config */
angular.module('rs.config', []);

/* Services */
angular.module('rs.services', []);

/* Components */
angular.module('rs.components', []);

/* Controllers */
angular.module('rs.controllers', []);

/* Directives */
angular.module('rs.directives', []);

/* Filters */
angular.module('rs.filters', []);

/* Constants */
angular.module('rs.constants', []);

/* Libraries */
angular.module('underscore', []);

/* Rad Sedan App */
angular.module('rs', [
	'ui.bootstrap',
	'ui.router',
	'ngSanitize',
	'ngAnimate',
	'rs.config',
	'rs.services',
	'rs.components',
	'rs.controllers',
	'rs.directives',
	'rs.filters',
	'rs.constants',
	'underscore'
]);
