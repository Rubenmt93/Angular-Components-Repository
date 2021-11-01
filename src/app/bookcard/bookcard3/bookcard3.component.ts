import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bookcard3',
  templateUrl: './bookcard3.component.html',
  styleUrls: ['./bookcard3.component.css']
})
export class BookCard3Component implements OnInit {
  imagen: string = "https://template.canva.com/EADzX_WUjiY/1/0/251w-xpZlfo7EIAI.jpg" 
  constructor() { }

  ngOnInit(): void {
  }

}
