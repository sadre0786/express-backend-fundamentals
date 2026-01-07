// check auth is user logged in or not
function auth(req,res,next){
         const isLoggedIn = true;
         if(!isLoggedIn){
            return res.status(401).json({message:"Unauthorized !"});
         };
         next()
};

export default auth