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
    define(['ApiClient', 'model/CourtMinimal'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./CourtMinimal'));
  } else {
    // Browser globals (root is window)
    if (!root.OldpApi) {
      root.OldpApi = {};
    }
    root.OldpApi.ModelCase = factory(root.OldpApi.ApiClient, root.OldpApi.CourtMinimal);
  }
}(this, function(ApiClient, CourtMinimal) {
  'use strict';




  /**
   * The ModelCase model module.
   * @module model/ModelCase
   * @version v1
   */

  /**
   * Constructs a new <code>ModelCase</code>.
   * @alias module:model/ModelCase
   * @class
   * @param fileNumber {String} File number as defined by court
   * @param content {String} Case full-text formatted in Legal HTML
   */
  var exports = function(fileNumber, content) {
    var _this = this;




    _this['file_number'] = fileNumber;





    _this['content'] = content;
  };

  /**
   * Constructs a <code>ModelCase</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ModelCase} obj Optional instance to populate.
   * @return {module:model/ModelCase} The populated <code>ModelCase</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'Number');
      }
      if (data.hasOwnProperty('slug')) {
        obj['slug'] = ApiClient.convertToType(data['slug'], 'String');
      }
      if (data.hasOwnProperty('court')) {
        obj['court'] = CourtMinimal.constructFromObject(data['court']);
      }
      if (data.hasOwnProperty('file_number')) {
        obj['file_number'] = ApiClient.convertToType(data['file_number'], 'String');
      }
      if (data.hasOwnProperty('date')) {
        obj['date'] = ApiClient.convertToType(data['date'], 'Date');
      }
      if (data.hasOwnProperty('created_date')) {
        obj['created_date'] = ApiClient.convertToType(data['created_date'], 'Date');
      }
      if (data.hasOwnProperty('updated_date')) {
        obj['updated_date'] = ApiClient.convertToType(data['updated_date'], 'Date');
      }
      if (data.hasOwnProperty('type')) {
        obj['type'] = ApiClient.convertToType(data['type'], 'String');
      }
      if (data.hasOwnProperty('ecli')) {
        obj['ecli'] = ApiClient.convertToType(data['ecli'], 'String');
      }
      if (data.hasOwnProperty('content')) {
        obj['content'] = ApiClient.convertToType(data['content'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {Number} id
   */
  exports.prototype['id'] = undefined;
  /**
   * @member {String} slug
   */
  exports.prototype['slug'] = undefined;
  /**
   * @member {module:model/CourtMinimal} court
   */
  exports.prototype['court'] = undefined;
  /**
   * File number as defined by court
   * @member {String} file_number
   */
  exports.prototype['file_number'] = undefined;
  /**
   * Publication date as in source
   * @member {Date} date
   */
  exports.prototype['date'] = undefined;
  /**
   * Entry is created at this date time
   * @member {Date} created_date
   */
  exports.prototype['created_date'] = undefined;
  /**
   * Date time of last change
   * @member {Date} updated_date
   */
  exports.prototype['updated_date'] = undefined;
  /**
   * Type of decision (Urteil, Beschluss, ...)
   * @member {String} type
   */
  exports.prototype['type'] = undefined;
  /**
   * European Case Law Identifier
   * @member {String} ecli
   */
  exports.prototype['ecli'] = undefined;
  /**
   * Case full-text formatted in Legal HTML
   * @member {String} content
   */
  exports.prototype['content'] = undefined;



  return exports;
}));


