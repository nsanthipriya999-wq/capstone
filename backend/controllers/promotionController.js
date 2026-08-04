//-----------Promotion  Controller Logic------------------------------
import Promotion from '../models/Promotion.js';
import mongoose from 'mongoose';

//------------GET-------Read All Promotions (getPromotions())--------------------
// ----------------------http://localhost:3000/promotions--	--------------------
export async function getPromotions(req, res) {
    try {                                       //retrieves  full document
        const result = await Promotion.find();


        res.json(result);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};
//-------------------Get one  Service (getPromotionById())-----------------------
// --------------------http://localhost:3000/promotions/:id-----------------------

export async function getPromotionById(req, res) {
    try {

        if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
            return res.status(400).json({
                message: "Invalid Promotion ID"
            });
        }
        const result = await Promotion.findById(req.params.id);
        if (!result) {
            return res.status(404).json({ message: "Service not found" });
        }
        res.json(result);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};
//-------------------Get   Service (getActivePromotions())-----------------------
// --------------------http://localhost:3000/promotions/active-----------------------

export async function getActivePromotions(req, res) {
    try {

        const today=new Date();
        const promotions=await Promotion.find({active:true, startDate:{$lte:today}, endDate:{$gte:today},});
        
        if (!promotions) {
            return res.status(404).json({ message: "No Active Promotions found" });
        }
        res.json(promotions);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};
//-------------------POST----create new Promotion createPromotion()---------------------
// -------------------------http://localhost:3000/promotions---------------------- 

export async function createPromotion(req, res) {
    try {

        console.log(req.body);
        const result = await Promotion.create(req.body);
        return res.status(201).json(result);

    } catch (err) {

        return res.status(400).json({ error: err.message });
    }
};
//---------------PATCH------Update Promotion (updatePromotion())----------------------------------
// -----------------------------http://localhost:3000/promotions/:id------------------------

export async function updateService(req, res) {
    try {
        if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
            return res.status(400).json({
                message: "Invalid Service ID"
            });
        }
        console.log(req.body);
        const result = await Promotion.findByIdAndUpdate(req.params.id, req.body, { returnDocument: 'after', runValidators: true, });
        if (!result) {
            return res.status(404).json({ message: "Service not found" });
        }
        else
            return res.status(200).json(result);

    } catch (err) {

        return res.status(400).json({ error: err.message });
    }

};

//--------DELETE--------Delete Promotion function (deletePromotion())-------------------------
// -------------------http://localhost:3000/promotions/:id-----------------------------------
export async function deletePromotion(req, res) {
    try {
        console.log(req.body);
        if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
            return res.status(400).json({
                message: "Invalid Service ID"
            });
        }
        const result = await Promotion.findByIdAndDelete(req.params.id);
        if (!result) {
            return res.status(404).json({ message: "Service not found" });
        }
        else {
            res.status(200).json(result);
        }
    } catch (err) {
        return res.status(400).json({ error: err.message });
    }
}