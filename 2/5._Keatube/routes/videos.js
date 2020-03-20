const router = require("express").Router();
const uuid4 = require("uuid").v4;




//what {key: value}
const videos = [
    {
        id: "",
        title: "Beach",
        thumbnail: "",
        description: "Watch people running",
        path: "/f1a102ea-73a9-498e-a6fb-dbf3f1e49936.mp4",
        uploadDate: "",
        category: "Fitness",
        tags: ["run", "beach"]
    }
];


//get /videos
router.get("/videos", (req, res) => {
    return res.send({ response: videos })
});


router.get("/videos/:id", (req, res) => {
    const video = videos.find(video => video.id === Number(req.params.id));
    return res.send({ response: video });
});
// export routes
module.exports = router;