//-----------Promotion  Controller Logic------------------------------
import promotion from '../models/Promotion.js';
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

export async function getServiceById(req, res) {
    try {

        if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
            return res.status(400).json({
                message: "Invalid Service ID"
            });
        }
        const result = await Service.findById(req.params.id);
        if (!result) {
            return res.status(404).json({ message: "Service not found" });
        }
        res.json(result);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};
//-------------------POST----create new Service createService()---------------------
// -------------------------http://localhost:3000/services---------------------- 

export async function createService(req, res) {
    try {

        console.log(req.body);
        const result = await Service.create(req.body);
        return res.status(201).json(result);

    } catch (err) {

        return res.status(400).json({ error: err.message });
    }
};
//---------------PATCH------Update Service  (updateService())----------------------------------
// -----------------------------http://localhost:3000/services/:id------------------------

export async function updateService(req, res) {
    try {
        if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
            return res.status(400).json({
                message: "Invalid Service ID"
            });
        }
        console.log(req.body);
        const result = await Service.findByIdAndUpdate(req.params.id, req.body, { returnDocument: 'after', runValidators: true, });
        if (!result) {
            return res.status(404).json({ message: "Service not found" });
        }
        else
            return res.status(200).json(result);

    } catch (err) {

        return res.status(400).json({ error: err.message });
    }

};

//--------DELETE--------Delete Service function (deleteService())-------------------------
// -------------------http://localhost:3000/services/:id-----------------------------------
export async function deleteService(req, res) {
    try {
        console.log(req.body);
        if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
            return res.status(400).json({
                message: "Invalid Service ID"
            });
        }
        const result = await Service.findByIdAndDelete(req.params.id);
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