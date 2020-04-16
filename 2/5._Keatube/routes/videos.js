const router = require("express").Router();

const crypto = require("crypto");



const multer  = require('multer')


const storage = multer.diskStorage({
    destination: (req, file, cb)=>{
        cb(null, "videos/")
    },
    filename: (req, file, cb) =>{
       
        const mimetypeArray = file.mimetype.split("/");

        if(mimetypeArray[0] === "video" || mimetypeArray[0] === "image"){
        const extension = mimetypeArray[mimetypeArray.length-1] 
        let random = crypto.randomBytes(18).toString("hex")

            cb(null, random + "." + extension);
        } else{
            cb("ERROR: The file is not a video")
            console.log(file)
            console.log(file.mimetype)
            console.log(mimetypeArray)
        }
    } 
});
   

  const upload = multer({ storage: storage });

  

//what {key: value}
const videos = [
    {
        title: "Beach",
        thumbnail: "beach.png",
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

router.post("/videos", upload.array('uploadedVideo'), (req, res) =>{


    const fileEx = req.files;


    const videoData = {
        title: req.body.title.trim(),
        description: req.body.description,
        fileName: fileEx[0].filename,
        thumbnail: fileEx[1].filename,
        uploadDate: new Date(),
        category: req.body.category,
        tags: req.body.tags.split(/\s*[,\s]\s*/)
        
    }
    console.log(videoData)
    


    if (videoData.title.length === 0 || videoData.title.length > 128) {
        return res.status(400).send({response: "Title can not be empty OR longer than 128 char"})
    }

    if (videoData.description.length > 2048) {
        return res.status(400).send({response: "Description can not be more than 2048 chars"})
    }

    const fileSizeLimit = 262144000;

    if(fileEx[0].filename.size > fileSizeLimit){
        return res.status(400).send({response: "Size must be less than 218mb"})

    }

    videos.push(videoData);

    
    //redirect to frontpage
    return res.redirect("/");
});

module.exports = router;    