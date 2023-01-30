import { Component, OnInit, Input } from '@angular/core';
import { BookService } from '../book.service';
import { Book } from '../model/book';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-book-form',
  templateUrl: './book-form.component.html',
  styleUrls : ['./book-form.component.css']
})
export class BookFormComponent implements OnInit {
  @Input() book: Book;
  types: string[];
  isAddForm: boolean;
  
  constructor(
    private bookService: BookService,
    private router: Router
    ) { }
  
  ngOnInit(): void {
    this.types = this.bookService.getBookTypeList();
    this.isAddForm = this.router.url.includes('add');
  }

  hasType(type: string): boolean {
    return this.book.types.includes(type);
  }

  selectType($event: Event, type: string) {
    const isChecked: boolean = ($event.target as HTMLInputElement).checked;

    if(isChecked) {
      this.book.types.push(type);
    } else {
      this.book.types.splice(this.book.types.indexOf(type), 1);
    }
  }

  onSubmit() {
    if(this.isAddForm) {
      this.bookService.addBook(this.book)
        ?.subscribe((newBook: Book) => this.router.navigate(['book', newBook.id]) 
      );
    } else {
      this.bookService.updateBook(this.book)
        ?.subscribe((newBook) => this.router.navigate(['book', this.book.id])
      );  
    }
  }

  isTypesValid(type: string): boolean {
    if(this.book.types.length == 1 && this.hasType(type)) {
      return false;
    }

    if(this.book.types.length > 2 && !this.hasType(type)) {
      return false;
    }

    return true;
  }

}
