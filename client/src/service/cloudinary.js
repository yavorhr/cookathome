export const uploadCloudinary = async (file) => {
    const data = new FormData();
    data.append("file", file)
    data.append("upload_preset", "hristoy");
    data.append("folder", "Cook at home")

    const resp = await fetch("https://api.cloudinary.com/v1_1/yavorhr/image/upload", {
        method: "POST",
        body: data
    })
    const result = await resp;
    return { url: result?.secure_url }
}