function search_users() {
  // Declare variables
  var input, filter, table, tr, td, i, txtValue;
  input = document.getElementById("searchbar");
  filter = input.value.toUpperCase();
  table = document.getElementById("myTable");
  tr = table.getElementsByTagName("tr");

  // Loop through all table rows, and hide those who don't match the search query
  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[1];
    if (td) {
      txtValue = td.textContent || td.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    }
  }
}


$(document).ready(function () {
    $.getJSON("https://jsonplaceholder.typicode.com/users",
    function (json) {
        var tr;
        for (var i = 0; i < json.length; i++) {
            tr = $('<tr/>');
            tr.append("<td>" + json[i].id + "</td>");
            tr.append("<td>" + json[i].name + "</td>");
            tr.append("<td>" + json[i].username + "</td>");
			tr.append("<td>" + json[i].email + "</td>");
			tr.append("<td>" + json[i].address.street + "<br >" + json[i].address.suite + "<br >" + json[i].address.city + "<br >" + json[i].address.zipcode + "<br >" + json[i].address.geo.lat + "<br >" + json[i].address.geo.lng + "</td>");
			tr.append("<td>" + json[i].phone + "</td>");
			tr.append("<td>" + json[i].website + "</td>");
			tr.append("<td>" + json[i].company.name + "<br >" + json[i].company.catchPhrase + "<br >" + json[i].company.bs +"</td>");
			tr.append("<td>" + "<a href='index2.html?q=" + json[i].id + "'" + "target='_blank'> View </a>" + "</td>");
            $('.userTable').append(tr);
        }
    });
});


$(document).ready(function () {
	const urlParams = new URLSearchParams(window.location.search);
	const myParam = urlParams.get('q');
    $.getJSON("https://jsonplaceholder.typicode.com/posts?userId=" + myParam,
    function (json) {
        var tr;
        for (var i = 0; i < json.length; i++) { 
            tr = $('<tr/>');
            tr.append("<td>" + json[i].id + "</td>");
            tr.append("<td>" + json[i].title + "</td>");
            tr.append("<td>" + json[i].body + "</td>");
            $('.viewPostTable').append(tr);
        }
    });
});