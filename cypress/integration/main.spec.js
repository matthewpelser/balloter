describe('Kitchen Sink', function () {
	it('.should() - assert that <title> is correct', function () {
		cy.visit('http://localhost:9000/');
  
		// Here we've made our first assertion using a '.should()' command.
		// An assertion is comprised of a chainer, subject, and optional value.
  
		// https://on.cypress.io/should
		// https://on.cypress.io/and
  
		// https://on.cypress.io/title
		cy.title().should('include', 'Angular');
		//   ↲               ↲            ↲
		// subject        chainer      value
	})
});
