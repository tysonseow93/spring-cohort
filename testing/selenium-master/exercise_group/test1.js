var webdriver = require('selenium-webdriver'),
	By = webdriver.By,
	until = webdriver.until;

var driver = new webdriver.Builder()
	.forBrowser('chrome')
	.build();

driver.get('https://loghen41.github.io');

/*  You have 45 minutes to complete all three of these tasks as a group
		Group Exercise 1:

		1. Access the To Do app at "https://loghen41.github.io"
		2. Click on the "About" link
		3. Confirm you are on the about page
		4. Click on the "Settings" link
		5. Change the app Settings to a different Background style and language
		6. Change the app settings back to the original background of bamboo and language of English
*/
driver.sleep(3000);
driver.findElement(By.xpath('//*[@id="footer"]/a[2]')).click();
driver.sleep(1000);
driver.findElement(By.className('headerText')).getText().then(function (text) {
    if(text === 'About'){
        console.log('you visited the about page');
    }
});
driver.findElement(By.xpath('//*[@id="footer"]/a[3]')).click();
driver.sleep(1000);
driver.findElement(By.className('headerText')).getText().then(function (text) {
    if(text === 'App Settings'){
        console.log('you visited the settings page');
    }
});
driver.sleep(1000);
driver.findElement(By.xpath('//*[@id="settingsComponent"]/div[2]/select[1]')).click();
driver.sleep(1000);
driver.findElement(By.xpath('//*[@id="settingsComponent"]/div[2]/select[1]/option[3]')).click();
driver.sleep(1000);
driver.findElement(By.xpath('//*[@id="settingsComponent"]/div[2]/select[2]')).click();
driver.sleep(1000);
driver.findElement(By.xpath('//*[@id="settingsComponent"]/div[2]/select[2]/option[3]')).click();
driver.sleep(1000);
driver.findElement(By.xpath('//*[@id="settingsComponent"]/div[2]/div/button')).click();
driver.sleep(1000);
driver.findElement(By.xpath('//*[@id="settingsComponent"]/div[2]/select[1]')).click();
driver.sleep(1000);
driver.findElement(By.xpath('//*[@id="settingsComponent"]/div[2]/select[1]/option[2]')).click();
driver.sleep(1000);
driver.findElement(By.xpath('//*[@id="settingsComponent"]/div[2]/select[2]')).click();
driver.sleep(1000);
driver.findElement(By.xpath('//*[@id="settingsComponent"]/div[2]/select[2]/option[2]')).click();
driver.sleep(1000);
driver.findElement(By.xpath('//*[@id="settingsComponent"]/div[2]/div/button')).click();
driver.sleep(1000);

driver.quit();
