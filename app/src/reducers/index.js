import {combineReducers} from 'redux'

import basicInfo from './basicInfo'
import miscellaneous from './miscellaneous'
import professionalExperiences from './professionalExperiences'
import skillsAndTrainings from './skillsAndTrainings'

export default combineReducers({
  basicInfo,
  professionalExperiences,
  miscellaneous,
  skillsAndTrainings
})
