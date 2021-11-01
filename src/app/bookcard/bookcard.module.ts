import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { bookCard1Component } from './bookcard1/bookcard1.component';
import { BookCard2Component } from './bookcard2/bookcard2.component';
import { BookCard3Component } from './bookcard3/bookcard3.component';


@NgModule({
    declarations: [
      bookCard1Component,
      BookCard2Component,
      BookCard3Component
    ],
    exports:[
       bookCard1Component,
       BookCard2Component,
       BookCard3Component
    ],
    imports:[
        CommonModule
    ]
})
export class BookCardModules{}