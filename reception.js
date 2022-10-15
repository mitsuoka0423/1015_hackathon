'use strict';

const dayjs = require('dayjs');
const now = dayjs()

const SteinStore = require('stein-js-client');
const store = new SteinStore(
    'https://api.steinhq.com/v1/storages/634a4320eced9b09e9a004a5'
);

const params = {
    name: 'name_sample',
    birth_day: 'birth_day_sample',
    hope_for: 'hope_for_sample',
    update_time: now.format('HH/mm'),
    temp_id: Date.now()
};

store
  .append("reception", [
      params
  ])
  .then(res => {
    const str = res.updatedRange;
    const temp_id = String(params.temp_id);
    console.log(temp_id);
    const row_num = parseInt(str.match(/\d+$/)[0],10) - 1;
    console.log(row_num);
    store
      .edit('reception', {
        search: {temp_id: temp_id},
        set:{num: row_num}
      })
      .then(res => {
        console.log(res);
      });
  });