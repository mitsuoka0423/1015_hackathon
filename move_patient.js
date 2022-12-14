'use strict';

const dayjs = require('dayjs');
const now = dayjs();

const SteinStore = require('stein-js-client');
const store = new SteinStore(
    'https://api.steinhq.com/v1/storages/634a4320eced9b09e9a004a5'
);

const move_patient = async (current_state, next = "") => {
    store.read('reception', {
        search: {
            next: current_state
        }
    })
    .then(res => {
        console.log(res);
        const id_list = res.map((element) =>{
            return parseInt(element.temp_id,10);
        });
        // console.log(id_list);
        const target_id = String(Math.min(...id_list));
        // console.log(Math.min(...id_list));
        console.log(target_id);
        store.edit('reception', {
            search: {temp_id: target_id},
            set: {
                next: next,
                update_time: now.format('HH/mm')
            }
        })
        .then(res => {
            console.log(res);
        })
    })
}

move_patient('xp');