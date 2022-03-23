// test01.spec.js created with Cypress
//
// Start writing your Cypress tests below!
// If you're unfamiliar with how Cypress works,
// check out the link below and learn how to write your first test:
// https://on.cypress.io/writing-first-test

describe('Basic Exploratory Test 1', () => {
  beforeEach(() => {
    cy.visit('https://www.award.co')
  })

it('displays two todo items by default', () => {
    cy.get('home-hero-text').should('have.length', 1)
    cy.get('home-hero-text').first().should('have.text', 'Employee Recognition That Truly Rewards')
    cy.get('home-hero-text').last().should('have.text', 'Employee Recognition That Truly Rewards')
  })