const getAllJobs = async (req, res) => {
  res.send('Get All Jobs');
};

const getJob = async (req, res) => {
  res.send('Get Job');
};

const createJob = async (req, res) => {
  res.send('Create Job');
};

const editJob = async (req, res) => {
  res.send('Edit Job');
};

const deleteJob = async (req, res) => {
  res.send('delete Job');
};

module.exports = { getAllJobs, getJob, createJob, editJob, deleteJob };
