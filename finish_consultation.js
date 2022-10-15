const SteinStore = require('stein-js-client');
const store = new SteinStore(
    'https://api.steinhq.com/v1/storages/634a4320eced9b09e9a004a5'
);

const finish_consultation = async (room_num) => {
    // hope_for と once_in を考慮して終了した部屋番号を次の空欄の患者さんに埋める
};