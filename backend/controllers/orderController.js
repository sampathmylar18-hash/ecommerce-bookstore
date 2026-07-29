const order = require('../models/order-model')

const createOrder = async(req,res)=>{
    try{
   
    const newOrder = await order.create({...req.body,userId : req.user.id});
    res.status(200).json(newOrder)
    }catch(e){
        res.status(400).json({
            message : e.message
        })
    }
}

const getAllOrders = async (req ,res)=>{
    try{
        const orders = await order.find();
        res.json(orders);
    }catch(e){
        res.status(500).json({
            message : e.message
        })
    }
}

const getMyOrders = async (req,res)=>{
    try{
        const myOrders = await order.find({userId : req.user.id})
        res.json(myOrders)
    }catch(e){
        res.status(500).json({
            message : e.message
        })
    }
}
module.exports = {createOrder,getAllOrders,getMyOrders};