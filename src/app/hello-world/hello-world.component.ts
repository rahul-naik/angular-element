import { Component, OnInit, NgModule, Injector,ViewEncapsulation } from '@angular/core';


@Component({
  selector: 'app-hello-world',
  templateUrl: './hello-world.component.html',
  styleUrls: ['./hello-world.component.css'],
  encapsulation: ViewEncapsulation.Native
})
export class HelloWorldComponent implements OnInit {

  public name :string;
  constructor() { }

  ngOnInit() {
    this.name = "Rahul"
  }

}
