$.get("videos?page=1", (data) => {
    data.response.map((video) => {
        console.log(video)
        $("#video-gallery")
        .append(`<center><a href="player/${video.fileName}"> <img src="${video.thumbnail}" height="100" width="100" > <br>${video.title} <br></a></center>`)
    });
});