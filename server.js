"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const firebase_admin_1 = __importDefault(require("firebase-admin"));
const firebaseAccountCredentials = __importStar(require("./serviceAccountKey.json"));
const http_1 = __importDefault(require("http"));
const dotenv_1 = __importDefault(require("dotenv"));
const serviceAccount = firebaseAccountCredentials;
firebase_admin_1.default.initializeApp({
    credential: firebase_admin_1.default.credential.cert(serviceAccount),
    databaseURL: "https://console.firebase.google.com/project/personal-details-38de1/"
});
let db = firebase_admin_1.default.firestore();
let petCollection = db.collection('petsinfo');
const app = (0, express_1.default)();
app.use(express_1.default.urlencoded());
app.use(express_1.default.json());
app.set('view engine', 'ejs');
dotenv_1.default.config();
const server = http_1.default.createServer(app);
const config = {
    port: process.env.PORT || 2000
};
server.listen(config.port, function () {
    console.log('This server is running over port ' + config.port);
});
// Adding data
app.post('/add', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let docid = req.header('docid');
    if (!docid || docid == undefined) {
        res.status(400).send('Please pass docid in headers');
    }
    else {
        yield petCollection
            .doc(docid)
            .set({
            name: req.body.name,
            category: req.body.category,
            age: req.body.age,
            breed: req.body.breed,
            color: req.body.color
        })
            .then(() => console.log("Pet added"))
            .catch((error) => console.log(error));
        res.status(200).send('added pet');
        ;
    }
}));
// Display data
app.get('/display', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let docid = req.header('docid');
    if (!docid || docid == undefined) {
        res.status(400).send('Please pass docid in headers');
    }
    else {
        const bru4Chow = yield petCollection.doc(docid).get();
        if (bru4Chow.exists) {
            console.log(bru4Chow.data());
            res.status(200).json(bru4Chow.data());
        }
        else {
            res.status(404).send('Document does not exist');
        }
    }
}));
// Update data
app.put('/update', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let docid = req.header('docid');
    if (!docid || docid == undefined) {
        res.status(400).send('Please pass docid in headers');
    }
    else {
        let object = (yield petCollection.doc(docid).get());
        if (!object.exists) {
            res.status(404).send('Documnet does not exist');
        }
        else {
            let data = object.data();
            if (req.body.name) {
                data.name = req.body.name;
            }
            if (req.body.age) {
                data.age = req.body.age;
            }
            if (req.body.color) {
                data.color = req.body.color;
            }
            if (req.body.breed) {
                data.breed = req.body.breed;
            }
            if (req.body.category) {
                data.category = req.body.category;
            }
            yield petCollection
                .doc(docid)
                .update(data)
                .then(() => console.log("Pet updated"))
                .catch((error) => console.log(error));
            res.status(200).send('updated pet');
        }
    }
}));
// Delete data
app.delete('/delete', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let docid = req.header('docid');
    if (!docid || docid == undefined) {
        res.status(400).send('Please pass docid in headers');
    }
    else {
        if (!(yield petCollection.doc(docid).get()).exists) {
            res.status(404).send('Documnet does not exist');
        }
        yield petCollection.doc(docid).delete();
        res.status(200).send('deleted pet');
    }
}));
