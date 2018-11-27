const express 		    	= require('express');
const router 		      	= express.Router();

const UserController 	  = require('../controllers/user.controller');
const PostController    = require('../controllers/post.controller');
const CommentController = require('../controllers/comment.controller');

const passport      	  = require('passport');
const path              = require('path');


require('./../middleware/passport')(passport)
/* GET home page. */
router.get('/', function(req, res, next) {
  res.json({status:"success", message:"Parcel Pending API", data:{"version_number":"v1.0.0"}})
});

router.post(    '/users',                UserController.create);                                                    // C
router.get(     '/users',                passport.authenticate('jwt', {session:false}), UserController.get);        // R
router.put(     '/users',                passport.authenticate('jwt', {session:false}), UserController.update);     // U
router.delete(  '/users',                passport.authenticate('jwt', {session:false}), UserController.remove);     // D
router.post(    '/users/login',          UserController.login);

router.post(    '/posts',                passport.authenticate('jwt', {session:false}), PostController.add);        // C
router.get(     '/posts',                PostController.getMany);    // R

router.get(     '/posts/:slug',          PostController.get);        // R
router.put(     '/posts/:post_id',       passport.authenticate('jwt', {session:false}), PostController.update);     // U
router.delete(  '/posts/:post_id',       passport.authenticate('jwt', {session:false}), PostController.remove);     // D

router.post(    '/comments',             CommentController.add);     // C
router.get(     '/comments',             CommentController.getMany); // R

router.get(     '/comments/:comment_id', passport.authenticate('jwt', {session:false}), CommentController.get);     // R
router.put(     '/comments/:comment_id', passport.authenticate('jwt', {session:false}), CommentController.update);  // U
router.delete(  '/comments/:comment_id', passport.authenticate('jwt', {session:false}), CommentController.remove);  // D

router.get(     '/comments/:comment_id/replies',     passport.authenticate('jwt', {session:false}), CommentController.getReplies);  // R


module.exports = router;
