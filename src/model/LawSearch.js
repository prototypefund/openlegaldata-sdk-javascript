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
    root.OldpApi.LawSearch = factory(root.OldpApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The LawSearch model module.
   * @module model/LawSearch
   * @version v1
   */

  /**
   * Constructs a new <code>LawSearch</code>.
   * @alias module:model/LawSearch
   * @class
   * @param bookCode {String} 
   * @param text {String} 
   */
  var exports = function(bookCode, text) {
    var _this = this;

    _this['book_code'] = bookCode;

    _this['text'] = text;

  };

  /**
   * Constructs a <code>LawSearch</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/LawSearch} obj Optional instance to populate.
   * @return {module:model/LawSearch} The populated <code>LawSearch</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('book_code')) {
        obj['book_code'] = ApiClient.convertToType(data['book_code'], 'String');
      }
      if (data.hasOwnProperty('title')) {
        obj['title'] = ApiClient.convertToType(data['title'], 'String');
      }
      if (data.hasOwnProperty('text')) {
        obj['text'] = ApiClient.convertToType(data['text'], 'String');
      }
      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {String} book_code
   */
  exports.prototype['book_code'] = undefined;
  /**
   * Verbose title of law
   * @member {String} title
   */
  exports.prototype['title'] = undefined;
  /**
   * @member {String} text
   */
  exports.prototype['text'] = undefined;
  /**
   * @member {String} id
   */
  exports.prototype['id'] = undefined;



  return exports;
}));


