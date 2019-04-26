const JSZip = require('jszip');
const Docxtemplater = require('docxtemplater');
const fs = require('fs');
const path = require('path');
const expressions = require('angular-expressions');

expressions.filters.split = function (input, s) {
  return input.split(s);
};

const angularParser = function (tag) {
  if (tag === '.') {
    return {
      get: function (s) {
        return s;
      }
    };
  }
  return {
    get: expressions.compile(tag)
  };
};

const regex = /\\u00(0[0-8]|0B|0b|0C|0c|0E|0e|0F|0f|1[0-9a-fA-F])/

const escape = (value) => value.replace(regex, "")

const TEMPLATE_FILE_PATH = path.resolve(__dirname, 'resources', 'template.docx');
const TEMPLATE_FILE_TYPE = 'binary';

module.exports = {
  generateCVFromData(DATA) {
  
    const escapedData = JSON.parse(escape(JSON.stringify(DATA)));

//Load the docx file as a binary
    const content = fs.readFileSync(TEMPLATE_FILE_PATH, TEMPLATE_FILE_TYPE);

    const zip = new JSZip(content);

    const doc = new Docxtemplater();
    doc.loadZip(zip);
    doc.setOptions({parser: angularParser})

  //set the templateVariables
    doc.setData(escapedData);

    try {
      // render the document (replace all occurences of {first_name} by John, {last_name} by Doe, ...)
      doc.render()
    }
    catch (error) {
      const e = {
        message: error.message,
        name: error.name,
        stack: error.stack,
        properties: error.properties,
      }
      console.log(JSON.stringify({error: e}));
      // The error thrown here contains additional information when logged with JSON.stringify (it contains a property object).
      throw error;
    }

    return doc.getZip().generate({type: 'nodebuffer'});
  }
};
