var fs = require('fs');
var parser = require('xml2json');

exports.readFile = function(file) {
    var xml = fs.readFileSync('dumplist/' + file + '.xml', 'utf8');
    var json = parser.toJson(xml);
    return json;
}
