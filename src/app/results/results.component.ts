import { Component, OnInit } from '@angular/core';
import { SearchService } from '../services/search.service';

@Component({
  selector: 'results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css'],
})
export class ResultsComponent implements OnInit {
  results: Array<string> = [];
  constructor(private searchService: SearchService) {}

  ngOnInit(): void {
    this.searchService.results.subscribe((value) => (this.results = value));
  }
}
