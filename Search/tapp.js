function renderMovies(movie_list) {
  movie_list.sort(function(a, b) {
    return b.revenue - a.revenue;
  });
  var tbody = document.querySelector(".movies tbody");
  tbody.textContent = "";
  for (var idx = 0; idx < movie_list.length; idx++) {
    var movie = movie_list[idx];
    tbody.appendChild(renderMovie(movie));
  }
}

function renderMovie(movie) {
  var tr = document.createElement("tr");
  tr.appendChild(renderMovieProp(movie.title, true, movie.link));
  // tr.appendChild(renderMovieProp(movie.title, true));
  tr.appendChild(renderMovieProp(movie.composer));
  tr.appendChild(renderMovieProp(movie.date));
  return tr;
}

function renderMovieProp(content, nonNumeric, link) {
  // tr.appendChild(renderMovieProp(score.title, true, score.link));
  var td = document.createElement("td");
  // td.textContent = content;
  // if ((nonNumeric = true)) {
  //   td.classList.add("non-numeric");
  // }
  if (link) {
    var a = document.createElement("a");

    a.href = link;

    a.textContent = content;
    td.appendChild(a);
  } else {
    td.textContent = content;
  }

  return td;
}

var input = document.getElementById("movie-filter");

function isMovieFound(movie) {
  var userInput = input.value;
  var lowercase = userInput.toLowerCase();
  var lowerTitle = movie.title.toLowerCase();
  if (lowerTitle.indexOf(lowercase) >= 0) {
    return true;
  } else {
    return false;
  }
  return true;
}

input.addEventListener("input", function() {
  var filtered_movies = SCORES.filter(isMovieFound);
  renderMovies(filtered_movies);
});
