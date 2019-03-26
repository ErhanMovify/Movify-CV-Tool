const Dropbox = require('dropbox').Dropbox;
require('es6-promise').polyfill();
require('isomorphic-fetch');

const sharedFolderPath = '/Movify Team Folder/Apply@Movify/';

const getFileName = data => {
    const date = new Date().toISOString().slice(0, 10).replace(/-/g, '');
    // Naming convention: CV Movify - Firstname Lastname - YYYYMMDD - Position
    return `CV Movify - ${data.firstName} ${data.lastName} - ${date} - ${data.position}.docx`;     
}


module.exports = {
    uploadDocToDropbox(doc, data) {
        const accessToken = process.env.REACT_APP_DROPBOX_ACCESS_TOKEN;
        var dbx = new Dropbox({ accessToken , fetch });

        dbx.filesUpload({ path: sharedFolderPath + getFileName(data), contents: doc, mode: 'add', autorename: true })
        .then(function(response) {
            console.log("response", response);
        })
        .catch(function(error) {
            console.error("error", error.error);
        });
    }
};