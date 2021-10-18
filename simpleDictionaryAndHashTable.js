// A simple introduction to Dictionary and Hash Table
class Dictionary {
  constructor() {
    this.dictionary = {};
  }
  add(key, value) {
    this.dictionary[key] = value;
  }
  get(key) {
    return this.dictionary[key];
  }
}
const phoneBook = new Dictionary();
phoneBook.add("Nazrul", 2222222222);
phoneBook.add("Abdullah", 3333333333);
phoneBook.add("Juwel", 1111111111);
console.log(phoneBook.dictionary);
const nazrul = phoneBook.get("Nazrul");
console.log(nazrul);
