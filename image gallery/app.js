// let images = [product-1,product-2,product-3,product-4]

let removeImg = document.querySelector('.delete');
let smallImg = document.querySelectorAll('.images img')
let imgOverlay = document.querySelector('#imgBox')
let fullImage = document.querySelector('#imgBox img')
console.log(fullImage)

smallImg.forEach(function(image){
    image.addEventListener('click', function(){
        imgOverlay.style.display = 'flex';
        fullImage.src = this.src

    })

})



removeImg.addEventListener('click', function(){
    imgOverlay.style.display = "none"
})

