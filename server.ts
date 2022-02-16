import express from 'express';
import admin from "firebase-admin";
import * as firebaseAccountCredentials from './serviceAccountKey.json';
import http from 'http';
import dotenv from 'dotenv';

const serviceAccount = firebaseAccountCredentials as admin.ServiceAccount;
admin.initializeApp({
credential: admin.credential.cert(serviceAccount),
databaseURL: "https://console.firebase.google.com/project/personal-details-38de1/"
});
let db=admin.firestore();
let petCollection=db.collection('petsinfo')

const app = express()
app.use(express.urlencoded())
app.use(express.json());
app.set('view engine', 'ejs')

dotenv.config();

const server = http.createServer(app);

const config = {
    port: process.env.PORT || 2000
};

server.listen(config.port, function () {
    console.log('This server is running over port ' + config.port);
});

// Adding data
app.post('/add',async (req,res)=>{
    let docid = req.header('docid');
      if(!docid || docid == undefined){
        res.status(400).send('Please pass docid in headers');
      }
      else{
    await petCollection
        .doc(docid!)
        .set({
            name : req.body.name,
            category : req.body.category,
            age : req.body.age,
            breed : req.body.breed,
            color : req.body.color
        })
        .then(() => console.log("Pet added"))
        .catch((error) => console.log(error));
        res.status(200).send('added pet');;
    }
  })

  // Display data
  app.get('/display',async (req,res) =>{
    let docid = req.header('docid');
    if(!docid || docid == undefined){
        res.status(400).send('Please pass docid in headers');
    }
    else{
    const bru4Chow =  await petCollection.doc(docid!).get();
        if(bru4Chow.exists){
            console.log(bru4Chow.data());
            res.status(200).json(bru4Chow.data());
        }
        else{
            res.status(404).send('Document does not exist');
        }}
        
  })

  // Update data
  app.put('/update',async (req,res) => {
      let docid = req.header('docid');
      if(!docid || docid == undefined){
        res.status(400).send('Please pass docid in headers');
      }
      else{
          let object =   (await petCollection.doc(docid!).get());
          if(!object.exists){
              res.status(404).send('Documnet does not exist');
          }
          else{
              let data = object.data();
              if(req.body.name){
                  data!.name = req.body.name;
              }
              if(req.body.age){
                data!.age = req.body.age;
            }
            if(req.body.color){
                data!.color = req.body.color;
            }
            if(req.body.breed){
                data!.breed = req.body.breed;
            }
            if(req.body.category){
                data!.category = req.body.category;
            }
            await petCollection
      .doc(docid!)
      .update(data!)
      .then(() => console.log("Pet updated"))
      .catch((error) => console.log(error));
      res.status(200).send('updated pet');
        }
      }
  })

  // Delete data
  app.delete('/delete',async (req,res) => {
    let docid = req.header('docid');
      if(!docid || docid == undefined){
        res.status(400).send('Please pass docid in headers');
    }else{
        if(!(await petCollection.doc(docid!).get()).exists){
            res.status(404).send('Documnet does not exist');
        }
        await petCollection.doc(docid!).delete()
        res.status(200).send('deleted pet');
    }
  })