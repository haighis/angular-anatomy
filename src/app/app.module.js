(function() {
  'use strict';
//1. add angular style guide annotations here
  angular
    .module('anatapp', [
    	'ngAnimate', 
    	'ngCookies', 
    	'ngSanitize', 
    	'ngMessages', 
    	'ngAria', 
    	'ngResource', 
    	'ui.router', 
    	'toastr',
        'SupportRequest.UI'
    	]);
})();

/** 

https://www.airpair.com/angularjs/posts/top-10-mistakes-angularjs-developers-make

Going to include Anatomy with file structure which goes hand in hand to  
defining the Anatomy and quickly getting around the anatomy in Angular. 

I won't go through it unless you ask, but in the reference application I have annotated
the Angular Style guide examples in code with a comment and link to the content section
in the Angualar Style Guide written by John Papa.


// Modules
A module is a collection of services, directives, controllers, filters, and configuration information. angular.module is used to configure the

// Views partials..fit them in. Discuss how they are cached in Angular Template Cache

// Constants

// Controller

Dependency injection
This is one of Angular's best patterns. It makes testing much simpler. DI makes it more clear and succinct
in determining what any particular object depends on.

Model View Controller

Circling back to Modules
It's common when starting out learning Angular to hang everything off of the main module. 
This works fine when starting a small app, but it quickly becomes unmanageable.
There is also the possibility for reuse and it makes easier testing when we group features together in a module
and define an Angular Module for a group of Features. It's much simpler to reuse modules across apps when 
features are group by type with their Module for each feature. 


Not included, but to be visited in later segments

Directives
Filters
Differences between Providers, Factories and Services

**/

