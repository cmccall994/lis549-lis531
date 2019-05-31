function renderComps(scores_list) {
  scores_list.sort();
  var tbody = document.querySelector(".scores tbody");
  tbody.textContent = "";
  for (var idx = 0; idx < scores_list.length; idx++) {
    var score = scores_list[idx];
    tbody.appendChild(renderComps(score));
  }
}

function renderComp(score) {
  var tr = document.createElement("tr");
  tr.appendChild(renderCompProp(score.composer, true));
  //   tr.appendChild(renderMovieProp(movie.revenue));
  //   tr.appendChild(renderMovieProp(movie.rating));
  return tr;
}

function renderCompProp(content, nonNumeric) {
  var td = document.createElement("td");
  td.textContent = content;
  if ((nonNumeric = true)) {
    td.classList.add("non-numeric");
  }
  return td;
}

var input = document.getElementById("movie-filter");

function isScoreFound(score) {
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
  var filtered_scores = SCORES.filter(isScoreFound);
  renderMovies(filtered_scores);
});
