describe('sample', () => {
  it('Does not do much!', () => {
    cy.visit('/')

    cy.get('select').select('zh-TW')

    cy.get('select + p').should('contain.text', '你好，i18n。')
  })
})
