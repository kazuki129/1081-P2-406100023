const db = require('../utils/database');

const Testimonials = class Testimonials {
  constructor(id, name, article, pic) {
    this.id = id;
    this.name = name;
    this.article = article;
    this.pic = pic;
  }

  // READ
  static fetchTestimonials() {
    return db.execute('SELECT * FROM testimonials');
  }

};


// Testing 
// const test = async () => {
//       console.log(await Classdemo.fetchClassdemo()); 
//     }; 
//     test();
 
module.exports = Testimonials;