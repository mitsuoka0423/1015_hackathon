const SteinStore = require('stein-js-client');
const store = new SteinStore(
    'https://api.steinhq.com/v1/storages/634a4320eced9b09e9a004a5'
);

const change_next = async (now, next) => {
    store.edit('reception', {
        search: {
            next: now 
        }, set: {
            next: next
        }
    })
    .then(res => {
        console.log(res);
    });
}

change_next('2', 'account');