import { Component, OnInit } from '@angular/core';
import { Book } from '../model/book';
import { BookService } from '../book.service';
import { Router } from '@angular/router';
import { Observable, Subject, debounceTime, distinctUntilChanged, switchMap } from 'rxjs';

@Component({
  selector: 'app-search-book',
  templateUrl: './search-book.component.html'
})
export class SearchBookComponent implements OnInit {

  searchTerms = new Subject<string>();
  books$: Observable<Book[]>;

  constructor(
    private router: Router,
    private bookService: BookService
  ) {

  }

  ngOnInit(): void {
    this.books$ = this.searchTerms.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      switchMap((term) => this.bookService.searchBookList(term)),
    );
  }

  search(term: string) {
    this.searchTerms.next(term);
  }


  goToDetail(book: Book) {
    const link = ['/book', book.id];
    this.router.navigate(link);
  }
}
