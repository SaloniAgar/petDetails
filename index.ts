import path from 'path';
import * as grpc from '@grpc/grpc-js';
import * as protoLoader from '@grpc/proto-loader';
import { Firebase } from './firebase-functions';
import {ProtoGrpcType} from './proto/pet';

const PROTO_PATH ='./proto/pet.proto';
const PORT = 8000;
const packageDefinition = protoLoader.loadSync(path.resolve(__dirname, PROTO_PATH));
const grpcObject = grpc.loadPackageDefinition(packageDefinition) as unknown as ProtoGrpcType;
const petPackage = grpcObject.petPackage;

const firebase = new Firebase()

    const server = new grpc.Server();
    server.bindAsync(`0.0.0.0:${PORT}`, grpc.ServerCredentials.createInsecure(), (error,port) => {
        if(error){
            console.error(error);
            return;
        }
        console.log(port);
        server.start();
    });
    server.addService(petPackage.PetService.service,
        {
            "addPet" : addPet,
            "updatePet" : updatePet,
            "deletePet" : deletePet,
            "getAllPets" : getAllPets
        }
    );
async function addPet (call: any,callback: any){
    const meta = call.metadata;
    const docid = meta.get('docid').toString();
      if(!docid || docid == undefined){
        callback(null,{ code: grpc.status.INVALID_ARGUMENT, message: 'No header'});
      }
      else{
    await firebase.addData(docid,call.request)
    callback(null,{ code: grpc.status.OK, message: 'Pet added'});
    }
}

async function updatePet(call: any,callback: any){
    const meta = call.metadata;
    const docid = meta.get('docid').toString();
    await firebase.updateData(docid,call.request.pet)
    callback(null,{ code: grpc.status.OK, message: 'Pet updated'});
}

async function deletePet(call: any,callback: any){
    const meta = call.metadata;
    const docid = meta.get('docid').toString();
    await firebase.deleteData(docid)
}

async function getAllPets(call: any,callback: any){
    const meta = call.metadata;
    const docid = meta.get('docid').toString();
    callback(null, firebase.getData(docid));
}

export { grpcObject, grpc };