// get the modal
var modal = document.getElementById('myModal');
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
 
// binds click listeners to all .modal_image elements
// called on page load and again after dynamic content is injected
function bindModalImages() {
    var img = document.getElementsByClassName('modal_image');
    for (var i = 0; i < img.length; i++) {
        img[i].onclick = function() {
            modal.style.display = "block";
            modalImg.src = this.src;
            if (captionText) captionText.innerHTML = this.alt;
        }
    }
}
 
// run on initial page load
bindModalImages();
 
// close modal when clicking outside the image
window.onclick = (e) => {
    if (e.target == modal) {
        modal.style.display = "none";
    }
}
