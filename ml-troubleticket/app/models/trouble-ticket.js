import DS from 'ember-data';

export default DS.Model.extend({
  synopsis: DS.attr('string'),
  description: DS.attr('string'),
  severity: DS.attr('string'),
  priority: DS.attr('string'),
  network: DS.attr('string'),
  dateSubmitted: DS.attr('date', {
    defaultValue() { return new Date(); }
  }),
  dateResolved: DS.attr('date'),
  dateVerified: DS.attr('date'),
  dateClosed: DS.attr('date'),
  sme: DS.attr('string'),
  resolution: DS.attr('string'),
  resolutionDesc: DS.attr('string'),
  currentStatus: DS.attr('string', {
    defaultValue() { return "New"; }
  }),
  dateLastContact: DS.attr('date'),
  //ORIGINATOR DATA
  origPhone: DS.attr('string'),
  origAddress: DS.attr('string'),
  origFirstName: DS.attr('string'),
  origLastName: DS.attr('string'),
  origEmail: DS.attr('string'),
  origFullName: Ember.computed('origFirstName', 'origLastName', function() {
    return `${this.get('origFirstName')} ${this.get('origLastName')}`;
  }),
  //SUBMITTER DATA
  subFirstName: DS.attr('string'),
  subLastName: DS.attr('string'),
  subPhone: DS.attr('string'),
  subEmail: DS.attr('string'),
  subFullName: Ember.computed('subFirstName', 'subLastName', function() {
    return `${this.get('subFirstName')} ${this.get('subLastName')}`;
  })
});
