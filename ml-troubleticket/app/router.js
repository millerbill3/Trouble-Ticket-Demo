import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('troubleticket', function() {
    this.route('new');
    this.route('open-tickets');
  });
});

export default Router;
