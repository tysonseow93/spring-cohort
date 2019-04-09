var webdriver = require('selenium-webdriver'),
	By = webdriver.By,
	until = webdriver.until;

var driver = new webdriver.Builder()
	.forBrowser('chrome')
	.build();

driver.get('https://loghen41.github.io');

/*  You have 45 minutes to complete all three of these tasks as a group
		Group Exercise 3:

		1. Access the To Do app at "https://loghen41.github.io"
		2. Create 3 new lists
		3. Edit the name of the first list to something other than what you originally named it
		5. Enter into the third list that you created
		6. Add 3 tasks to the list
		7. Mark the first two tasks as being completed
		8. Clear all completed tasks
		9. Return to the lists page and mark the first and last list as completed
		10. Clear all completed lists

*/


driver.quit();
