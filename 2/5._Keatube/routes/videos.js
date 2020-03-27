const router = require("express").Router();

const crypto = require("crypto");


const multer  = require('multer')
const storage = multer.diskStorage({
    destination: (req, file, cb)=>{
        cb(null, "videos/")
    },
    filename: (req, file, cb) =>{
       
        const mimetypeArray = file.mimetype.split("/");

        if(mimetypeArray[0] === "video"){
        const extension = mimetypeArray[mimetypeArray.length-1] 
        let random = crypto.randomBytes(18).toString("hex")

            cb(null, random + "." + extension);
        } else{
            cb("ERROR: The file is not a video")
        }
    } 
});
   

  const upload = multer({ storage: storage });

//what {key: value}
const videos = [
    {
        id: "",
        title: "Beach",
        thumbnail: "",
        description: "Watch people running",
        fileName: "f1a102ea-73a9-498e-a6fb-dbf3f1e49936.mp4",
        uploadDate: "",
        category: "Fitness",
        tags: ["run", "beach"]
    }
];



const videosPerPage = 12;

//get /videos
router.get("/videos", (req, res) => {

    const page = Number(req.query.page) ? Number(req.query.page) : 1;
    const start = (page - 1) * videosPerPage;
    const end = start + videosPerPage;
    
    return res.send({ response: videos.slice(start, end) });
});


router.get("/videos/:videoId", (req, res) => {
    // const video = videos.find(video => video.id === Number(req.params.id));
    return res.send({ response: videos.find(video => video.fileName === req.params.videoId) });
});

router.post("/videos", upload.single('uploadedVideo'), (req, res) =>{

    // console.log(req.file);
    return res.redirect("/");
})

// router.post("/test", (req, res)=>{
//     const text = req.body.textInput;
//     return res.send({response: text})
// });

module.exports = router;    