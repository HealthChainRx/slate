const converter = require('widdershins');
const fs = require('fs');
const path = require('path');
const jsYaml = require('js-yaml');
const source = path.resolve('openapi') + '/portage.yaml';
const oasContent = fs.readFileSync(source, 'utf8').toString();
const apiObj = jsYaml.load(oasContent);
let options = {}; // defaults shown
options.codeSamples = true;
options.httpsnippet = false;
//options.language_tabs = [];
//options.language_clients = [];
// options.loadedFrom = sourceUrl; // only needed if input document is relative
//options.user_templates = './user_templates';
options.templateCallback = function(templateName, stage, data) {
  return data;
};
options.verbose = true
options.theme = 'darkula';
options.search = true;
options.sample = true; // set false by --raw
options.discovery = false;
options.includes = ['introduction', 'errors'];
options.shallowSchemas = false;
options.tocSummary = true;
options.headings = 2;
options.yaml = false;
options.resolve = true;
options.source = source;
converter.convert(apiObj, options, function(err, str) {
  if (err) return;
  fs.writeFile('./source/index.html.md', str, function(err) {
    if (err) return console.log(err);
    console.log('The file was saved!');
  });
});
