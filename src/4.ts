// допилював з ChatGPT, не знаю чи його можна зарахувати

// Клас ключа, екземпляр створюється з випадковим значенням і методом для його отримання
class Key {
    private signature: number;
    constructor() {
      this.signature = Math.random();
    }
    getSignature(): number {
      return this.signature;
    }
  }
  
  // Клас особи, що зберігає об'єкт ключа та надає метод для його отримання
  class Person {
    private key: Key;
    constructor(key: Key) {
      this.key = key;
    }
    getKey(): Key {
      return this.key;
    }
  }
  
  // Абстрактний клас дому
  abstract class House {
    protected door: boolean;
    protected key: Key;
    protected tenants: Person[];
  
    constructor(key: Key) {
      this.door = false; // Двері спочатку мают бути закриті, якщо я правильно зрозумів
      this.key = key;
      this.tenants = [];
    }
  
    // Метод для додавання мешканців, якщо двері відчинені
    comeIn(person: Person): void {
      if (this.door === true) {
        this.tenants.push(person);
      }
    }
  
    // Абстрактний метод для відкриття дверей, без реалізації
    abstract openDoor(key: Key): void;
  }
  
  // успадкування та реалізація методу openDoor
  class MyHouse extends House {
    constructor(key: Key) {
      super(key);
    }
    openDoor(key: Key): void {
      if (key.getSignature() === this.key.getSignature()) {
        this.door = true;
      }
    }
  }
  
  // Тестування сценарію
  const key = new Key();
  const house = new MyHouse(key);
  const person = new Person(key);
  
  house.openDoor(person.getKey());
  house.comeIn(person);
  
  export {};