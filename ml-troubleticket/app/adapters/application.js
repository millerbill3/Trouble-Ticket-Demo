import DS from 'ember-data';

// export default DS.JSONAPIAdapter.extend({
//   namespace: 'v1/documents',
//   host: 'http://localhost:8991'
//   ,
//   buildURL: function(modelName, suffix) {
//     return this._super("", suffix);
//   }
// });

//DS.RESTAdapter.reopen({

//   ajaxOptions: function(url, type, hash) {
//     hash = hash || {};
//
//     if (type === 'POST') {
//       hash.data = hash.data || {};
//       hash.data['_method'] = type;
//       type = 'PUT';
//     }
//
//     return this._super(url, type, hash);
//   }
// });
export default DS.RESTAdapter.extend({
  namespace: 'controllers/tt-controller',
  host: 'http://localhost:8991'
});
