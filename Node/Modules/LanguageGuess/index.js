import { franc, francAll } from 'franc';
import langs from 'langs';
const args = process.argv[2];
const langCode = franc(args);
if (langCode === 'und') {
    console.log("Sorry, couldn't figure it out. Try with more sample text")
} else {
    const language = langs.where("3", langCode);
    console.log(`Our best guess is: ${language.name}`)
};