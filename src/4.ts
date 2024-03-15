class Key {
  private signature: number = Math.random();
  constructor() {
    this.signature = +Math.random().toFixed(3);
  }
  public getSignature(): number {
    return this.signature;
  }
}

class Person {
  constructor(private key: Key) { }
    
  public getKey(): Key {
    return this.key;
  }
}

abstract class House {
  protected door: true | false;
  protected tenants: Person[] = [];

  constructor(protected key: Key) {}
  public comeIn(person: Person) {
    this.door === true ? this.tenants.push(person) : this.tenants;
  }
  public abstract openDoor(key: Key): boolean;
}

class MyHouse extends House {
  constructor(protected key: Key) {
    super(key);
  }
  public openDoor(key: Key): boolean {
    if (key === this.key) {
      return (this.door = true);
    }
    return (this.door = false);
  }
}

const key1 = new Key();
const key2 = new Key();

const person1 = new Person(key1);
const person2 = new Person(key2);

let house = new MyHouse(key1);
house = new MyHouse(key2);

house.openDoor(person1.getKey());
house.openDoor(person2.getKey());

house.comeIn(person1);
house.comeIn(person2);

console.log(house);

export {};
