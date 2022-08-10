const mongoose = require('mongoose');
const Schema = mongoose.Schema;

async function main() {
    await mongoose.connect('mongodb://localhost:27017/relationshipDemo', {
    });
};

const productSchema = new mongoose.Schema({
    name: String,
    price: Number,
    season: {
        type: String,
        enum: ['Spring', 'Summer', 'Fall', 'Winter']
    }
});

const farmSchema = new mongoose.Schema({
    name: String,
    city: String,
    products: [{ type: Schema.Types.ObjectId, ref: 'Product' }]
});

const Product = mongoose.model('Product', productSchema);
const Farm = mongoose.model('Farm', farmSchema);

// Product.insertMany([
//     { name: 'Goddess Melon', price: 4.99, season: 'Summer' },
//     { name: 'Sugar Watermelon', price: 5.99, season: 'Summer' },
//     { name: 'Asparagus', price: 3.99, season: 'Spring' }
// ]);


// const makeFarm = async () => {
//     const farm = new Farm({ name: 'Full Bely Farms', city: 'Guinda, CA' });
//     const melon = await Product.findOne({ name: 'Goddess Melon' });
//     farm.products.push(melon)
//     await farm.save()
//     console.log(farm);
// }
// makeFarm();

const addProduct = async () => {
    const farm = await Farm.findOne({ name: 'Full Bely Farms' });
    const watermelon = await Product.findOne({ name: 'Sugar Watermelon' });
    farm.products.push(watermelon)
    farm.save();
}

addProduct();


main().catch(err => console.log(err));