const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv').config();


const app = express();
app.use(cors());
app.use(bodyParser.json());

 
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Applicant Schema
const ApplicantSchema = new mongoose.Schema({
  name: String,
  email: String,
  phone: String,
  interests: String,
});
const Applicant = mongoose.model('Applicant', ApplicantSchema);

// Routes
app.post('/api/applicants', async (req, res) => {
  const newApplicant = new Applicant(req.body);
  await newApplicant.save();
  res.json({ message: 'Registration successful!' });
});

app.get('/api/applicants', async (req, res) => {
  const applicants = await Applicant.find();
  res.json(applicants);
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));