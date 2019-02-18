/**
 * Open Legal Data API
 * With the Open Legal Data API you can access various data from the legal domain, e.g. law text or case files. The data may be used for semantic analysis or to create statistics. For more information visit our website. https://openlegaldata.io/
 *
 * OpenAPI spec version: v1
 * Contact: hello@openlegaldata.io
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.4.1
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.OldpApi) {
      root.OldpApi = {};
    }
    root.OldpApi.LawBook = factory(root.OldpApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The LawBook model module.
   * @module model/LawBook
   * @version v1
   */

  /**
   * Constructs a new <code>LawBook</code>.
   * @alias module:model/LawBook
   * @class
   * @param code {String} Book code (usually short title)
   */
  var exports = function(code) {
    var _this = this;

    _this['code'] = code;



  };

  /**
   * Constructs a <code>LawBook</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/LawBook} obj Optional instance to populate.
   * @return {module:model/LawBook} The populated <code>LawBook</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('code')) {
        obj['code'] = ApiClient.convertToType(data['code'], 'String');
      }
      if (data.hasOwnProperty('title')) {
        obj['title'] = ApiClient.convertToType(data['title'], 'String');
      }
      if (data.hasOwnProperty('revision_date')) {
        obj['revision_date'] = ApiClient.convertToType(data['revision_date'], 'Date');
      }
      if (data.hasOwnProperty('latest')) {
        obj['latest'] = ApiClient.convertToType(data['latest'], 'Boolean');
      }
    }
    return obj;
  }

  /**
   * Book code (usually short title)
   * @member {String} code
   */
  exports.prototype['code'] = undefined;
  /**
   * Full title of the book
   * @member {String} title
   */
  exports.prototype['title'] = undefined;
  /**
   * Date of revision
   * @member {Date} revision_date
   */
  exports.prototype['revision_date'] = undefined;
  /**
   * Is true if this is the latest revision of this book
   * @member {Boolean} latest
   */
  exports.prototype['latest'] = undefined;



  return exports;
}));


