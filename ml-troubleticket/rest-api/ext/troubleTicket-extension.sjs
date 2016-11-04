var jsearch = require('/MarkLogic/jsearch.sjs');

function get(context, params) {
  xdmp.log('GET invoked');
  xdmp.log(params);

  // var results = [];
  // context.outputTypes = [];
  // for (var pname in params) {
  //   if (params.hasOwnProperty(pname)) {
  //     results.push({name: pname, value: params[pname]});
  //     context.outputTypes.push('application/json');
  //   }
  // }
  var results = jsearch.documents()
    .where(cts.jsonPropertyValueQuery('date-closed', null))
    .withOptions({returnQueryPlan: true})
    .orderBy('priority')
    .slice(0,5)
    .result();

  // Return a successful response status other than the default
  // using an array of the form [statusCode, statusMessage].
  // Do NOT use this to return an error response.
  context.outputStatus = [201, 'Yay'];

  // Set additional response headers using an object
  // context.outputHeaders =
  // {'X-My-Header1' : 42, 'X-My-Header2': 'h2val' };

  // Return a ValueIterator to return multiple documents
  return xdmp.arrayValues(results);
}
function post(context, params, input) {
  xdmp.log('POST invoked');
  return null;
}
function put(context, params, input) {
  xdmp.log('PUT invoked');
  var doc = writeDoc(input);
  context.outputTypes = ['application/json'];
  return doc ;
}
function deleteFunction(context, params) {
  xdmp.log('DELETE invoked');
  return null;
}
exports.GET = get;
exports.POST = post;
exports.PUT = put;
exports.DELETE = deleteFunction;



function writeDoc(doc){
  var mutableDoc = doc.toObject();
  if (! mutableDoc.data.attributes.id){
    mutableDoc.data.attributes.id = sem.uuidString();
  }
  var uri = 'ticket-'+mutableDoc.data.attributes.id + '.json';
  xdmp.documentInsert(uri, mutableDoc, xdmp.defaultPermissions());
  return mutableDoc;
}
