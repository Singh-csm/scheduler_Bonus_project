const express = require('express');
const moment = require('moment');
const app = express();

app.use(express.json());

app.post('/scheduleEvent', async (req, res) => {
  try {
    const event = req.body;
    const dateTime = moment(event.dateTime);

    if (!dateTime.isValid()) {
      return res.status(400).send({ error: 'Invalid date and time format' });
    }

    const currentTime = moment();

    if (dateTime.isBefore(currentTime)) {
      return res.status(400).send({ error: 'Date and time must be in the future' });
    }

    const duration = moment.duration(dateTime.diff(currentTime));
    const sleepTime = duration.asMilliseconds();

    setTimeout(async () => {
      const text = event.text;
      const reversedText = text.split('').reverse().join('');
      console.log(reversedText);
    }, sleepTime);

    res.send({ message: 'Event scheduled' });
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
});

app.listen(3000, () => {
  console.log('Scheduler API listening on port 3000');
});
