var fs = require('fs'),
    markdown = require( "markdown" ).markdown;;

fs.readFile('data.txt', 'utf8', function (err,data) {

    if (err) {
        return console.log(err);
    }


    var start = new RegExp('<p>-- start --</p>', 'g');
    var end = new RegExp('<p>-- end --</p>', 'g');

    var result = markdown.toHTML(data);
    result = result.replace(start, '<div>');
    result = result.replace(end, '</div>');

    console.log(result);



    fs.writeFile('data.html', result, 'utf8', function (err) {
        if (err) return console.log(err);
    });

});