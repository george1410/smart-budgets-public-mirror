const schedule = require('node-schedule');

module.exports = () => {
  schedule.scheduleJob('job1', '30 * * * * *', () => {
    console.log('it is 30 seconds pas the minute');
  });
};
