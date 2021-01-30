describe('quiz',  function () {
	describe('check response to button selection', function () {
		it('should return correct', function() {
            spyOn(window, 'alert');
            correctAlert();
			expect(window.alert).toHaveBeenCalledWith("Correct!");
        });
        it('should return incorrect', function() {
            spyOn(window, 'alert');
            incorrectAlert();
			expect(window.alert).toHaveBeenCalledWith("Incorrect!");
        });
});
});