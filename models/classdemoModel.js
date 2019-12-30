const db = require('../utils/database');

const Classdemo = class Classdemo {
  constructor(id, name, category, pic, href) {
    this.id = id;
    this.name = name;
    this.category = category;
    this.pic = pic;
    this.href = href
  }

  // READ
  static fetchClassdemo() {
    return db.execute('SELECT * FROM classdemo');
  }

};


// Testing 
// const test = async () => {
//       console.log(await Classdemo.fetchClassdemo()); 
//     }; 
//     test();
 
module.exports = Classdemo;