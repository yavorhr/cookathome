export const uploadCloudinary = async (file) => {
    const formData = new FormData();
    formData.append("file", file)
    formData.append("upload_preset", "hristoy");
    formData.append("folder", "Cook at home")

    const resp =  await fetch("https://api.cloudinary.com/v1_1/yavorhr/image/upload", {
        method: "POST",
        body: formData
    });

    const result = await resp.json();

    return { url: result?.secure_url }
}