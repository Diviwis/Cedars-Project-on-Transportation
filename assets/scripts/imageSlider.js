
var i = 0
var images = []
var time = 2500

images[0] = '../images/destinations/image1.jpg'
images[1] = '../images/destinations/image2.jpg'
images[2] = '../images/destinations/image3.jpg'
images[3] = '../images/destinations/image4.jpg'
images[4] = '../images/destinations/image5.jpg'
images[5] = '../images/destinations/image6.jpg'

changeImages()

function changeImages() {
    document.slides.src = images[i];

    if (i < images.length - 1) {
        i++;
    }

    else {
        i = 0
    }

    setTimeout(changeImages(), time);

}

window.onload(changeImages())
