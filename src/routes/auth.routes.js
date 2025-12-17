import express from 'express';

const router = express.Router();

router.post('/sign-up', (req, res) => {
  res.send('POST /api/v1/auth/sign-up response');
});

router.post('/sign-in', (req, res) => {
  res.send('POST /api/v1/auth/sign-in response');
});

router.post('/sign-out', (req, res) => {
  res.send('POST /api/v1/auth/sign-out response');
});

export default router;
