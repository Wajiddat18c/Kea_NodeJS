$.get("videos", (data) => {
    data.response.map((video) => {
        $("#video-gallery")
        .append(`<a href="player${video.path}">${video.title}</a>`)
    });
});