import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.findRecord('trouble-ticket', '531c7d20-8459-4f17-83a3-777d73443c9f');
  },
  actions:{
    // getOpenTickets: function(){
    //   console.log("get open tickets");
    // }
  }
});
