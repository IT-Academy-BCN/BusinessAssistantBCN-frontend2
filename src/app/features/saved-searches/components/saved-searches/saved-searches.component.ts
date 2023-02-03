import { SavedSearchesService } from './../../services/saved-searches.service';
import { SavedSearchesModel } from './../../../../shared/models/saved-search.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-saved-searches',
  templateUrl: './saved-searches.component.html',
  styleUrls: ['./saved-searches.component.scss']
})
export class SavedSearchesComponent implements OnInit {

  constructor(private savedSearchesService: SavedSearchesService) { }
  date!: Date;
  savedSearchesData: SavedSearchesModel[] = []
  displayedColumns: string[] = ['search-name', 'search-date', 'search-detail', 'search-button'];
  breakpoint: number = 1;

  ngOnInit(): void {
    this.getSavedSearches();
  };

  getSavedSearches() {
    this.savedSearchesService.getSavedSearches().subscribe((resp: any) => {
      this.savedSearchesData = resp.results;
      this.breakpoint = (window.innerWidth <= 600) ? 1 : 4;
    });
  }

  onResize(event: any) {
    this.breakpoint = (event.target.innerWidth <= 600) ? 1 : 4;
  }
}
