
var fs = require('fs');
var parser = require(__dirname + '/../../build/ivr-explain');

try {
  var result = parser.parse(fs.readFileSync(__dirname + '/../../test.ivr', 'utf8') + ' ', 'GOON');

  result.code.forEach(function(x) { console.log(x) });

  if (result.errors.length) {
    console.error("THERE ARE ERRORS:");
    result.errors.forEach(function(x) { console.error(x); });
  }
} catch(e) {
  console.error(e);
}