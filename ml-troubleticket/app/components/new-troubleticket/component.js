import Ember from 'ember';


export default Ember.Component.extend({
  cbState: false,
  severity: "Minor",
  priority: "Normal",
  network: "UNCLASS",

  actions: {
    createTicket: function(model){
      model.severity = this.severity;
      model.priority = this.priority;
      model.network = this.network;
      model.dateSubmitted = new Date();

      this.sendAction('createTicket', model);

      //This should probably only happen when the save is successful
      this.set('newTicket.subFirstName', null);
      this.set('newTicket.subLastName', null);
      this.set('newTicket.subPhone', null);
      this.set('newTicket.subEmail', null);
      this.set('newTicket.origFirstName', null);
      this.set('newTicket.origLastName', null);
      this.set('newTicket.origPhone', null);
      this.set('newTicket.origEmail', null);
      this.set('newTicket.synopsis', null);
      this.set('newTicket.description', null);
      this.set('newTicket.priority', 'Normal');
      this.set('newTicket.severity', 'Minor');
      this.set('newTicket.network', 'UNCLASS');
      this.set('newTicket.id', null);
      this.set('cbState', false);
    },
    updateSeverity: function(s){
      this.set('severity', s);
    },
    updatePriority: function(p){
      this.set('priority', p);
    },
    updateNetwork: function(n){
      this.set('network', n);
    },
    copyOriginator: function(){
      let state = this.get('cbState');
      if(state){
        this.set('cbState', false);
        this.set('newTicket.subFirstName', null);
        this.set('newTicket.subLastName', null);
        this.set('newTicket.subPhone', null);
        this.set('newTicket.subEmail', null);
      } else {
        this.set('cbState', true);
        this.set('newTicket.subFirstName', this.get('newTicket.origFirstName'));
        this.set('newTicket.subLastName', this.get('newTicket.origLastName'));
        this.set('newTicket.subPhone', this.get('newTicket.origPhone'));
        this.set('newTicket.subEmail', this.get('newTicket.origEmail'));
      }
    }
  }
});
