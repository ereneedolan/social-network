const router = require('express').Router();
const {
  getThoughts,
  getSingleThought,
  createThought,
  updateThought, 
  deleteThought, 
  addReaction,
  deleteReaction
} = require('../../controllers/ThoughtController');

// /api/Thoughts
router.route('/').get(getThoughts).post(createThought);

// /api/Thoughts/:thoughtId
router.route('/:thoughtId').get(getSingleThought).put(updateThought).delete(deleteThought);

// /api/thoughts/:thoughtId/reactions

router.route('/:thoughtId/reactions').post(addReaction);

router.route('/:thoughtId/reactions/:reactionId').delete(deleteReaction);


module.exports = router;