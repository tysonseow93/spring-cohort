var webdriver = require('selenium-webdriver'),
	By = webdriver.By,
	until = webdriver.until;

var driver = new webdriver.Builder()
	.forBrowser('chrome')
	.build();

driver.get('https://loghen41.github.io');

// Good job using the sendKeys method, but did you notice how quickly the browser closed after you completed your command?
// Try finding a way to make the browser stay open for 2000 ms, so you can manually verify that the text is on the page.
// Hint, check out the Webdriver class again and see what you can use there.

driver.findElement(By.className('fullInput')).sendKeys('Write some Code');

driver.sleep(2000);
driver.quit();