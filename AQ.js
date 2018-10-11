const baseURL = 'https://api.openaq.org/v1/locations';
let url;

function searchToggle(obj, evt){
    var container = $(obj).closest('.search-wrapper');
        if(!container.hasClass('active')){
            container.addClass('active');
            evt.preventDefault();
        }
        else if(container.hasClass('active') && $(obj).closest('.input-holder').length == 0){
            container.removeClass('active');
            // clear input
            container.find('.search-input').val('');
        }
}

const searchTerm = document.querySelector('.search-input');
const searchForm = document.querySelector('form');
const section = document.querySelector('section');

searchForm.addEventListener('submit',fetchResults);
function fetchResults(e) {
    // console.log('hi george');
    e.preventDefault();
    url =`${baseURL}/?location=${searchTerm.value}`; 
    console.log('URL:',url);

    fetch(url)
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
    console.log(json.results["0"].country)
    console.log(json.results["0"].count)
    console.log(json.results["0"].parameters)

let para1 = document.createElement('p');
       para1.setAttribute("class", "loction");
   let para2 = document.createElement('p');
       para2.setAttribute("class", "country");
   let para3 = document.createElement('p');
       para3.setAttribute("class", "count");    
    let para4 = document.createElement('p');
       para4.setAttribute("class", "parameters");

   para1.innerText = json.results["0"].location;
   para2.innerText = json.results["0"].country;
   para3.innerText = json.results["0"].count;
   para4.innerText = json.results["0"].parameters;


   section.appendChild(para1);
   section.appendChild(para2);
   section.appendChild(para3);
   section.appendChild(para4);
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