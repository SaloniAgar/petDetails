import type * as grpc from '@grpc/grpc-js';
import type { MessageTypeDefinition } from '@grpc/proto-loader';

import type { PetServiceClient as _petPackage_PetServiceClient, PetServiceDefinition as _petPackage_PetServiceDefinition } from './petPackage/PetService';

type SubtypeConstructor<Constructor extends new (...args: any) => any, Subtype> = {
  new(...args: ConstructorParameters<Constructor>): Subtype;
};

export interface ProtoGrpcType {
  petPackage: {
    Empty: MessageTypeDefinition
    Pet: MessageTypeDefinition
    PetService: SubtypeConstructor<typeof grpc.Client, _petPackage_PetServiceClient> & { service: _petPackage_PetServiceDefinition }
    Pets: MessageTypeDefinition
    Response: MessageTypeDefinition
  }
}

