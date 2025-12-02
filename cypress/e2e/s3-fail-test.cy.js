describe('S3 SSL Fail Test', () => {
	it('Requests the S3 bucket URL with SSL issues', () => {
		cy.request({
			method: 'GET',
			url: 'https://cypress-docker-demo-asset.s3.ap-southeast-2.amazonaws.com/chevron-black-right.svg',
		}).then((response) => {
			expect(response.status).to.eq(200);
		});
	});
});
