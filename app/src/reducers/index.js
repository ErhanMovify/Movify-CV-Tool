import {combineReducers} from 'redux'
import academicBackground from './academicBackground'

import basicInfo from './basicInfo'
import languages from './languages'
import miscellaneous from './miscellaneous'
import professionalExperiences from './professionalExperiences'
import skillsAndTrainings from './skillsAndTrainings'

export default combineReducers({
  basicInfo,
  professionalExperiences,
  miscellaneous,
  skillsAndTrainings,
  academicBackground,
  languages,
})
