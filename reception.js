const SteinStore = require('stein-js-client');
const store = new SteinStore(
    'https://api.steinhq.com/v1/storages/634a4320eced9b09e9a004a5'
);

const params = {
    name: 'name_sample',
    birth_day: 'birth_day_sample',
    hope_for: 'hope_for_sample'
};

store
  .append("reception", [
      params
  ])
  .then(res => {
    console.log(res);
  });