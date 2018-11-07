/**
 * just wait for defined seconds
 * @param {Int} sec   is the wait seconds 
 */

module.exports = (sec) => {
  browser.pause(parseInt(sec, 10)*1000);
}