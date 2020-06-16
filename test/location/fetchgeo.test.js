describe('fetch location test', () => {
    it('should get lat and loc from fetchLocation', (done) => {
        const onSuccess = (location) => {
            expect(location).to.have.property('lat');
            expect(location).to.have.property('loc');
            done();
        };

        const onError = (error) => {
            throw 'not expected';
        };

        // this.timeout(10000);

        fetchLocation(onSuccess, onError);
    });
});