// Generic class

class DataStorage<T> {
  private _data: T[] = [];

  addItem(item: T) {
    this._data.push(item);
  }

  removeItem(item: T) {
    this._data.splice(this._data.indexOf(item), 1);
  }

  getItems() {
    return [...this._data];
  }
}

// since we have used Generics, we can use the class to store multiple types.

const textStorage = new DataStorage<string>();
const numbersStorage = new DataStorage<number>();

textStorage.addItem("Hello Generic class");
textStorage.addItem("Feelling goooood");
textStorage.addItem("Whatsapp");
textStorage.removeItem("Whatsapp");
// console.log(textStorage.getItems());

numbersStorage.addItem(10);
numbersStorage.addItem(20);
numbersStorage.addItem(30);
numbersStorage.removeItem(10);
// console.log(numbersStorage.getItems());

// numbersStorage.addItem(10);
console.log(numbersStorage.getItems());
