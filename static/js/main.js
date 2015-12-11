$(document).ready(function() {

  $.get('data/example.json', function(data) {

    // Example 1.1
    var $inputor = $('#example-1-1').atwho({
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

    // Example 1.2
    var $inputor = $('#example-1-2').atwho({
      at: "",
      highlightFirst: false,
      minLen: 3,
      maxLen: 300,
      insertTpl: "${name}",
      suffix: "",
      startWithSpace: false,
      limit: 10,
      data: data.data
    });

    // Example 1.3
    var $inputor = $('#example-1-3').atwho({
      at: "",
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
