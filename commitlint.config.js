const Configuration = {
  extends: ['@commitlint/config-conventional'],

  /** Any rules defined here will override rules from
   *  @commitlint/config-conventional **/
  rules: {
    'body-max-length': [2, 'always', 120],
    'body-min-length': [2, 'always', 3],
    'footer-max-length': [0, 'always', Infinity],
    'footer-min-length': [0, 'always', 0],
    'header-max-length': [2, 'always', 120],
    'header-min-length': [2, 'always', 3],
    'scope-min-length': [2, 'always', 3],
    'subject-min-length': [2, 'always', 3],
  },
}

module.exports = Configuration
