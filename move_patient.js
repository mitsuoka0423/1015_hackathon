const SteinStore = require('stein-js-client');
const store = new SteinStore(
    'https://api.steinhq.com/v1/storages/634a4320eced9b09e9a004a5'
);

// const move_patient = async (now, next = "") => {
//     store.edit('reception', {
//         search: {
//             next: now 
//         }, set: {
//             next: next
//         }
//     })
//     .then(res => {
//         console.log(res);
//     });
// }

// move_patient('xp', 'account');

const search_patient = async (now) => {
    store.read('reception', {
        search: {
            next: now 
        }
    })
    .then(res => {
        console.log(res);
        const id_list = res.map((element) =>{
            return parseInt(element.temp_id,10);
        });
        console.log(id_list);
        min_id = id_list.indexOf(Math.min(...id_list));
        console.log(Math.min(...id_list));
        console.log(min_id);
        console.log(res[min_id]);
    });
}

search_patient('xp');