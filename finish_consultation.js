'use strict';

const dayjs = require('dayjs');
const now = dayjs();

const SteinStore = require('stein-js-client');
const store = new SteinStore(
    'https://api.steinhq.com/v1/storages/634a4320eced9b09e9a004a5'
);

const finish_consultation = async (room_num, next = "") => {
    // hope_for と once_in を考慮して終了した部屋番号を次の空欄の患者さんに埋める
    store.edit('reception', {
        search: {next: String(room_num)},
        set: {next: 'temp'}
    });
    store.read('reception')
    .then(res => {
        // console.log(res);
        for (const patient of res) {
            console.log('in');
            if (patient.next == null) {
                if (patient.hope_for != null && patient.hope_for != room_num) {
                    console.log('continue_1');
                    continue
                } else if (patient.once_in != null && patient.once_in != room_num) {
                    console.log('continue_2');
                    continue
                } else {
                    console.log(patient);
                    const target_id = String(patient.temp_id);
                    store.edit('reception', {
                        search: {temp_id: target_id},
                        set: {
                            once_in: room_num ,
                            next: room_num,
                            update_time: now.format('HH/mm')
                        }
                    })
                    break
                };
            } else {
                console.log('out')
            };
        };
    }).then(() => {
        store.edit('reception', {
            search: {next: 'temp'},
            set: {next: next, update_time: now.format('HH/mm')}
        });
    });
};

finish_consultation(1, 'account');