import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  botones: any;

  constructor() { }

  ngOnInit(): void {
    this.botones = document.getElementsByClassName("boton");
  }

  click(id:number){
    for(let b of this.botones)
      b.style.backgroundColor = b == this.botones[id] ? "#002171" : "#003C8F";
  }
}
