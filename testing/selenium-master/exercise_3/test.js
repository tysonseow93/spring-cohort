var webdriver = require('selenium-webdriver'),
	By = webdriver.By,
	until = webdriver.until;

var driver = new webdriver.Builder()
	.forBrowser('chrome')
	.build();

driver.get('https://loghen41.github.io');

// Augment the code you used in exercise_2 and find how to send a the following string to the 'fullInput' element: "Write some code"
// http://seleniumhq.github.io/selenium/docs/api/javascript/module/selenium-webdriver/index_exports_WebElement.html
// Hint, take a look at the sendKeys method

driver.findElement(By.className('fullInput')).sendKeys('Write some code');

driver.quit();
