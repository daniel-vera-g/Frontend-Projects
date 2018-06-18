$(document).ready(() => {
	// handle the search query
	$("#searchInput").click(() => {
    //get the search request
    var searchTerm = $('#searchTerm').val();
    //set up the full api
    var url = "https://en.wikipedia.org/w/api.php?action=opensearch&search="+ searchTerm +"&format=json&callback=?";

    //make an ajax reauest
    $.ajax({
      type:"GET",
      url: url,
      async:false,
      dataType:"json",
      success: function (data) {
        //for loop to loop through the results of the query
        for(var i = 0; i < data[1].length;i++){
          $("#searchResults").prepend("<li><a href="+data[3][i]+">"+data[1][i]+"</a><p>"+data[2][i]+"</p></li>");
        }
      },
      error:function (errorMessage) {
        alert("There was an error");
      }


    });
  });
});
