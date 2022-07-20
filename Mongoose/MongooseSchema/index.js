const mongoose = require('mongoose');

main().catch(err => console.log(err));

async function main() {
    await mongoose.connect('mongodb://localhost:27017/shopApp');
};

const productSchema = new mongoose.Schema({
    //when we make the schema this way, it lets us add more details to the content, like if something is required to be entered into the db
    name: {
        type: String,
        required: true,
        maxlength: 20
    },
    price: {
        type: Number,
        required: true
    },
    onSale: {
        type: Boolean,
        default: false
    },
    categories: [String],
    //this indicates categories is type array of strings
    qty: {
        online: {
            type: Number,
            default: 0
        },
        inStore: {
            type: Number,
            default: 0
        }
    }
});

// productSchema.methods.greet = function () {
//     console.log("Hello! Hi! Howdy!")
//     console.log(`- from ${this.name}`)
// };

productSchema.methods.toggleOnSale = function () {
    this.onSale = !this.onSale;
    return this.save();
}

productSchema.methods.addCategory = function (newCat) {
    this.categories.push(newCat);
    return this.save();
}

productSchema.statics.fireSale = function () {
    return this.updateMany({}, { onSale: true, price: 0 })
}

const Product = mongoose.model('Product', productSchema);

const findProduct = async () => {
    const foundProduct = await Product.findOne({ name: 'Mountain Bike' });
    console.log(foundProduct)
    await foundProduct.toggleOnSale();
    console.log(foundProduct)
    await foundProduct.addcategory('Outdoors')
    console.log(foundProduct)

}

Product.fireSale().then(res => console.log(res))

findProduct()

// const bike = new Product({ name: 'Bike Helmet', price: 999, categories: ['Cycling', 'Safety'] })
// bike.save()
//     .then(data => {
//         console.log("It worked")
//         console.log(data);
//     })
//     .catch(err => {
//         console.log("Oh no, error!")
//         console.log(err)
//     })