$(document).ready(function () {
    $('#zoekBalkHeader').keyup(function () {
      $('#result').html('');
      var searchField = $('#seach').val();
      var expression = new RegExp(searchField, "i");
      var firstLetters = expression.toString().substring(1,3);
      
      $.getJSON('data.json', function (data) {
        $.each(data, function (key, value) {
        //   for(i = 0; i < 6; i++){
          if (value.name.search(expression) == firstLetters) {
            $('#result').append(
              '<li class="list-group-item">'+
              '<div class="container">'+
                '<div class="row">' + 
                  '<a href="#">'+
                  '<div class="col">'+
                      '<img src="' +
                        value.afbeelding +
                        '" height="100" width="100" class="img-thumbnail" />'+
                  '</div>'+
                    '<div class="col">' +
                    value.name + 
                  '</a>'+
                  '</div>'+
                  '<div class="row">'+
                    '<span class="text-muted">' 
                      + value.beschrijving + 
                    '</span>'+
                 '</div>'+
              '</div>'+
              '</li>'
            );
            console.log($('#search').toString());
          }
        //   if ($('#search').toString().val() == null) {
        //     $('#resultContainer').hide();
        //   } else {
        //     $('#resultContainer').show();
        //   }
        });
        // console.log($('#search').val().length);
      })
    })
  });