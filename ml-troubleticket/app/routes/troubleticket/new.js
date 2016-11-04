import Ember from 'ember';

export default Ember.Route.extend({
  model: function () {
    return {};
  },
  notifications: Ember.inject.service('notification-messages'),

  actions: {
    createTicket: function (model) {
      let notify = this.get('notifications');
      notify.info('Saving Ticket ...');
      let tt = this.store.createRecord('trouble-ticket', {
        synopsis: model.synopsis,
        description: model.description,
        severity: model.severity,
        priority: model.priority,
        network: model.network,
        dateSubmitted: model.dateSubmitted,
        origPhone: model.origPhone,
        origAddress: model.origAddress,
        origFirstName: model.origFirstName,
        origLastName: model.origLastName,
        origEmail: model.origEmail,
        //SUBMITTER DATA
        subFirstName: model.subFirstName,
        subLastName: model.subLastName,
        subEmail: model.subEmail,
        subPhone: model.subPhone
      });
      tt.save().then(function() {
        notify.clearAll();
        notify.success('Ticket saved successfully!', {
          autoClear: true
        });
      }, function() {
        notify.clearAll();
        notify.error('Error saving Ticket!', {
          autoClear: true
        });
      });
    }
  }
});
