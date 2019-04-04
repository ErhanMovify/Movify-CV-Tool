import axios from 'axios';
import fileDownload from 'js-file-download';
import { toast } from 'react-toastify';
import { formatLanguages } from '../utils/format';

const initialState = {
  isGeneratingPDF: false,
};

const STARTED_GENERATING_PDF = 'STARTED_GENERATING_PDF';
const FINISHED_GENERATING_PDF = 'FINISHED_GENERATING_PDF';

const PDFGenerator = (state = initialState, { type }) => {
  switch (type) {
    case STARTED_GENERATING_PDF:
      return {
        ...state,
        isGeneratingPDF: true,
      };
    case FINISHED_GENERATING_PDF:
      return {
        ...state,
        isGeneratingPDF: false,
      };
    default:
      return state;
  }
};

export default PDFGenerator;

export const generatePDF = () => (dispatch, getState) => {
  const state = getState();
  const formattedLanguages = formatLanguages(state.languages);
  dispatch({ type: STARTED_GENERATING_PDF });
  axios({
    method: 'post',
    url: '/generate',
    data: {
      ...state.basicInfo,
      experiences: state.professionalExperiences,
      miscellaneous: state.miscellaneous,
      skillsAndTrainings: state.skillsAndTrainings,
      academicBackgrounds: state.academicBackgrounds,
      languages: formattedLanguages,
      references: state.references,
    },
  }).then(
    (response) => {
      dispatch({ type: FINISHED_GENERATING_PDF });
      const docBuffer = Buffer.from(response.data.data.data);
      const date = new Date().toISOString().slice(0, 10).replace(/-/g, '');
      // Naming convention: CV Movify - Firstname Lastname - YYYYMMDD - Position
      fileDownload(docBuffer, `CV Movify - ${state.basicInfo.firstName} ${state.basicInfo.lastName} - ${date} - ${state.basicInfo.position}.docx`);
      if (response.data.dropboxError) {
        toast.error('An error ocurred while uploading to Dropbox. Please, try again later or send your generated CV to your Movify contact.');
      } else {
        toast.success('Your CV was successfully uploaded !');
      }
    },
  ).catch(
    (error) => {
      console.error('error', error);
      dispatch({ type: FINISHED_GENERATING_PDF });
      toast.error('An error ocurred. Please, try again later.');
    },
  );
};
