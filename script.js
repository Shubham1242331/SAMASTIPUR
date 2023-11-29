function showImage() {
    var imageContainer = document.getElementById("imageContainer");
    // Change the image source URL to your desired image
    var imageUrl = "https://1drv.ms/i/s!AtNk2rR75tim4jbK79_lwk-ViTdl?e=BQKf3h";
    
    // Create an image element
    var img = document.createElement("img");
    img.src = imageUrl;
    
    // Clear previous content in the imageContainer
    imageContainer.innerHTML = "";
    
    // Append the image to the container
    imageContainer.appendChild(img);
}
