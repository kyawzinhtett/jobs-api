const { StatusCodes } = require('http-status-codes');
const Job = require('../models/Job');
const { BadRequestError, NotFoundError } = require('../errors');

const getAllJobs = async (req, res) => {
  res.send('Get All Jobs');
};

const getJob = async (req, res) => {
  res.send('Get Job');
};

const createJob = async (req, res) => {
  req.body.createdBy = req.user.userId;
  const job = await Job.create(req.body);
  res.status(StatusCodes.CREATED).json({ job });
};

const editJob = async (req, res) => {
  res.send('Edit Job');
};

const deleteJob = async (req, res) => {
  res.send('delete Job');
};

module.exports = { getAllJobs, getJob, createJob, editJob, deleteJob };
