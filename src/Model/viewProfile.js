export const image = (selectImage, imagePreview) => {
    let archive = selectImage.files;
    if (!archive || !archive.length) {
        imagePreview.src = "";
        return
    }
    const firstArchive = archive[0];
    const objectUrl = URL.createObjectURL(firstArchive);
    imagePreview.src = objectUrl;
};