const mongoose = require('mongoose');

async function main() {
    await mongoose.connect('mongodb://localhost:27017/relationshipDemo', {
    });
};


const userSchema = new mongoose.Schema({
    first: String,
    last: String,
    addressess: [
        {
            _id: { id: false },
            //this will prevent Mongoose from giving addressess their own ids
            street: String,
            city: String,
            state: String,
            country: String
        }
        //Mongoose will treat this as its own embedded schema, which will give the addressess an id
    ]
});
//this is an example of one to many for mongoose relationships. You place the data right here in the schema data

const User = mongoose.model('User', userSchema);

const makeUser = async () => {
    const u = new User({
        first: 'Harry',
        last: 'Potter'
    })
    u.addressess.push({
        street: '123 Sesame Street',
        city: 'New York',
        state: 'NY',
        country: 'USA'
    })
    const res = await u.save()
    console.log(res)
}

const addAddress = async (id) => {
    const user = await User.findById(id);
    user.addressess.push(
        {
            street: '99 Sesame Street',
            city: 'New York',
            state: 'NY',
            country: 'USA'
        }
    )
    const res = await user.save()
    console.log(res);
}

addAddress('62f2bffa723945c4bd3eb185')

makeUser();







main().catch(err => console.log(err));