$(document).ready(function() {

  $.get('data/example.json', function(data) {
    var $inputor = $('#example-1').atwho({
      at: "@",
      highlightFirst: false,
      minLen: 0,
      maxLen: 300,
      insertTpl: "${name}",
      suffix: "",
      startWithSpace: false,
      limit: 10,
      data: data.data
    });
  });
});
