NGINX Configuration
This Nginx configuration (nginx.conf) can be placed in the nginx configuration folder (assuming Nginx is installed on your system) and will allow you to run the application using Ember's built in web server and avoiding issues associated with cross-site scripting.

If you choose to run using this scheme, ensure you change the port referenced in application.js to point to the nginx port specified in the configuration `(9991)`.
`export default DS.RESTAdapter.extend({
  namespace: 'v1/resources',
  host: 'http://localhost:8991'
});`
