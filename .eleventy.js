module.exports = (config) => {
  config.addPassthroughCopy({ 'public': './' })
  config.setBrowserSyncConfig({
    files: ['dist/**/*'],
    open: true,
    // Tweak for Turbolinks & Browserstack Compatibility
    snippetOptions: {
      rule: {
        match: /<\/head>/i,
        fn: function (snippet, match) {
          return snippet + match;
        }
      }
    }
  })
  config.setDataDeepMerge(true)

  return {
    dir: {
      input: 'src',
      output: 'dist',
    },
    markdownTemplateEngine: 'njk',
  }
}
