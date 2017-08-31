import { Component } from '@angular/core';

export class Item {
  constructor(
    public purchase: string,
    public price: number,
    public done: boolean = true
  ) {}
}


@Component({
  moduleId: module.id,
  selector: 'app-hero-form',
  templateUrl: 'hero-form.component.html'
})
export class HeroFormComponent {

  newValue: string;
  newValueb: number;

  items: Item[] =
    [
      { purchase: "Хлеб", done: false, price: 15.9 },
      { purchase: "Масло", done: false, price: 60 },
      { purchase: "Картофель", done: true, price: 22.6 },
      { purchase: "Сыр", done: false, price:310 }
    ];


  addItem(){
    console.log(this.newValue);
    this.items.push(new Item(this.newValue, this.newValueb));
  }
}
