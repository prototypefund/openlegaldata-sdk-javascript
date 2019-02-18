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
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.OpenLegalDataJavaScriptApi);
  }
}(this, function(expect, OpenLegalDataJavaScriptApi) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new OpenLegalDataJavaScriptApi.CaseAnnotation();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('CaseAnnotation', function() {
    it('should create an instance of CaseAnnotation', function() {
      // uncomment below and update the code to test CaseAnnotation
      //var instance = new OpenLegalDataJavaScriptApi.CaseAnnotation();
      //expect(instance).to.be.a(OpenLegalDataJavaScriptApi.CaseAnnotation);
    });

    it('should have the property id (base name: "id")', function() {
      // uncomment below and update the code to test the property id
      //var instance = new OpenLegalDataJavaScriptApi.CaseAnnotation();
      //expect(instance).to.be();
    });

    it('should have the property belongsTo (base name: "belongs_to")', function() {
      // uncomment below and update the code to test the property belongsTo
      //var instance = new OpenLegalDataJavaScriptApi.CaseAnnotation();
      //expect(instance).to.be();
    });

    it('should have the property label (base name: "label")', function() {
      // uncomment below and update the code to test the property label
      //var instance = new OpenLegalDataJavaScriptApi.CaseAnnotation();
      //expect(instance).to.be();
    });

    it('should have the property valueStr (base name: "value_str")', function() {
      // uncomment below and update the code to test the property valueStr
      //var instance = new OpenLegalDataJavaScriptApi.CaseAnnotation();
      //expect(instance).to.be();
    });

    it('should have the property valueInt (base name: "value_int")', function() {
      // uncomment below and update the code to test the property valueInt
      //var instance = new OpenLegalDataJavaScriptApi.CaseAnnotation();
      //expect(instance).to.be();
    });

    it('should have the property createdAt (base name: "created_at")', function() {
      // uncomment below and update the code to test the property createdAt
      //var instance = new OpenLegalDataJavaScriptApi.CaseAnnotation();
      //expect(instance).to.be();
    });

    it('should have the property updatedAt (base name: "updated_at")', function() {
      // uncomment below and update the code to test the property updatedAt
      //var instance = new OpenLegalDataJavaScriptApi.CaseAnnotation();
      //expect(instance).to.be();
    });

  });

}));
