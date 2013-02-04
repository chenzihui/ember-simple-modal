/**
 * The view we are using for our modal dialog box.
 **/

App.ModalView = Ember.View.extend({
  templateName: 'modal',

  closeModal: function() {
    this.remove();
  }
});