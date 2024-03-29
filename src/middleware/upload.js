
import multer, { diskStorage } from "multer";
import path from "path";


const storage = diskStorage({
    destination: function (req, file, cb) {
        cb(null, "./uploads/")
    }, 
    filename: function (req, file, cb) {
        const Imagename = Date.now() + path.extname(file.originalname)
        cb(null, Imagename) 
    
        req.filenameData = Imagename
    }
    })
    
    
    const upload = multer({
        storage: storage,
        limits: {
            fileSize: 1024 * 1024 * 5
        }
    })

 export default upload