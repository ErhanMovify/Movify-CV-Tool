const Dropbox = require('dropbox').Dropbox;
require('es6-promise').polyfill();
require('isomorphic-fetch');

const getFileName = data => {
    const date = new Date().toISOString().slice(0, 10).replace(/-/g, '');
    // Naming convention: CV Movify - Firstname Lastname - YYYYMMDD - Position
    return `CV Movify - ${data.firstName} ${data.lastName} - ${date} - ${data.position}.docx`;     
}

const uploadFile = (file, accessToken) => {
    var dbx = new Dropbox({ accessToken , fetch });

    dbx.filesUpload({ path: file.path, contents: file.data, mode: 'add', autorename: true })
    .then(response => console.log(response))
    .catch(error => console.error(error.error));
}

module.exports = {
    uploadDocToDropbox(doc, data) {
        const accessToken = process.env.NODE_APP_DROPBOX_ACCESS_TOKEN;
        const folderId = 'id:m41NXAS4SBAAAAAAAACR7w';
        const filePath = `${folderId}/${getFileName(data)}`;
        
        uploadFile({ data: doc, path: filePath }, accessToken);
    }
};