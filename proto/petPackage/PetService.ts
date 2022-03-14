// Original file: proto/pet.proto

import type * as grpc from '@grpc/grpc-js'
import type { MethodDefinition } from '@grpc/proto-loader'
import type { Empty as _petPackage_Empty, Empty__Output as _petPackage_Empty__Output } from '../petPackage/Empty';
import type { Pet as _petPackage_Pet, Pet__Output as _petPackage_Pet__Output } from '../petPackage/Pet';
import type { Pets as _petPackage_Pets, Pets__Output as _petPackage_Pets__Output } from '../petPackage/Pets';
import type { Response as _petPackage_Response, Response__Output as _petPackage_Response__Output } from '../petPackage/Response';

export interface PetServiceClient extends grpc.Client {
  addPet(argument: _petPackage_Pet, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_petPackage_Response__Output>): grpc.ClientUnaryCall;
  addPet(argument: _petPackage_Pet, metadata: grpc.Metadata, callback: grpc.requestCallback<_petPackage_Response__Output>): grpc.ClientUnaryCall;
  addPet(argument: _petPackage_Pet, options: grpc.CallOptions, callback: grpc.requestCallback<_petPackage_Response__Output>): grpc.ClientUnaryCall;
  addPet(argument: _petPackage_Pet, callback: grpc.requestCallback<_petPackage_Response__Output>): grpc.ClientUnaryCall;
  addPet(argument: _petPackage_Pet, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_petPackage_Response__Output>): grpc.ClientUnaryCall;
  addPet(argument: _petPackage_Pet, metadata: grpc.Metadata, callback: grpc.requestCallback<_petPackage_Response__Output>): grpc.ClientUnaryCall;
  addPet(argument: _petPackage_Pet, options: grpc.CallOptions, callback: grpc.requestCallback<_petPackage_Response__Output>): grpc.ClientUnaryCall;
  addPet(argument: _petPackage_Pet, callback: grpc.requestCallback<_petPackage_Response__Output>): grpc.ClientUnaryCall;
  
  deletePet(argument: _petPackage_Pet, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_petPackage_Response__Output>): grpc.ClientUnaryCall;
  deletePet(argument: _petPackage_Pet, metadata: grpc.Metadata, callback: grpc.requestCallback<_petPackage_Response__Output>): grpc.ClientUnaryCall;
  deletePet(argument: _petPackage_Pet, options: grpc.CallOptions, callback: grpc.requestCallback<_petPackage_Response__Output>): grpc.ClientUnaryCall;
  deletePet(argument: _petPackage_Pet, callback: grpc.requestCallback<_petPackage_Response__Output>): grpc.ClientUnaryCall;
  deletePet(argument: _petPackage_Pet, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_petPackage_Response__Output>): grpc.ClientUnaryCall;
  deletePet(argument: _petPackage_Pet, metadata: grpc.Metadata, callback: grpc.requestCallback<_petPackage_Response__Output>): grpc.ClientUnaryCall;
  deletePet(argument: _petPackage_Pet, options: grpc.CallOptions, callback: grpc.requestCallback<_petPackage_Response__Output>): grpc.ClientUnaryCall;
  deletePet(argument: _petPackage_Pet, callback: grpc.requestCallback<_petPackage_Response__Output>): grpc.ClientUnaryCall;
  
  getAllPets(argument: _petPackage_Empty, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_petPackage_Pets__Output>): grpc.ClientUnaryCall;
  getAllPets(argument: _petPackage_Empty, metadata: grpc.Metadata, callback: grpc.requestCallback<_petPackage_Pets__Output>): grpc.ClientUnaryCall;
  getAllPets(argument: _petPackage_Empty, options: grpc.CallOptions, callback: grpc.requestCallback<_petPackage_Pets__Output>): grpc.ClientUnaryCall;
  getAllPets(argument: _petPackage_Empty, callback: grpc.requestCallback<_petPackage_Pets__Output>): grpc.ClientUnaryCall;
  getAllPets(argument: _petPackage_Empty, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_petPackage_Pets__Output>): grpc.ClientUnaryCall;
  getAllPets(argument: _petPackage_Empty, metadata: grpc.Metadata, callback: grpc.requestCallback<_petPackage_Pets__Output>): grpc.ClientUnaryCall;
  getAllPets(argument: _petPackage_Empty, options: grpc.CallOptions, callback: grpc.requestCallback<_petPackage_Pets__Output>): grpc.ClientUnaryCall;
  getAllPets(argument: _petPackage_Empty, callback: grpc.requestCallback<_petPackage_Pets__Output>): grpc.ClientUnaryCall;
  
  updatePet(argument: _petPackage_Pet, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_petPackage_Response__Output>): grpc.ClientUnaryCall;
  updatePet(argument: _petPackage_Pet, metadata: grpc.Metadata, callback: grpc.requestCallback<_petPackage_Response__Output>): grpc.ClientUnaryCall;
  updatePet(argument: _petPackage_Pet, options: grpc.CallOptions, callback: grpc.requestCallback<_petPackage_Response__Output>): grpc.ClientUnaryCall;
  updatePet(argument: _petPackage_Pet, callback: grpc.requestCallback<_petPackage_Response__Output>): grpc.ClientUnaryCall;
  updatePet(argument: _petPackage_Pet, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_petPackage_Response__Output>): grpc.ClientUnaryCall;
  updatePet(argument: _petPackage_Pet, metadata: grpc.Metadata, callback: grpc.requestCallback<_petPackage_Response__Output>): grpc.ClientUnaryCall;
  updatePet(argument: _petPackage_Pet, options: grpc.CallOptions, callback: grpc.requestCallback<_petPackage_Response__Output>): grpc.ClientUnaryCall;
  updatePet(argument: _petPackage_Pet, callback: grpc.requestCallback<_petPackage_Response__Output>): grpc.ClientUnaryCall;
  
}

export interface PetServiceHandlers extends grpc.UntypedServiceImplementation {
  addPet: grpc.handleUnaryCall<_petPackage_Pet__Output, _petPackage_Response>;
  
  deletePet: grpc.handleUnaryCall<_petPackage_Pet__Output, _petPackage_Response>;
  
  getAllPets: grpc.handleUnaryCall<_petPackage_Empty__Output, _petPackage_Pets>;
  
  updatePet: grpc.handleUnaryCall<_petPackage_Pet__Output, _petPackage_Response>;
  
}

export interface PetServiceDefinition extends grpc.ServiceDefinition {
  addPet: MethodDefinition<_petPackage_Pet, _petPackage_Response, _petPackage_Pet__Output, _petPackage_Response__Output>
  deletePet: MethodDefinition<_petPackage_Pet, _petPackage_Response, _petPackage_Pet__Output, _petPackage_Response__Output>
  getAllPets: MethodDefinition<_petPackage_Empty, _petPackage_Pets, _petPackage_Empty__Output, _petPackage_Pets__Output>
  updatePet: MethodDefinition<_petPackage_Pet, _petPackage_Response, _petPackage_Pet__Output, _petPackage_Response__Output>
}
