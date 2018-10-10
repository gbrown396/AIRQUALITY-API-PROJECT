const baseURL = 'https://api.openaq.org/v1/locations';
let url;

const searchTerm = document.querySelector('.search');
const searchForm = document.querySelector('form');
const section = document.querySelector('section');

searchForm.addEventListener('submit',fetchResults);
function fetchResults(e) {
    // console.log('hi george');
    e.preventDefault();
    url =`${baseURL}/?location=${searchTerm.value}`; 
    console.log('URL:',url);

    fetch(baseURL)
    .then(function(result){
    //  console.log(result)
     return result.json();   
    })
    .then(function(json){
        console.log(json);
        displayResults(json);
    })
}

function displayResults(json){
    while (section.firstChild) {
        section.removeChild(section.firstChild);
    } console.log(json);
    console.log(json.results["0"].location);
    console.log(json.results["0"].city)
    console.log(json.results["0"].count)
    console.log(json.results["0"].parameters)
} 
    // section.appendChild();



// const getPosts =() => {
//     return fetch(url)
//     .then(res => res.json())
//     .then(posts => console.log(posts))
// }

// const post ={
//     title:""
//     body
// }

// const newPost = post => {
//     cosnt options = {
//         method: 'POST',
//         body: JSON.stringify(post),
//         headers: new Headers({
//             'Content-Type': ''
//         })
//         }

//         return fetch(url, options)
//         .then(res => res.json())
//         .then(res => console.log(res))
//         .catch(error => console.error(`Error: ${error}`))
// }