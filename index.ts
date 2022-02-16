
// import admin from 'firebase-admin';
// import * as firebaseAccountCredentials from './serviceAccountKey.json';
// import express from 'express'

// const serviceAccount = firebaseAccountCredentials as admin.ServiceAccount;

// const db = admin.initializeApp({
//     credential: admin.credential.cert(serviceAccount),
// }).firestore();

// const petsDB = db.collection('petsinfo');

// //Adding data
// async addData() : Promise<void>{
//     await petsDB
//         .doc('bru4Chow')
//         .set({
//             name : 'Bruno',
//             category : 'Dog',
//             age : '4 months',
//             breed : 'Chow chow',
//             color : 'white'
//         })
//         .then(() => console.log("Pet added"))
//         .catch((error) => console.log(error));
// }
    
// //Fetching data
//  async displayData(){
//      const bru4Chow =  await petsDB.doc('bru4Chow').get();
//     if(bru4Chow.exists){
//         console.log(bru4Chow.data());
//     }
//     else{
//         console.log('No such document exists');
//     }
//  }
    

//  //Updating data
//    async updatedata(){
//       await petsDB
//             .doc('bru4Chow')
//             .update({
//                 color : 'brown'
//             })
//             .then(() => console.log("updated"))
//             .catch((error) => console.log(error)); 
//    } 
    

//     //Delete data
//     async deleteData(){
//         await petsDB.doc('bru4Chow').delete(); 
//     }
    
