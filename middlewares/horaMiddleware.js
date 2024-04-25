const horaActualMiddleware=(req,res,next)=>{
    console.log('middleware hora actual')
    const now=new Date();
    const hour=now.getHours();
    const minutes=now.getMinutes();
    const seconds=now.getSeconds();

    const horaCompleta=`${hour}:${minutes}:${seconds}`
    // console.log(horaCompleta.split(':')[0])
    req.horaActual=horaCompleta;
    next();
}

module.exports=horaActualMiddleware;