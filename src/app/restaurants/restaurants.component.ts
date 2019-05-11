import { Component, OnInit } from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';

import {Observable, from} from 'rxjs';
import {catchError, debounceTime, distinctUntilChanged, switchMap} from 'rxjs/operators';

import { Restaurant } from './restaurant/restaurant';
import { RestaurantsService } from './restaurants.service';




@Component({
  selector: 'mt-restaurants',
  templateUrl: './restaurants.component.html',
  animations: [
    trigger('toggleSearch', [
      state('hidden', style({
        opacity: 0,
        maxHeight: '0px'
      })),
      state('visible', style({
        opacity: 1,
        maxHeight: '70px',
        marginTop: '20px'
      })),
      transition('* => *', animate('250ms 0s ease-in-out'))
    ])
  ]
})
export class RestaurantsComponent implements OnInit {

  searchBarState = 'hidden';
  restaurants: Restaurant[];

  searchForm: FormGroup;
  searchControl: FormControl;

  constructor(
    private restaurantsService: RestaurantsService,
    private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.searchControl = this.formBuilder.control('');
    this.searchForm = this.formBuilder.group({
      searchControl: this.searchControl
    });

    this.searchControl.valueChanges.pipe(
      debounceTime(500), distinctUntilChanged(),
      switchMap(searchTerm => this.restaurantsService.restaurants(searchTerm)
          .pipe(catchError(() => from([]))))
    ).subscribe(restaurants => this.restaurants = restaurants);

    this.restaurantsService.restaurants()
      .subscribe(restaurants => this.restaurants = restaurants);
  }

  toggleSearch() {
    this.searchBarState = (this.searchBarState === 'hidden') ? 'visible' : 'hidden';
  }
}
