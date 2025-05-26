class ApiResponse{
    constructor(statusCode,data,message){
        this.statusCode=statusCode;
        this.data=data;
        this.message=message;
    }
    static success(data,message="Success"){
        return new ApiResponse(200,data,message);
    }
}