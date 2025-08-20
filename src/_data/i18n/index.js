const en = require('./en.json');
const he = require('./he.json');

const translations = {};

for (const key in en) {
  if (Object.prototype.hasOwnProperty.call(en, key)) {
    translations[key] = {
      en: en[key],
      he: he[key]
    };
  }
}

module.exports = translations;
