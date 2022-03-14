import admin, {db} from './firebase-service';

export class Firebase {

    database = db;
    // Function for adding data to Firestore
    async addData(docID: string, data: any): Promise<void> {
        
        await this.database
            .collection('petsdetail')
            .doc(docID)
            .set({name : data.name,
                category : data.category,
                age : data.age,
                breed : data.breed,
                color : data.color})
            .then(() => console.log("added pet"))
            .catch((error) => console.log(error));
        
    }

    // Function for updating data to Firestore
    async updateData(docID: string, req: any): Promise<void> {
        let object =   (await this.database
            .collection('petsdetail').doc(docID!).get());
          if(!object.exists){
              console.log('Documnet does not exist');
          }
          else{
            let data = object.data();
            if(req.name){
                data!.name = req.body.name;
            }
            if(req.age){
              data!.age = req.body.age;
          }
          if(req.color){
              data!.color = req.body.color;
          }
          if(req.breed){
              data!.breed = req.body.breed;
          }
          if(req.body.category){
              data!.category = req.body.category;
          }
        await this.database
            .collection('petsdetail')
            .doc(docID)
            .update(data!)
            .then(() => console.log("updated"))
            .catch((error) => console.log(error));
        }
    }

    // Function for getting pet data from Firestore
    async getData(docID: string): Promise<any> {
        let data;
        await this.database
            .collection('petsdetail')
            .doc(docID)
            .get()
            .then((snapshot) => {
                console.log("fetching data");
                data = snapshot.data();
            })
            .catch((error) => console.log(error));
            return data;
    }

    // function for deleting pet
    async deleteData( docID: string): Promise< void> {
        if(!docID || docID == undefined){
            console.log('Please pass docid in headers');
        }else{
            if(!(await this.database
                .collection('petsdetail').doc(docID!).get()).exists){
                console.log('Documnet does not exist');
            }
            await this.database
            .collection('petsdetail')
            .doc(docID!)
            .delete()
            console.log('Deleted pet');
        }
    }
}
