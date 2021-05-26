    
      describe('Given the Config api', () => {
        context('When I send GET /config/app.t50.poc.com', () => {
          it('Then it should return a list with config data', () => {
            cy.request({
              method: 'GET',
              url: 'https://093ah5mufj.execute-api.ap-southeast-2.amazonaws.com/v1/config/app.t50poc.com'
            })
              .should((response) => {
                let jsonData = response.body  
                expect(response.status).to.eq(200)
                expect(jsonData.identity_pool_id).to.be.contains("ap-southeast-2:10976fc3-6e5b-4ed8-8882-06eb6dc85d7d");
                expect(jsonData.tenant).to.be.contains("app.t50poc.com");
                expect(jsonData.web_client_id).to.be.a("string");
                expect(jsonData.region).to.be.contains("ap-southeast-2");
                expect(jsonData.api_gatewayURL).to.be.a("string");
                expect(jsonData.s3_bank_files).to.be.a("string");
                expect(jsonData.pool_id).to.be.a("string");                
              });
          });
        });     
        
        context('When I send GET /globalconfig/super/list passing id query param', () => {
            it('Then it should return all the super config', () => {
              cy.request({
                method: 'GET',
                url: 'https://5nkdsa03ug.execute-api.ap-southeast-2.amazonaws.com/prod/globalconfig/super/list',
                headers: {
                    'Authorization': 'eyJraWQiOiJRWG9QdExYVXAzWWZIQ0ZIdDJQYmFqNGd3Ryt2UEExcHZFZDB2OHEyY00wPSIsImFsZyI6IlJTMjU2In0.eyJhdF9oYXNoIjoiLVN3YkhQdUwtbm44VExqS2JBc2ZJZyIsImN1c3RvbTpvcmdhbml6YXRpb24iOiJzcHJvY2tldHMiLCJzdWIiOiJiYWMwYmFmMC1jMGU0LTQyYTEtYjdhYS1kYWI1Mjk4NTc4OTYiLCJjb2duaXRvOmdyb3VwcyI6WyJTcHJvY2tldHMiLCJBdXJpb25TZXJ2aWNlQWRtaW5pc3RyYXRvciIsIkVtcGxveWVlIiwiUGF5QWRtaW5pc3RyYXRvcnMiXSwiZW1haWxfdmVyaWZpZWQiOnRydWUsImlzcyI6Imh0dHBzOlwvXC9jb2duaXRvLWlkcC5hcC1zb3V0aGVhc3QtMi5hbWF6b25hd3MuY29tXC9hcC1zb3V0aGVhc3QtMl9mc2E2QW9naFciLCJwaG9uZV9udW1iZXJfdmVyaWZpZWQiOnRydWUsImNvZ25pdG86dXNlcm5hbWUiOiJiYWMwYmFmMC1jMGU0LTQyYTEtYjdhYS1kYWI1Mjk4NTc4OTYiLCJnaXZlbl9uYW1lIjoiUGF0cmljaWEiLCJjb2duaXRvOnJvbGVzIjpbImFybjphd3M6aWFtOjo4NjU3NzU4MDgzMDM6cm9sZVwvU3Byb2NrZXQtUm9sZSIsImFybjphd3M6aWFtOjo4NjU3NzU4MDgzMDM6cm9sZVwvQURGUy1UNTBQT0MtRnVsbEFjY2VzcyJdLCJhdWQiOiI0cGV0aWptNWE2YTlmNXQxcTM4cGhtcGoyaCIsImV2ZW50X2lkIjoiNmZlMjk5YzUtYTM0Zi00MDI1LWE5MzYtNDM3M2FkZTA2NWI1IiwidG9rZW5fdXNlIjoiaWQiLCJhdXRoX3RpbWUiOjE2MjIwMDc1MzksIm5hbWUiOiJQYXRyaWNpYSBHcmVlbiIsInBob25lX251bWJlciI6Iis2MTQyMTMzOTAyMCIsImV4cCI6MTYyMjAxMTEzOSwiaWF0IjoxNjIyMDA3NTM5LCJmYW1pbHlfbmFtZSI6IkdyZWVuIiwiZW1haWwiOiJwYXRyaWNpYWdyZWVuQHQ1MHBvYy5jb20ifQ.pbEqKXvdTSYmtHq2Raz_9HQ31A7-1Q4YGkAZu_rYRqwKKxT3u1fDph02jjZOPDpOE36fWXsn6Bmpu8ewVpEbtch5_X2vZo-l5p7w7eWUCHnP4yPw4mlXZM99dfBWq9tSffC6Wl1pdCOcJ1oGj6Mb742dD8aKjKcLkDrV7HTHC7eMw2jAdEOWviGMgv3S9q8aw-wEIehHzyUe7WsTbuEUxXIoHrBfbioiXGBZ7fha4l4RkPzTm1TIlg5upOUvrzZGxjtmD6mv6YOWb1vIG7zmjbckou_AwYcCgtIzOvL_c9aZhn6OIccdmqN2nVh9gcy4TwIsNX20TXfENI1fGsQoZw'
                  }  
                })
                .should((response) => {
                  expect(response.status).to.eq(200)
                  expect(response.body.length).eql(7)
                  expect(response.body[0].startDate).eql(1593561600000); 
                });
            });
          });
      });