import { AsyncPipe, JsonPipe, NgFor, NgIf } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { CatService } from '../cat.service';

@Component({
  selector: 'app-cat',
  standalone: true,
  imports: [HttpClientModule,AsyncPipe,JsonPipe,NgIf,NgFor],
  providers:[CatService],
  templateUrl: './cat.component.html',
  styleUrl: './cat.component.css'
})

export class CatComponent {

  facts: any[] = [];
  subscriber: any;

  constructor(private service: CatService) {}

  onClick() {
    this.subscriber = this.service.getFact().subscribe(value => {
      console.log(value);
      this.facts.push(value); 
    });
  }
}