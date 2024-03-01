import { hashPassword } from "../helpers/authHelper.js";
import userModels from "../models/userModels.js"

export const registerController = async(req, res) => {
    try{
        const {name, email, password, phone, address} = req.body;

        //validation
        if(!name){
            return res.send({error:'Name is required'});
        }
        if(!email){
            return res.send({error:'Email is required'});
        }
        if(!password){
            return res.send({error:'Password is required'});
        }
        if(!phone){
            return res.send({error:'Phone Number is required'});
        }
        if(!address){
            return res.send({error:'Address is required'});
        }

        const existinguser = await userModels.findOne({email});
        //Check Existing user
        if (existinguser) {
            return res.status(200).send({
                success:true,
                message: 'Already Register Please login'
            })
        }

        //register user
        const hashedPassword = await hashPassword(password);

        //save
        const user = await new userModels({
            name, 
            email, 
            password, 
            phone, 
            address, 
            password:hashedPassword
        }).save(); //To save

        res.status(201).send({
            success:true,
            message: 'User Register Successfully',
            user
        });

    } catch (error){
        console.log(error)
        res.status(500).send({
            success:false,
            message: 'Error in Registration',
            error
        })
    }
}

