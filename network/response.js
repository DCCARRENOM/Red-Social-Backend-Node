 function success(req,res,message,status){
    let statusCode = status || 200;
    let statusMessage = message || '';
    
    res.status(status).send({
        error:false,
        status: status,
        body: message,
    });
}

function error (req,res,message,status){
    let statusCode = status || 500;
    let statusMessage = message || 'Internal Server Error';

    res.status(statusCode).send({
        error:false,
        status: status,
        body: message,
    });
}

export default {success,error};