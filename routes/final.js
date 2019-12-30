var express = require('express');
var router = express.Router();

const classdemoController = require("../controllers/classdemoController");
const aboutController = require("../controllers/aboutController");
const testimonialsController = require("../controllers/testimonialsController");
const homeController = require("../controllers/homeController");
/* GET home page. */

router.get('/classdemo', classdemoController.getClassdemo); 

router.get('/about', aboutController.getAbout); 

router.get('/testimonials', testimonialsController.getTestimonials); 

router.get('/home', homeController.getHome); 

// router.get('/classdemo', function(req, res, next) {
//   res.render('classdemo2', { title: 'ClassDemo' });
// });

// router.get('/about', function(req, res, next) {
//     res.render('about', { title: 'About' });
//   });
  
//   router.get('/home', function(req, res, next) {
//     res.render('home', { title: 'Home' });
//   });

  router.get('/introduce', function(req, res, next) {
    res.render('introduce2', { title: 'Introduce' });
  });

//   router.get('/testimonials', function(req, res, next) {
//     res.render('testimonials', { title: 'Testimonials' });
//   });



module.exports = router;
