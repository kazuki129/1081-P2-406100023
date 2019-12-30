const db = require('../utils/database');

const About = class About {
  constructor(id, name, category, artical, pic, buttun, href, btn) {
    this.id = id;
    this.name = name;
    this.category = category;
    this.aritcal = artical;
    this.pic = pic;
    this.buttun = buttun;
    this.href = href;
    this.btn =btn;
  }

  // READ
  static fetchApp() {
    return db.execute('SELECT * FROM about where category = "About this app"');
  }

  static fetchFeatures() {
      return db.execute('SELECT * FROM about where category = "App Features"');
  }

};


// Testing 
// const test = async () => {
//       console.log(await Classdemo.fetchClassdemo()); 
//     }; 
//     test();
 
module.exports = About;