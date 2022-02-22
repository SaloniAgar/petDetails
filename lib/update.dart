import 'package:flutter/material.dart';
import 'package:personaldetails/crud_operations.dart';

class Update extends StatefulWidget {
  String name, category, age, breed, color, docid;
  Update(
      {Key? key,
      required this.name,
      required this.category,
      required this.age,
      required this.breed,
      required this.color,
      required this.docid})
      : super(key: key);

  @override
  _UpdateState createState() => _UpdateState();
}

class _UpdateState extends State<Update> {
  final _formKey = GlobalKey<FormState>();
  //late String name, category, age, breed, color;
  @override
  Widget build(BuildContext context) {
    return Scaffold(
        appBar: AppBar(
          title: Text('Update Pet Details'),
        ),
        body: Center(
            child: Column(
          children: [
            Form(
              key: _formKey,
              child: Container(
                child: Column(
                  mainAxisAlignment: MainAxisAlignment.center,
                  children: <Widget>[
                    SizedBox(
                      height: 20.0,
                    ),
                    TextFormField(
                      initialValue: widget.name,
                      onChanged: (val) {
                        setState(() {
                          widget.name = val;
                        });
                      },
                      validator: (String? value) =>
                          value!.isEmpty ? "Name cannot be empty" : null,
                      decoration: InputDecoration(
                          border: OutlineInputBorder(), labelText: "Name"),
                    ),
                    SizedBox(
                      height: 20.0,
                    ),
                    TextFormField(
                      initialValue: widget.category,
                      onChanged: (val) {
                        setState(() {
                          widget.category = val;
                        });
                      },
                      validator: (String? value) =>
                          value!.isEmpty ? "Category cannot be empty" : null,
                      decoration: InputDecoration(
                          border: OutlineInputBorder(),
                          labelText: "Category",
                          hintText: 'Dogs,Cats,etc'),
                    ),
                    SizedBox(
                      height: 20.0,
                    ),
                    TextFormField(
                      initialValue: widget.age,
                      onChanged: (val) {
                        setState(() {
                          widget.age = val;
                        });
                      },
                      validator: (String? value) =>
                          value!.isEmpty ? "Age cannot be empty" : null,
                      decoration: InputDecoration(
                          border: OutlineInputBorder(),
                          labelText: "Age",
                          hintText: '5 month ,1 year,etc'),
                    ),
                    SizedBox(
                      height: 20.0,
                    ),
                    TextFormField(
                      initialValue: widget.breed,
                      onChanged: (val) {
                        setState(() {
                          widget.breed = val;
                        });
                      },
                      validator: (String? value) =>
                          value!.isEmpty ? "Breed cannot be empty" : null,
                      decoration: InputDecoration(
                        border: OutlineInputBorder(),
                        labelText: "Breed",
                        hintText: 'Bulldog,Persian Cat,etc..',
                      ),
                    ),
                    SizedBox(
                      height: 20.0,
                    ),
                    TextFormField(
                      initialValue: widget.color,
                      onChanged: (val) {
                        setState(() {
                          widget.color = val;
                        });
                      },
                      validator: (String? value) =>
                          value!.isEmpty ? "Color cannot be empty" : null,
                      decoration: InputDecoration(
                          border: OutlineInputBorder(), labelText: "Color"),
                    ),
                    SizedBox(height: 20.0)
                  ],
                ),
              ),
            ),
            ElevatedButton(
                onPressed: () {
                  updatePetDetails(
                      name: widget.name,
                      category: widget.category,
                      age: widget.age,
                      breed: widget.breed,
                      color: widget.color,
                      docId: widget.docid);
                  Navigator.pop(context);
                },
                child: Text('Done'))
          ],
        ))

        // This trailing comma makes auto-formatting nicer for build methods.
        );
  }
}
