const mongoose = require('mongoose');
const cities = require('./cities')
const { places, descriptors } = require('./seedHelpers')
const Campground = require('../models/campground');

async function main() {
    await mongoose.connect('mongodb://localhost:27017/yelp-camp', {
    });
};

main().catch(err => console.log(err));

const sample = array => array[Math.floor(Math.random() * array.length)];

const seedDB = async () => {
    await Campground.deleteMany({});
    for (let i = 0; i < 50; i++) {
        const random1000 = Math.floor(Math.random() * 1000);
        const price = Math.floor(Math.random() * 20) + 10;
        const camp = new Campground({
            location: `${cities[random1000].city}, ${cities[random1000].state}`,
            title: `${sample(descriptors)} ${sample(places)}`,
            image: 'https://source.unsplash.com/collection/483251',
            description: "It's a campground. I can't believe how campgroundy it is. Whatever will we do if this campground campgrounds less next year? I guess we will have to find some other place to use as a campground. Maybe a campground? I don't know. I guess that's kinda a cool thought. I'm rambling so this description can look all professional and stuff, but it's really just me being weird as usual. K, thanks.",
            price
        })
        await camp.save();
    }
};

seedDB().then(() => {
    mongoose.connection.close();
})