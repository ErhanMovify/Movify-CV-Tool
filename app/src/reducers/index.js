import {combineReducers} from 'redux'
import academicBackground from './academicBackground'

import basicInfo from './basicInfo'
import languages from './languages'
import miscellaneous from './miscellaneous'
import professionalExperiences from './professionalExperiences'
import skillsAndTrainings from './skillsAndTrainings'
import PDFGenerator from "./PDFGenerator";

export default combineReducers({
  basicInfo,
  professionalExperiences,
  miscellaneous,
  skillsAndTrainings,
  academicBackground,
  languages,
  PDFGenerator,
})
