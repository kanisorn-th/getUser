
import {data} from "../../fixtures/common/data.json"
import {statusCode} from "../../fixtures/common/statusCode.json"

describe('Get user profile success', () => {
    it('To verify get user profile api will return correct data when trying to get profile of existing user', () => {
      cy.request({
        method: 'GET',
        url: 'https://reqres.in/api/users/12',
      })
        .then((response) => {
          expect(response.status).to.equal(statusCode.success);
  
          // Assert response body structure and data
          expect(response.body).to.have.property('data');
          expect(response.body.data).to.have.property('id').and.to.equal(data.id);
          expect(response.body.data).to.have.property('email').and.to.equal(data.email);
          expect(response.body.data).to.have.property('first_name').and.to.equal(data.firstName);
          expect(response.body.data).to.have.property('last_name').and.to.equal(data.lastName);
          expect(response.body.data).to.have.property('avatar').and.to.equal(data.avatar);
        });
    });
})

describe('Get user profile success', () => { 
    it('should return 404 for non-existent user (not found)', () => {
      cy.request({
        method: 'GET',
        url: 'https://reqres.in/api/users/1234', 
        failOnStatusCode: false
      })
        .then(response => {
          expect(response.status).to.equal(statusCode.error) 
          expect(response.body).to.be.empty; 
        })
    });
});

