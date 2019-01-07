var express = require('express');
var puppeteer = require('puppeteer');
const jsdom = require("jsdom");
const { JSDOM } = jsdom;
var router = express.Router();

router.get('/', async function(req, res, next) {

    let uri = req.query.uri;
    console.log(uri);
    try {
      
      const browser = await puppeteer.launch();

      const page =  await browser.newPage();

      await page.goto(uri);

      // const bodyHandle = await page.$('body');


      // const dataResponse = await page.evaluate(responseVal => {
        
      //   // console.log("Logo: ", document.getElementById("hplogo"));
      //   // return responseVal.innerHTML;
      //   return document.body;
      // }, bodyHandle);
      // await bodyHandle.dispose();
      const html = await page.content();
      const dom = new JSDOM(html);



      browser.close();

      console.log(dom.window.document.querySelector(".gLFyf.gsfi").title, "dataResponse")

      res.json({
        status: 'success',
        message: 'Operation has been successfully completed',
      });
      
    } catch (error) {
      
      res.json({
        status: 'error',
        message: 'Something went wrong while retrieving informations from server!',
        error
      });

    }

});

module.exports = router;
