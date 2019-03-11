

let imdbdetails = document.getElementById("imdbdetails")
let moviesUL = document.getElementById("moviesUL")


let movieURL = "http://www.omdbapi.com/?s=batman&apikey=ece000c5"
let request = new XMLHttpRequest()
request.open("GET",movieURL)
request.send()

request.onload = function() {

    if(request.status != 200) {
      console.log("Server not found.")
    } else {
      console.log("Response Recieved")
      console.log(request.responseText)
      console.log(JSON.parse(request.responseText))
      let moviesResponse = JSON.parse(request.responseText)
      displayMovieDetails(moviesResponse)
    }
  }

  function displayMovieDetails(movie) {
  
    let movieLIItems = movie.Search.map(function(movie) {
      return `<li>
      <a href="#" onclick='displayIMDBDetails("${movie.imdbID}")'>${movie.Title}</a>


<div>
<img src=${movie.Poster}></img>
</div></li>`
    })
    
    
    moviesUL.innerHTML = movieLIItems.join('')
  
  }

function displayIMDBDetails(IMDB){
    let request2 = new XMLHttpRequest()
    let imdblink = "http://www.omdbapi.com/?i=" + IMDB + "&apikey=ece000c5"
    console.log(imdblink)
    request2.open("GET",imdblink)
    request2.send()
    request2.onload = function() {
    let movieResponse = JSON.parse(request2.responseText)
    console.log(movieResponse)
    let movieIMDBlist = `<div><h1>${movieResponse.Director}</h1>

                </div>`
    
    //http://www.omdbapi.com/?i=${movie.imdbID}&apikey=ece000c5
    imdbdetails.innerHTML = movieIMDBlist
    }
}

// let moviesItemsLI = movies.map(function(movie){
//     return `<li><a href="#" onclick='displayMovieDetails("${movie.imdbID")'>${movie.Title}</a></li>`
//     })
//     moviesListUL.innerHTML = moviesItemsLI.join('')
//     }

//     function displayMovieDetails(imdbID){}
