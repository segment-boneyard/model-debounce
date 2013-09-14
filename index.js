
var debounce = require('debounce')
  , is = require('is');


/**
 * Plugin.
 *
 * @param {Function|Number} Model
 */

module.exports = function (Model) {
  if (!is.number(Model)) return bind(Model);
  return function (Constructor) {
    bind(Constructor, Model);
  };
};


/**
 * Debounce a model's save and update methods by an `interval`.
 *
 * @param {Function} Model
 * @param {Number} interval (optional)
 */

function bind (Model, interval) {
  interval = interval || 100;
  Model.prototype.save = debounce(Model.prototype.save, interval);
  Model.prototype.update = debounce(Model.prototype.update), interval;
}