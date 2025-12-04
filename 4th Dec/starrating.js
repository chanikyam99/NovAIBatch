let stars = document.querySelectorAll('.star')

let ratingDisplay = document.querySelector('#rating')
// console.log(stars)

// for(let i = 0; i < stars.length; i++) {

// }

// forEach.

stars.forEach(function(star) {
    star.addEventListener('click', function() {
        let value = star.getAttribute('data-value') // 3
        console.log(value) //3

        //Go to starts from value 1 to 3, and make them filled.
        updateStarRating(value)

        ratingDisplay.innerText = value
    })
})

function updateStarRating(value) {
    stars.forEach(function(star) {
        let starValue = star.getAttribute('data-value')

        star.classList.toggle('filled', starValue <= value)
    })
}