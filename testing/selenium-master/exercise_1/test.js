var webdriver = require('selenium-webdriver'),
	By = webdriver.By,
	until = webdriver.until;

var driver = new webdriver.Builder()
	.forBrowser('chrome')
	.build();


// Use the following command to get to the url that we want to access: driver.get('url');
driver.get('https://loghen41.github.io');

// Use the following command to have the driver terimnate at the end of the script: driver.quit();
driver.quit();