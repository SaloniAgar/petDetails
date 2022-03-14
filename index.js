"use strict";
exports.__esModule = true;
var grpc = require("@grpc/grpc-js");
exports.grpc = grpc;
var protoLoader = require("@grpc/proto-loader");
//import { ProtoGrpcType } from './pet.proto';
//const PROTO_PATH = __dirname + './pet.proto';
var PORT = 8000;
var packageDefinition = protoLoader.loadSync(/*path.resolve(__dirname, PROTO_PATH)*/ "pet.proto", {});
var grpcObject = grpc.loadPackageDefinition(packageDefinition);
exports.grpcObject = grpcObject;
var petPackage = grpcObject.petPackage;
var server = new grpc.Server();
server.bind("0.0.0.0:" + PORT, grpc.ServerCredentials.createInsecure());
server.addService(petPackage.PetService.service, {
    "addPet": addPet,
    "updatePet": updatePet,
    "deletePet": deletePet,
    "getAllPets": getAllPets
});
server.start();
function addPet(call, callback) {
    console.log(call);
}
function updatePet(call, callback) {
}
function deletePet(call, callback) {
}
function getAllPets(call, callback) {
}
