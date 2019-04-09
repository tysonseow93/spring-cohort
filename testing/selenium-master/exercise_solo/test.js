var webdriver = require('selenium-webdriver'),
	By = webdriver.By,
	until = webdriver.until;

var driver = new webdriver.Builder()
	.forBrowser('chrome')
	.build();

driver.get('https://loghen41.github.io');

/*  OK, you've mastered the basics of Webdiver. Now let's get into some harder processes.
		From here on in, the next exercises will not have finished code for you to reference
		For the next 10 minutes Try completely automating the following Quality Assurance Test
		(The beginning steps are what we just finished):

		1. Access the To Do app at "https://loghen41.github.io"
		2. Start creating a new list called "Write some Code" in the input box
		3. Before submitting the text, confirm that the input field is properly displaying text
		4. Create the new List by clicking the "Add List" Button
		5. Confirm that the new list has been created
		6. Create two more lists with different names
		6. Mark the very first list on the page as complete
		7. Clear all of the completed lists from the page
*/

var sampleText = "Write some Code";
driver.findElement(By.className('fullInput')).sendKeys(sampleText);
driver.findElement(By.className('fullInput')).getAttribute('value')
	.then(function(text) {
		if (text === sampleText) {
			console.log(text);
		}
	});

driver.quit();
