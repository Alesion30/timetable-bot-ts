import express from 'express';

import { PORT } from './constants/env';
import { registMidleware } from './midleware';
import { registRoute } from './router';

/** express app */
const app = registRoute(registMidleware(express()));

// start server
app.listen(PORT, () => {
  console.log(`Running at http://localhost:${PORT}`);
});
