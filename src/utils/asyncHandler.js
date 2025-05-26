export const asyncHandler =(func)=>{
    return async function (req,res,next){
        try{
           await func(req,res,next);
            
        }catch(err){
            console.error("Error in asyncHandler:", err);
        }
    } 
}


