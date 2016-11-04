
export function initialize(/* application */) {
  console.log("INITIALIZING");
  // TODO - Get this code working so that we can bootstrap a REST service when the application is started
  //let url = 'http://localhost:8002/manage/v2/servers?group-id=Default';
  //let getRequest = new digestAuthRequest('GET', url, 'admin', 'password');

  // make the request
  //   getRequest.request(function(data) {
  //     console.log("request made");
  //   },function(errorCode) {
  //     console.log("ERROR CODE: " + errorCode);
  //   });


}

export default {
  name: 'app',
  initialize
};
