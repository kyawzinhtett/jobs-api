const express = require('express');
const {
  getAllJobs,
  getJob,
  createJob,
  editJob,
  deleteJob,
} = require('../controllers/jobsController');

const router = express.Router();

router.route('/').get(getAllJobs).post(createJob);
router.route('/:id').get(getJob).patch(editJob).delete(deleteJob);

module.exports = router;
