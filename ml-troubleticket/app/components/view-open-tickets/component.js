import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    getOpenTickets: function(){
      console.log("get em");
      var posts = this.store.findAll('troubleTicket');
      console.log(posts);
    }
  }
});
