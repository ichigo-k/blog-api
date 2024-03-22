
function TryCatchWrapper(func){
    try{
        func
    } catch (error){
        console.error("Error while adding user:", error)
        res.status(500).send({ error: 'An internal server error occurred' })
    }
}

export default TryCatchWrapper;