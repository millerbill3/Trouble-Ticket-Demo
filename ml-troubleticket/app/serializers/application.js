import DS from 'ember-data';

export default DS.JSONAPISerializer.extend({
});

export default DS.RESTAPISerializer.extend({
  normalizeResponse(store, primaryModelClass, payload, id, requestType) {
    payload = {
      troubleTickets: payload.results
    };

    return this._super(store, primaryModelClass, payload, id, requestType);
  }
});
