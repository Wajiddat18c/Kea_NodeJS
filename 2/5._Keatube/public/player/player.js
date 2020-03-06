const url = window.location.href;
let videoId = url.substring(url.lastIndexOf('/') + 1);
console.log("video id:", videoId)

const player = `<video width="1000" height="450" controls>
                <source src="/${videoId}" >
                 Your browser does not support the video tag.

                </video>`;

$("#player").append(player);