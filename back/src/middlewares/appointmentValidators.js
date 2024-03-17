module.exports = (req, res, next) => {
    const {date,time,userId,description,place} = req.body;
    if (!date || !time || !userId|| !description|| !place){
        throw Error ("Middleware: Faltan datos")
    }
    next();
}