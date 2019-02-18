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
    root.OldpApi.CourtMinimal = factory(root.OldpApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The CourtMinimal model module.
   * @module model/CourtMinimal
   * @version v1
   */

  /**
   * Constructs a new <code>CourtMinimal</code>.
   * @alias module:model/CourtMinimal
   * @class
   * @param name {String} Full name of the court with location
   * @param slug {String} Type & city name as lowercase
   * @param state {Number} Court belongs to this state (derive country of this field)
   */
  var exports = function(name, slug, state) {
    var _this = this;


    _this['name'] = name;
    _this['slug'] = slug;

    _this['state'] = state;


  };

  /**
   * Constructs a <code>CourtMinimal</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CourtMinimal} obj Optional instance to populate.
   * @return {module:model/CourtMinimal} The populated <code>CourtMinimal</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'Number');
      }
      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
      if (data.hasOwnProperty('slug')) {
        obj['slug'] = ApiClient.convertToType(data['slug'], 'String');
      }
      if (data.hasOwnProperty('city')) {
        obj['city'] = ApiClient.convertToType(data['city'], 'Number');
      }
      if (data.hasOwnProperty('state')) {
        obj['state'] = ApiClient.convertToType(data['state'], 'Number');
      }
      if (data.hasOwnProperty('jurisdiction')) {
        obj['jurisdiction'] = ApiClient.convertToType(data['jurisdiction'], 'String');
      }
      if (data.hasOwnProperty('level_of_appeal')) {
        obj['level_of_appeal'] = ApiClient.convertToType(data['level_of_appeal'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {Number} id
   */
  exports.prototype['id'] = undefined;
  /**
   * Full name of the court with location
   * @member {String} name
   */
  exports.prototype['name'] = undefined;
  /**
   * Type & city name as lowercase
   * @member {String} slug
   */
  exports.prototype['slug'] = undefined;
  /**
   * Court belongs to this city, if null court is state-level
   * @member {Number} city
   */
  exports.prototype['city'] = undefined;
  /**
   * Court belongs to this state (derive country of this field)
   * @member {Number} state
   */
  exports.prototype['state'] = undefined;
  /**
   * Jurisdiction of court (ordinary, civil, ...)
   * @member {String} jurisdiction
   */
  exports.prototype['jurisdiction'] = undefined;
  /**
   * Subject-matter jurisdiction (local, federal, high court, ...)
   * @member {String} level_of_appeal
   */
  exports.prototype['level_of_appeal'] = undefined;



  return exports;
}));

