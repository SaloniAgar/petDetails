import 'package:flutter/material.dart';
import 'package:personaldetails/add.dart';
import 'package:personaldetails/crud_operations.dart';
import 'package:cloud_firestore/cloud_firestore.dart';
import 'package:personaldetails/main.dart';
import 'package:personaldetails/update.dart';

class Display extends StatefulWidget {
  //String docid;
  Display({Key? key}) : super(key: key);

  @override
  _DisplayState createState() => _DisplayState();
}

class _DisplayState extends State<Display> {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('Available Pets'),
      ),
      body: StreamBuilder(
        stream: readCollection(), //readDetails(docId: widget.docid),
        builder: (BuildContext context, AsyncSnapshot<QuerySnapshot> snapshot) {
          if (snapshot.hasError) {
            return Text('Something went wrong');
          }

          if (snapshot.connectionState == ConnectionState.waiting) {
            return Text("Loading");
          }

          return ListView(
            children: snapshot.data!.docs.map((DocumentSnapshot document) {
              Map<String, dynamic> data =
                  document.data()! as Map<String, dynamic>;
              return Card(
                margin: EdgeInsets.all(4.0),
                color: Colors.white,
                child: Row(
                  children: [
                    SizedBox(
                      width: 250.0,
                      child: Column(
                        children: [
                          Container(
                            alignment: Alignment.centerLeft,
                            padding: EdgeInsets.only(left: 10.0),
                            child: Text(
                              data['name'],
                              style: TextStyle(
                                  fontSize: 25.0, color: Colors.black),
                              textAlign: TextAlign.left,
                            ),
                          ),
                          SizedBox(
                            height: 5.0,
                          ),
                          Row(
                            children: [
                              SizedBox(
                                width: 10.0,
                              ),
                              Text(
                                data['category'],
                                style: TextStyle(
                                  fontSize: 20.0,
                                  color: Colors.grey,
                                  fontStyle: FontStyle.italic,
                                ),
                              ),
                              SizedBox(
                                width: 10.0,
                              ),
                              Text(
                                data['breed'],
                                style: TextStyle(
                                  fontSize: 20.0,
                                  color: Colors.grey,
                                  fontStyle: FontStyle.italic,
                                ),
                              ),
                              SizedBox(
                                width: 10.0,
                              ),
                            ],
                          ),
                          SizedBox(
                            height: 5.0,
                          ),
                          Row(
                            children: [
                              SizedBox(
                                width: 10.0,
                              ),
                              Text(
                                data['age'],
                                style: TextStyle(
                                    fontSize: 20.0, color: Colors.blueGrey),
                              ),
                              SizedBox(
                                width: 10.0,
                              ),
                              Text(
                                data['color'],
                                style: TextStyle(
                                    fontSize: 20.0, color: Colors.blueGrey),
                              ),
                              SizedBox(
                                width: 10.0,
                              ),
                            ],
                          ),
                          SizedBox(
                            height: 5.0,
                          ),
                        ],
                      ),
                    ),
                    IconButton(
                      icon: Icon(Icons.edit, size: 40.0),
                      onPressed: () {
                        Navigator.push(
                            context,
                            MaterialPageRoute(
                                builder: (context) => Update(
                                    name: data['name'],
                                    category: data['category'],
                                    age: data['age'],
                                    breed: data['breed'],
                                    color: data['color'],
                                    docid: document.id)));
                      },
                    ),
                    IconButton(
                      icon: Icon(
                        Icons.delete,
                        size: 40.0,
                      ),
                      onPressed: () {
                        deletePet(docId: document.id);
                      },
                    ),
                  ],
                ),
              );
            }).toList(),
          );
        },
      ),
      // Row(
      //   children: [
      //     SizedBox(
      //       width: 20.0,
      //     ),
      //     ElevatedButton(
      //         onPressed: () {
      //           Navigator.push(
      //               context,
      //               MaterialPageRoute(
      //                   builder: (context) => Update(
      //                       name: name,
      //                       address: address,
      //                       mobile: mobile,
      //                       docid: widget.docid)));
      //         },
      //         child: Text('Update')),
      //     SizedBox(
      //       width: 20.0,
      //     ),
      //     ElevatedButton(
      //         onPressed: () {
      //           deleteUser(docId: widget.docid);
      //           setState(() {
      //             userExist = false;
      //           });
      //           Navigator.pop(context);
      //         },
      //         child: Text('Delete')),
      //   ],
      // ),
      //   ],
      // ),
      floatingActionButton: FloatingActionButton(
        child: Icon(Icons.add),
        backgroundColor: Colors.green,
        onPressed: () {
          Navigator.push(
              context, MaterialPageRoute(builder: (context) => AddPet()));
        },
      ),
    );
  }
}
