function config($stateProvider, $urlRouterProvider, $ocLazyLoadProvider, IdleProvider, KeepaliveProvider,$locationProvider) {
	IdleProvider.idle(5); // in seconds
	IdleProvider.timeout(120); // in seconds
	$urlRouterProvider.otherwise("/homepage");


	$ocLazyLoadProvider.config({
			// Set to true if you want to see what and when is dynamically loaded
			debug: false
	});

	$stateProvider.state('homepage', {
			url: "/homepage",
			templateUrl: "./modules/home/templates/homepage.html",
			resolve: {
				loadPlugin: function ($ocLazyLoad) {
					return $ocLazyLoad.load([]);
				}
			}
		})

	$locationProvider.html5Mode({
	  enabled: true,
	  requireBase: false
	});
	
}

angular
.module('testApp')
	.config(config)
	.run(function($rootScope, $state) {
		$rootScope.$state = $state;
	});