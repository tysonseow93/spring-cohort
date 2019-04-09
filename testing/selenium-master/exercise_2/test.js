var webdriver = require('selenium-webdriver'),
	By = webdriver.By,
	until = webdriver.until;

var driver = new webdriver.Builder()
	.forBrowser('chrome')
	.build();

driver.get('https://loghen41.github.io');

// Review the selenium webdriver API to find out how to access the 'fullInput' element:
driver.findElement(By.className('fullInput'));
// http://seleniumhq.github.io/selenium/docs/api/javascript/module/selenium-webdriver/index_exports_WebDriver.html
// As a hint, check out the findElement method

driver.quit();
