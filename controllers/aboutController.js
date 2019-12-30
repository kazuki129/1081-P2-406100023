const About = require('../models/aboutModel');

// exports.getApp =  (req, res, next) => {
//     About.fetchApp()
//     .then( ([rows]) => {
//         console.log(JSON.stringify(rows));
//         //res.send(JSON.stringify(rows));
//         res.render('about', { 
//             data: rows,
//             title: 'About' 
//         });
//     })
// };


// exports.getFeatures =  (req, res, next) => {
//     About.fetchFeatures()
//     .then( ([rows]) => {
//         console.log(JSON.stringify(rows));
//         //res.send(JSON.stringify(rows));
//         res.render('about', { 
//             data: rows,
//             title: 'About' 
//         });
//     })
// };


exports.getAbout= async (req, res, next) => {

  let App;
  let Features;


  try {
    const get = await About.fetchApp()
      .then(([rows]) => {
        App = rows;
      })

    const getTeam = await About.fetchFeatures()
      .then(([rows]) => {
        Features = rows;
      })

    // console.log(JSON.stringify(data));
    //res.send(JSON.stringify(data));

    res.render('about', {
      atitle: 'About This App',
      adata: App,
      ftitle: 'App Features',
      fdata: Features
    });

  } catch (err) {
    console.log(err);
  };

};