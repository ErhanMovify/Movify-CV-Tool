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

    return dbx.filesUpload({ path: file.path, contents: file.data, mode: 'add', autorename: true });
}

module.exports = {
    /**
     * Uploads file to Dropbox
     * @param doc document to upload
     * @param data CV data object used to generate file name
     * @returns error if there is one at uploading, false otherwise
     */
    async uploadDocToDropbox(doc, data) {
        const accessToken = process.env.NODE_APP_DROPBOX_ACCESS_TOKEN;
        // static id for the dropbox folder
        const folderId = 'id:m41NXAS4SBAAAAAAAACR7w';

        const filePath = `${folderId}/${getFileName(data)}`;

        try {
            await uploadFile({ data: doc, path: filePath }, accessToken);
        } catch(error) {
            console.error(error.error);
            return error;
        }
        return false;
    }
};