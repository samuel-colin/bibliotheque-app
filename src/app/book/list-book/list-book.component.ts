import { Component, OnInit } from '@angular/core';
import { BOOKS } from '../mock/mock-books';
import { Book } from '../model/book';
import { Router } from '@angular/router';
import { BookService } from '../book.service';

@Component({
  selector: 'app-list-book',
  templateUrl: './list-book.component.html',
  styles: [
  ]
})
export class ListBookComponent implements OnInit{
  bookList: Book[];
  
  constructor(
    private router: Router,
    private bookService: BookService) {}

  ngOnInit(): void {
    this.bookService.getBookList()
      .subscribe(newBookList => this.bookList = newBookList);
  }

  goToBook(book: Book) {
    this.router.navigate(['book', book.id])
  }

}
