App = Ember.Application.create({
		LOG_TRANSITIONS: true
});

App.ApplicationRoute = Ember.Route.extend({
		model: function() {
			return ['a', 'b', 'c']
		},
		setupController: function(controller, model){
			controller.set('info',model);
		},
		renderTemplate: function(){
			var controller = this.controllerFor('application');
			this.render('application',{
					controller: controller
			});
		}
});

/*
	Yes, this sets the title!
*/
App.ApplicationController = Ember.Controller.extend({
		firstName: 'steve',
		lastName: 'me',
		title: 'the Application Controller'
});

App.Router.map(function() {
		this.route('index',{path:'/'});
});

App.IndexRoute = Ember.Route.extend({
		model: function() {
			return ['Coed', 'Sat', 'at Park']
		},

		setupController: function(controller,model){
			controller.set('info',model);
		},

		renderTemplate: function(){
			var controller = this.controllerFor('index');
			this.render('index',{
					controller: controller
			});
		}
});

App.IndexController = Ember.Controller.extend({
		title: 'the Index Controller'
});
