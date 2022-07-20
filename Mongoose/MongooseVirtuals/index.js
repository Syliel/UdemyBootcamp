const mongoose = require('mongoose');

main().catch(err => console.log('oh no, mongo connection error', err));

async function main() {
    await mongoose.connect('mongodb://localhost:27017/person');
    console.log("Mongo Connection Open");
};

const personSchema = new mongoose.Schema({
    first: String,
    last: String
});

personSchema.virtual('fullName').get(function () {
    return `${this.first} ${this.last}`
});

personSchema.pre('save', async function () {
    this.first = 'Yo';
    this.last = 'Mama';
    console.log('About to save!!!!')
});

personSchema.post('save', async function () {
    console.log('Just Saved!!')
});

const Person = mongoose.model('Person', personSchema);