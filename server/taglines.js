/**
  The queries that have to do with the Tagline table are defined here.
**/

const db = require('../db') //this is required
const Activity = require('../db/models/activity');
const Tagline = require('../db/models/tagline');
const User = require('../db/models/user');

const Sequelize = require('sequelize');

const router = require('express').Router()

router.get('/all', function(req, res, next) {
    // Get all users and their taglines who have saved this event.
    Tagline.findAll({
        include: [ User ],
        where: {
          activity_id: req.query.activityId
        }
    })
    .then(result => {
        res.status(200).send(result);
    })
    .catch(next);
});

router.get('/single', function(req, res, next) {
    // Get a user's tagline for an activity.
    // This also returns the activity object it is attatched to.
    Tagline.findOne({
        include: [ Activity ],
        where: {
          user_id: req.query.userId,
          activity_id: req.query.activityId
        }
    })
    .then(result => {
        res.status(200).send(result);
    })
    .catch(next);
});

router.put('/save/:userId/:activityId', function(req, res, next) {
    // This is how a user saves an activity.
    Tagline.findOrCreate({
      where: {
          user_id: req.params.userId,
          activity_id: req.params.activityId
      }
    })
    .then(() => {
        res.status(200).send('Saved activity!');
    })
    .catch(next);
});

router.delete('/unsave', function(req, res, next) {
    // Delete a tagline for a user and activity.
    // This is also how a user unsaves an activity.
    Tagline.destroy({
        where: {
          user_id: req.query.userId,
          activity_id: req.query.activityId
        }
    })
    .then(() => {
        res.status(200).send('Unsaved activity!');
    })
    .catch(next);
});

router.put('/update/:userId/:activityId/:tagline', function(req, res, next) {
    // Update a tagline for a user and activity.
    Tagline.update({
        tag: req.params.tagline,
    }, {
        where: {
            user_id: req.params.userId,
            activity_id: req.params.activityId
        }
    })
    .then((result) => {
        res.status(200).send(result);
    })
    .catch(next);
});

module.exports = router;
