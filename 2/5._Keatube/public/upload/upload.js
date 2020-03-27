function validateForm(){
    



    return true;
}

function handleFileUpload(file){
    const files = file[0];

    const fileSize = files.size;
    const mimeArray = file.type.split("/")
    const fileType = mimeArray[0];

    console.log("type", fileType)
    console.log("SIZE", fileSize)
}