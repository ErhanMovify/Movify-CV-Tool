export const formatLanguages = languages => languages.map(
  language => ({ ...language, hasLanguage: language.level !== 'None' }),
);

export default formatLanguages;
