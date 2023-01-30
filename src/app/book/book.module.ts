import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailBookComponent } from './detail-book/detail-book.component';
import { ListBookComponent } from './list-book/list-book.component';
import { BorderCardDirective } from './border-card.directive';
import { BookTypePipeColorPipe } from './pipe/book-type-pipe-color.pipe';
import { RouterModule, Routes } from '@angular/router';
import { BookService } from './book.service';
import { FormsModule } from '@angular/forms';
import { BookFormComponent } from './book-form/book-form.component';
import { EditBookComponent } from './edit-book/edit-book.component';
import { AddBookComponent } from './add-book/add-book.component';
import { SearchBookComponent } from './search-book/search-book.component';
import { LoaderComponent } from './loader/loader.component';

const bookRoutes: Routes = [
  { path: 'book/edit/:id', component: EditBookComponent },
  { path: 'book/add', component: AddBookComponent },
  { path: 'books', component: ListBookComponent },
  { path: 'book/:id', component: DetailBookComponent }
];

@NgModule({
  declarations: [
    DetailBookComponent,
    ListBookComponent,
    BorderCardDirective,
    BookTypePipeColorPipe,
    BookFormComponent,
    EditBookComponent,
    AddBookComponent,
    SearchBookComponent,
    LoaderComponent
  ],
  imports: [
    CommonModule, 
    FormsModule,
    RouterModule.forChild(bookRoutes)
  ],
  providers: [
    BookService
  ]
})

export class BookModule { }
