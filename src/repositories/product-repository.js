const mongoose = require('mongoose');
const Product = mongoose.model('Product');
const categoryRepository = require('../repositories/category-repository')



exports.getProduct = async () => {
    const result = await Product.find({}, 'title price _id description categoryId active');

    return result;
}


exports.create = async (data)=>{
    console.log(data);

    let produto = Product(data);
    await produto.save();
}

exports.put = async (id,data) => {
    await Product.findByIdAndUpdate(id, {
        $set:{
            title: data.title,
            description: data.description,
            price: data.price,
            categoryId: data.categoryId,
            active: data.active
        }
    });
}

exports.getById = async (id) => {

    let product = await Product.findById({_id : id}, 'title price _id description categoryId active');
    return product;
    
}

exports.delete = async (id) => {
    await Product.findByIdAndDelete(id);
}