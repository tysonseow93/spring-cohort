let webdriver = require('selenium-webdriver'),
	By = webdriver.By,
	until = webdriver.until;

let driver = new webdriver.Builder()
	.forBrowser('chrome')
	.usingServer('http://xvw1jenkins01.xactware.com:4444/wd/hub')
	// .usingServer('http://localhost:4444/wd/hub')
	.build();

async function google() {
	try {
		await driver.get('https://google.com');
		driver.findElement(By.id("hplogo")).getAttribute("src").then(element => console.log(element))

	} finally {
		await driver.quit();
	}
}

async function copyright() {
	let start = new Date();
	try {
		await driver.get('https://www.xactware.com/copyright/');
		driver.findElement(By.id("aspnetForm")).getAttribute("name").then(element => console.log(element))
		driver.findElement(By.id("aspnetForm")).isDisplayed().then(isDisplayed => console.log(isDisplayed))

	} finally {
		let done = new Date();
		console.log((done.getTime() - start.getTime()) / 1000);
		await driver.quit();
	}
}

//google().then(done => console.log("completed"), error => console.log("error"));
copyright().then(done => console.log("completed"), error => console.log("error"));


