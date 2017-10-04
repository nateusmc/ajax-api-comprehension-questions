'use strict';

const gistEndpointUrl = 'https://api.github.com/gists/public';

$('button').on('click', function() {
  $.getJSON(gistEndpointUrl,  function() {
    return gistEndpointUrl[0].html_url;
  });
});