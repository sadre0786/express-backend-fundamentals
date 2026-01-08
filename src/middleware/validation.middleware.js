import AppError from "../utils/appError";

function validateCreateUser(req,res,next){
    const {name,email,age} = req.body;

    // validation checking
    if(!name || !email){
        return next(new AppError("Name and Email is required",400));
    };

    if(age && isNaN(age)){
        return next(new AppError("Age must be a number",400));
    };

    //sentization
    req.body.name = name.trim();
    req.body.email = email.trim().toLowerCase();

    next();
}

export default validateCreateUser