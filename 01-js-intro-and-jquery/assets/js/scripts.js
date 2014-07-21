$().ready( function(){

  $('.section_form').fadeIn('slow', function() {
    $('.alias').focus();
  });

  $('.btn').on('click',function(){
    // set vars
    var url = "http://bootcamp.aws.af.cm/welcome/";
    // read text in the box
    if ( $('.alias').val() !== '' ) {
      url = url + $('.alias').val();
    } else {
      url = url + 'tunombre';
    }
    // get response
    $.ajax({
      type:'post',
      url: url,
      // on complete request
      complete: function(resp) {
        // show response
        $('.response').html(resp.responseJSON.response);
        // stylize response
        var txtHighlighted = highlight(resp.responseJSON.response);
        $('.response').html(txtHighlighted);
      },
      // on request error
      error: function (xhr, ajaxOptions, thrownError) {
        $('.response').html(xhr.statusText);
        $('.response').css('color','red');
      }
    });
  });

  // get jsonp
  $.ajax({
      url: "http://tweetproxy.ap01.aws.af.cm/search",
      jsonp: "callback",
      dataType: "jsonp",
      data: {
          q: "html5"
      },
      success: function( response ) {
          // console.log( response );
          $.each( response.statuses, function( i, item ) {
            $('.tweets').append(
              '<div class="tweet">'+
                item.user.name +
                '<p>' + item.text + '</p>' +
                item.created_at +
                '<img src="'+item.user.profile_image_url+'">' +
               '</div>'
              );
          });
      }
  });

  // stylize name
  function highlight (text) {
    var parsed = text.split(' ');
    return parsed[0] + ' <span class="highlight">' + parsed[1] + '<span>';
  }

});