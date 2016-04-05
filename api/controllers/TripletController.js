/**
 * TripletController
 *
 * @description :: Server-side logic for managing triplets
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {

  /**
   * CommentController.create()
   */
  create: function (req, res) {
    return res.json({
      name : req.param("name"),
      serial : req.param("serial"),
      concerto : req.param("concerto"),
      nbcd : req.param("nbcd"),
      todo: 'Triplet create is not implemented yet!'
    });
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

