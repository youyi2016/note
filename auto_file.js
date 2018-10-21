const fs = require('fs');
let arguments = process.argv.splice(2);
let dirArr = ['models', 'public', 'routes', 'views'];
let configArr = ['index'];
let content = "";
let subArr = ['img', 'css']
fs.mkdirSync(`${arguments}`)
dirArr.forEach((item) => {
  fs.mkdirSync(`${arguments}/${item}`, () => {
  })
})

configArr.forEach((item, idx) => {
  // switch (idx) {
  //   case 0:
  //     content = "export default {}";
  //     break;
  //   case 1:
  //     content = "export default []";
  //     break;
  // }
  fs.writeFileSync(`${item}.js`);
})

subArr.forEach((item)=> {
  fs.mkdirSync(`${arguments}/public/${item}`, () => {})
})
