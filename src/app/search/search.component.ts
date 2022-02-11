import { UpperCasePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { SearchService } from '../services/search.service';

@Component({
  selector: 'search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent implements OnInit {
  wordForm!: FormGroup;
  constructor(
    private searchService: SearchService,
    private upperCasePipe: UpperCasePipe
  ) {}

  ngOnInit(): void {
    let letters: Array<FormControl> = [];
    for (let index = 0; index < 5; index++) {
      var letter = new FormControl();
      letters.push(letter);
    }
    this.wordForm = new FormGroup({
      firstLetter: letters[0],
      secondLetter: letters[1],
      thirdLetter: letters[2],
      fourthLetter: letters[3],
      fithLetter: letters[4],
    });
  }
  search(): void {
    var letters = [
      this.upperCasePipe.transform(this.wordForm.value.firstLetter),
      this.upperCasePipe.transform(this.wordForm.value.secondLetter),
      this.upperCasePipe.transform(this.wordForm.value.thirdLetter),
      this.upperCasePipe.transform(this.wordForm.value.fourthLetter),
      this.upperCasePipe.transform(this.wordForm.value.fithLetter),
    ];
    this.searchService.search(letters);
  }
}
