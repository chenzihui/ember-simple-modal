/**
 * An Ember.Router instance is automatically created when you create a new instance of Ember.Application
 * as we have done so in `app.js` using the following:
 *
 * window.App = Ember.Application.create()
 *
 * This is where we define our routes, but unlike other MVC frameworks where controllers do most of the work
 * involving state management, in Ember, the Router is responsible for maintaining application state.
 **/

App.Router.map(function() {
  // This will load the 'about' template into the 'application' template's
  // {{ outlet }}.
  //
  // Note that we didn't have to create an AboutController and / or AboutView
  // for this to work. Ember automatically does this for us.
  this.route( 'about' );
});

App.ApplicationRoute = Ember.Route.extend({
  events: {
    openModal: function() {
      var modalView = this.container.lookup('view:modal')

      modalView.append();
    }
  }
});
