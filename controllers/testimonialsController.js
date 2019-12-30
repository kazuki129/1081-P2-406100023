const Testimonials = require("../models/testimonialsModel");
 
exports.getTestimonials =  (req, res, next) => {
    Testimonials.fetchTestimonials()
    .then( ([rows]) => {
        console.log(JSON.stringify(rows));
        //res.send(JSON.stringify(rows));
        res.render('testimonials', { 
            data: rows,
            title: 'Testimonials' 
        });
    })
};


// exports.getClassdemo = async (req, res, next) => {
//     let classdemo;


//     try{
//         const getClassdemos = await Classdemo.fetchClassdemo().then(([rows]) => {
//             classdemos = rows;
//         });
//     } catch (err) {
//         console.log(err);
//     }

//     res.render("classdemo2", {
//         data: classdemo,
//         title: "ClassDemo"
//     });



// exports.getClassdemo = (req, res, next) => {
//       Classdemo.fetchClassdemo().then(([rows]) => {   
//         //    console.log(JSON.stringify(rows));    
//         //    res.json(rows);   
//             res.render("classdemo2", { data: rows, title: "ClassDemo" });
//   }); 
// };