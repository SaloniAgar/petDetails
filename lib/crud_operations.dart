import 'package:cloud_firestore/cloud_firestore.dart';
import 'package:flutter/cupertino.dart';

final FirebaseFirestore _firestore = FirebaseFirestore.instance;
final CollectionReference _mainCollection = _firestore.collection('pets');
String docID = '';

Future<void> addPet(
    {required String name,
    required String category,
    required String age,
    required String breed,
    required String color}) async {
  DocumentReference documentReferencer = _mainCollection.doc();

  Map<String, dynamic> data = <String, dynamic>{
    'name': name,
    'category': category,
    'age': age,
    'breed': breed,
    'color': color
  };
  await documentReferencer.set(data).whenComplete(() {
    print("Submitted Sucessfully");
  }).catchError((e) => print(e));
}

Stream<QuerySnapshot> readCollection() {
  return _mainCollection.snapshots();
}

Future<void> updatePetDetails({
  required String name,
  required String category,
  required String age,
  required String breed,
  required String color,
  required String docId,
}) async {
  DocumentReference documentReferencer = _mainCollection.doc(docId);

  Map<String, dynamic> data = <String, dynamic>{
    'name': name,
    'category': category,
    'age': age,
    'breed': breed,
    'color': color
  };

  await documentReferencer
      .update(data)
      .whenComplete(() => print("Details updated in database"))
      .catchError((e) => print(e));
}

Future<void> deletePet({
  required String docId,
}) async {
  DocumentReference documentReferencer = _mainCollection.doc(docId);

  await documentReferencer
      .delete()
      .whenComplete(() => print('User deleted from database'))
      .catchError((e) => print(e));
}
