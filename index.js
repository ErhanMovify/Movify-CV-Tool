import JSZip from 'jszip';
import Docxtemplater from 'docxtemplater';
import fs from 'fs';
import path from 'path';

const TEMPLATE_FILE_PATH = path.resolve(__dirname, 'template.docx');
const TEMPLATE_FILE_TYPE = 'binary';
const OUTPUT_FILE_PATH = path.resolve(__dirname, 'output.docx');

const DATA  = {
  firstname: 'John',
  lastname: 'Doe',
  position: 'CV generator',
  description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque feugiat ipsum sed orci ornare mollis. Aliquam ac elit lectus. Duis est augue, pulvinar ut purus eu, varius vulputate nisi. Mauris pulvinar tellus a lorem vestibulum mattis nec in sem. Aliquam quis nibh nec odio luctus dictum eget pulvinar orci. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Praesent venenatis nibh quis consequat efficitur. Praesent id ultricies urna, non efficitur nulla. Sed ultricies diam at sagittis euismod. Vestibulum magna sapien, tristique et ultricies eu, aliquet ut dui. Morbi at pretium elit, a maximus dui. Etiam augue mauris, lacinia vitae sagittis et, consectetur a quam. Donec at porta sapien.

'Etiam ac viverra massa, consectetur rhoncus nibh. Interdum et malesuada fames ac ante ipsum primis in faucibus. Proin at sem porttitor tellus accumsan rutrum. Duis luctus sed lorem convallis posuere. Sed eget tempus dui. Aliquam pharetra magna nec elit malesuada dictum. Donec non nisl fermentum, accumsan turpis euismod, congue dui. Quisque sit amet tellus pellentesque, hendrerit justo vel, ullamcorper tortor.
`
};

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
  console.log(JSON.stringify({ error: e }));
  // The error thrown here contains additional information when logged with JSON.stringify (it contains a property object).
  throw error;
}

const buf = doc.getZip()
  .generate({ type: 'nodebuffer' });

// buf is a nodejs buffer, you can either write it to a file or do anything else with it.
fs.writeFileSync(OUTPUT_FILE_PATH, buf);