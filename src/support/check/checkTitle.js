/**
 * Check the title of the current browser window
 * @param  {Type}     falseCase     Whether to check if the title matches the
 *                                  expected value or not
 * @param  {Type}     expectedTitle The expected title
 */
module.exports = (falseCase, expectedTitle) => {
    /**
     * The title of the current browser window
     * @type {String}
     */
  
    if (falseCase) {
        browser.waitUntil(function () {
            return browser.getTitle() !== expectedTitle
          }, 5000, 'expected text to be different after 5s');
        const title = browser.getTitle();
        expect(title).to.not
            .equal(
                expectedTitle,
                `Expected title not to be "${expectedTitle}"`
            );
    } else {
        browser.waitUntil(function () {
            return browser.getTitle() === expectedTitle
          }, 5000, 'expected text to be different after 5s');
        const title = browser.getTitle();
        expect(title).to
            .equal(
                expectedTitle,
                `Expected title to be "${expectedTitle}" but found "${title}"`
            );
    }
};
