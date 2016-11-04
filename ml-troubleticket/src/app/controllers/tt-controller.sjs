var req = require("/roxy/lib/request.xqy");
var jsearch = require('/MarkLogic/jsearch.sjs');

module.exports = {

  print : function () {
    return "here";
  },
  update  : function () {
    var doc = writeDoc(xdmp.getRequestBody());
    xdmp.setResponseCode(200,"OK");
    xdmp.setResponseContentType("application/json");
    xdmp.log(doc);
    return xdmp.quote(doc);
  },
  getTickets : function() {
    xdmp.log("GET TICKETS")
    var results = jsearch.documents()
      .where(cts.jsonPropertyValueQuery('date-closed', null))
      .orderBy('priority')
      .slice(0,5)
      .result();
    xdmp.setResponseContentType("application/json");
    xdmp.log(results);
    return xdmp.quote(results);
  },
  getTicket : function() {
    xdmp.log("GET TICKET");
    var id = req.get("id");
    xdmp.log("ID: " + id);
    var results = jsearch.documents()
      .where(cts.jsonPropertyValueQuery('id', id))
      .result();
    xdmp.setResponseContentType("application/json");
    xdmp.log(results);
    return xdmp.quote(results);
  }
};


// function update()
// {
//   xdmp.log('PUT invoked');
//   var doc = writeDoc(xdmp.getRequestBody());
//   xdmp.setResponseCode(200,"OK");
//   xdmp.setContentType("application/json");
//   return doc;
// }

function writeDoc(doc){
  var mutableDoc = doc.toObject();
  if (! mutableDoc.data.attributes.id){
    mutableDoc.data.attributes.id = sem.uuidString();
  }
  var uri = 'ticket-'+mutableDoc.data.attributes.id + '.json';
  xdmp.documentInsert(uri, mutableDoc, xdmp.defaultPermissions());
  return mutableDoc;
}
