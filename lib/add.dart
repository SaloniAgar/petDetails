import 'package:flutter/material.dart';
import 'package:personaldetails/crud_operations.dart';

class AddPet extends StatefulWidget {
  const AddPet({Key? key}) : super(key: key);

  @override
  State<AddPet> createState() => _AddPetState();
}

class _AddPetState extends State<AddPet> {
  final _formKey = GlobalKey<FormState>();
  late String name;
  late String category;
  late String age;
  late String breed;
  late String color;
  @override
  Widget build(BuildContext context) {
    return Scaffold(
        appBar: AppBar(
          title: Text('Add Pet'),
        ),
        body: Column(
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
                      onChanged: (val) {
                        setState(() {
                          name = val;
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
                      onChanged: (val) {
                        setState(() {
                          category = val;
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
                      onChanged: (val) {
                        setState(() {
                          age = val;
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
                      onChanged: (val) {
                        setState(() {
                          breed = val;
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
                      onChanged: (val) {
                        setState(() {
                          color = val;
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
                  addPet(
                      name: name,
                      category: category,
                      age: age,
                      breed: breed,
                      color: color);
                  Navigator.pop(context);
                },
                child: Text('ADD'))
          ],
        ));
  }
}
