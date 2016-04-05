/**
 * UrlController
 *
 * @description :: Server-side logic for managing urls
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {

  /**
   * CommentController.create()
   */
  create: function (req, res) {
    var jsonSchemaGenerator = require('json-schema-generator'),
      request = require('request'),
      json = { },
      schemaObj;

    var url = req.param("url");
    var api_key = req.param("api_key");

    var options = {
      url: url,
      headers: {"api_key" : api_key},
      method: 'GET',
      json: true
    };

    request(
      options
      , function (error, response, body) {

      if (!error && response.statusCode === 200) {
        console.log(body) // Print the json response
        json = JSON.parse(JSON.stringify(body));
        schemaObj = jsonSchemaGenerator(json);
        return res.json(schemaObj);
      } else {
        if (error) {
          console.log(error);
        } else {
          console.log(response);
        }
      }
    })

  },

  /**
   * CommentController.create()
   */
  update: function (req, res) {
    return res.json({
      todo: 'Not implemented yet2!'
    });
  },

};

