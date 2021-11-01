import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bookcard2',
  templateUrl: './bookcard2.component.html',
  styleUrls: ['./bookcard2.component.css']
})
export class BookCard2Component implements OnInit {
  imagen: string = "https://template.canva.com/EADzX_WUjiY/1/0/251w-xpZlfo7EIAI.jpg" 
  tittle: string= "John Wick 3"
  description: string= "After gunning down a member of the High Table -- the shadowy international assassin's guild -- legendary hit man John Wick finds himself stripped of the organization's protective services. Now stuck with a $14 million bounty on his head, Wick must fight his way through the streets of New York as he becomes the target of the world's most ruthless killers."
  constructor() { }

  ngOnInit(): void {
  }

}
