import JSZip from 'jszip';
import Docxtemplater from 'docxtemplater';
import fs from 'fs';
import path from 'path';

const TEMPLATE_FILE_PATH = path.resolve(__dirname, 'resources', 'template.docx');
const TEMPLATE_FILE_TYPE = 'binary';

export default {
  generateCVFromData(DATA) {

//Load the docx file as a binary
    const content = fs.readFileSync(TEMPLATE_FILE_PATH, TEMPLATE_FILE_TYPE);

    const zip = new JSZip(content);

    const doc = new Docxtemplater();
    doc.loadZip(zip);

  //set the templateVariables
    doc.setData(DATA);

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
