let webdriver = require('selenium-webdriver'),
	By = webdriver.By,
	until = webdriver.until;
let sendmail = require("sendmail")();

let driver = new webdriver.Builder()
	.forBrowser('chrome')
	.build();

driver.get('https://my.uscis.gov/en/appointment/new?appointment%5Binternational%5D=false');

driver.findElement(By.id('appointments_appointment_zip')).sendKeys('84604');
driver.findElement(By.id('field_office_query')).click();
driver.sleep(2000);
driver.findElement(By.id('create-appointment')).click();
driver.sleep(2000);
let done = false;
while (! done) {
	driver.findElement(By.className("appointment-time-slots")).getText().then(text =>
		{
			if (text.includes("there are no available appointments.")) {
				sendmail({
						from: "lhendricks88@gmail.com",
						to: "lhendricks88@gmail.com",
						subject: "Appointment available",
						text: "Make an appointment now fool"
					}, function(err, reply) {
						console.log(err && err.stack);
						console.dir(reply);
					}
				);
			done = true;
			}
		}
	);
}

driver.quit();