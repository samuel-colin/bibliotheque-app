import { Component, OnInit } from '@angular/core';
import { Book } from '../model/book';

@Component({
  selector: 'app-add-book',
  template: `
    <h2 class="center">Ajouter un livre</h2>
    <app-book-form *ngIf="book" [book]="book"></app-book-form>
  `
})
export class AddBookComponent implements OnInit {
  book: Book;
  
  ngOnInit(): void {
    this.book = new Book();
  }

}
