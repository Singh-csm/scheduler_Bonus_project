const axios = require('axios');

const events = [
  {
    text: 'textOne',
    dateTime: '2020-07-10 15:00:00.000',
  },
  {
    text: 'textTwo',
    dateTime: '2020-07-15 14:00:00.000',
  },
  {
    text: 'textFinal',
    dateTime: '2020-07-15 15:00:00.000',
  },
  {
    text: 'event4',
    dateTime: '2020-07-16 16:00:00.000',
  },
  {
    text: 'event5',
    dateTime: '2020-07-17 17:00:00.000',
  },
  {
    text: 'event6',
    dateTime: '2020-07-18 18:00:00.000',
  },
  {
    text: 'event7',
    dateTime: '2020-07-19 19:00:00.000',
  },
  {
    text: 'event8',
    dateTime: '2020-07-20 20:00:00.000',
  },
  {
    text: 'event9',
    dateTime: '2020-07-21 21:00:00.000',
  },
  {
    text: 'event10',
    dateTime: '2020-07-22 22:00:00.000',
  },
];

const scheduleEvent = async (event) => {
  try {
    const response = await axios.post('http://localhost:3000/scheduleEvent', event);
    console.log(response.data);
  } catch (error) {
    console.error(error);
  }
};

events.forEach((event) => scheduleEvent(event));



