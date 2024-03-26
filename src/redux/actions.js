export async function getAll() {
     await fetch('http://localhost:3000/api/items').then(response => {
        if (!response.ok) {
            throw new Error('Data fail!');  
        }
        return response.json()
    })


}

// import ctrlWrapper from "../hooks/ctrlWrapper";

// const URL = 'http://localhost:3000/api';

//  function fetchAll() {
//   return fetch(
//     `${URL}`
//   ).then(response => {
//     if (!response.ok) {
//       throw new Error('Data fail!');
//     }
//     return response.json();
//   });
// }

// export default {
//     fetchAll: ctrlWrapper(fetchAll)
// }
