document.addEventListener('DOMContentLoaded', event => {
    console.log('Dom fully loaded')
})


console.log('%c HI', 'color: firebrick')
//chalenge 1
fetch("https://dog.ceo/api/breeds/image/random/4")
.then(resp => resp.json())
.then(data => {
    //console.log(data)
    grabImages(data.message)
})

const grabImages = (images) => {
    images.forEach(imageUrl => {
        let img = document.createElement('img')
        //console.log('test')
        document.getElementById('dog-image-container').append(img)
        img.src = imageUrl
    });
}

//challenge 2

function fetchDogsList() {
    
    fetch('https://dog.ceo/api/breeds/list/all')
    .then(resp => resp.json())
    .then(data => {
        let breeds = Object.keys(data.message)
        console.log(breeds)
        breeds.forEach(breed => {
            addBreedtoPage(breed)
        });

    })
}
fetchDogsList()


const addBreedtoPage = (breed) => {
    let li = document.createElement('li')
    let ul = document.getElementById('dog-breeds')
    li.innerText = breed
    ul.append(li)
    //challenge 3
    li.addEventListener('click', () => {
        if(li.classList.contains('active')){
            li.classList.remove('active');
            
        } else {
            li.classList.add('active')
            // li.style.color = 'red'
        }
    })
    
}

//challenge 4
let dropdown = document.getElementById('breed-dropdown')
dropdown.addEventListener('change', keyTyped)
function keyTyped(e) {
    let allBreedNames = document.querySelectorAll('li')
    let breedsArray = [...allBreedNames]
    chosenletter = e.target.value
    let filteredArray = breedsArray.filter(breed => {
        return chosenletter === breed.innerText[0]
    })
    console.log(filteredArray)
    for (i = 0; i < breedsArray.length; i++) {
        breedsArray[i].style.display = 'none';
    }
    for (i = 0; i < filteredArray.length; i++) {
        filteredArray[i].style.display = '';
     }      
    
}




