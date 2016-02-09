$(document).ready(function() {
  $.ajax({
    type: "GET",
    url: "https://api.github.com/users/moriz23/repos",
    success: function(repos){
      for(var i = 0; i < repos.length; i++) {
        var newRepoUrl = buildListUrl(repos[i])
        $(".list-group").append(newRepoUrl);
      }
    },
    error: function(jqXHR, textStatus, errorThrown){
      alert("Something went wrong");
    }
  });

  function buildListUrl(repoData) {
    var commitsApiUrl = "https://api.github.com/repos/";
    commitsApiUrl += repoData.owner.login + "/";
    commitsApiUrl += repoData.name + "/commits";

    var newLink = $("<a>")
      .attr("href", commitsApiUrl)
      .addClass("list-group-item")
      .append(repoData.full_name);
    return newLink;
  }
});