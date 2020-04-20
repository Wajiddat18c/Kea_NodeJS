

let fileValid = false;


function validateForm(){


    const title = document.forms.videoupload.title.value.trim();
    const description = document.forms.videoupload.description.value;
    const tags = document.forms.videoupload.tags.value;
    const category = document.forms.videoupload.category.value;
    
    const titleMaxLength = 128;

    if(title.length === 0 || title.length > titleMaxLength){
        // window.alert("sometext");
        swal("NOO!", "Please Give a Title!\nLess then 128 chars!", "error");
        return false
    }

    const descriptionMaxLength = 2048;
    if(description.length > descriptionMaxLength){
        swal("NOO!", "Please Give a Description!\nLess then 2048 chars!", "error");
        return false;
    }
    if (fileValid == false){
    const error = swal("NOO!", "Please Fill the Form!", "error");
    
    }
    return fileValid;
}
function handleFileUpload(files) {
    const file = files[0];
    
    const mimeTypeArray = file.type.split("/");

    if (mimeTypeArray[0] !== "video") {
        fileValid = false;
        return fasle;
    }

    const fileSize = file.size;

    const fileSizeLimit = 262144000;

    if (fileSize > fileSizeLimit) {
        fileValid = false;
        return false;
    }

    fileValid = true;
}

