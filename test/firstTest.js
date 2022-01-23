const { Builder, Key, By } = require('selenium-webdriver')
const assert = require('assert')
const should = require('chai').should()

describe('test adding item to todo list', ()=>{
    it ('should return add item name', async ()=>{
        //Set driver for firefox
        let driver = await new Builder()
        .forBrowser('firefox')
        .build()
        
        //keep the window open
        await driver
        .getWindowHandle()
        
        //open the website 
        await driver
        .get('https://lambdatest.github.io/sample-todo-app')
        
        //find the element and type 'Learn Selenium', then press ENTER
        await driver
        .findElement(By.id('sampletodotext'))
        .sendKeys('Learn Selenium', Key.RETURN)

        //Find the last li element and get its value
        let todoText = await driver
        .findElement(By.xpath("//li[last()]"))
        .getText()
        .then(function(value){
            return value
        })
        
        //check if the selected li value equals
        todoText.should.equal('Learn Selenium')

        //close the browser window
        await driver.quit()
    })
})

    
