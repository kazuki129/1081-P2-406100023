const db = require('../utils/database');

const Home = class Home {
  constructor(id, name, icon, article) {
    this.id = id;
    this.name = name;
    this.icon = icon;
    this.article = article;
  }

  // READ
  static fetchHome() {
    return db.execute('SELECT * FROM home');
  }

};


// Testing 
// const test = async () => {
//       console.log(await Classdemo.fetchClassdemo()); 
//     }; 
//     test();
 
module.exports = Home;