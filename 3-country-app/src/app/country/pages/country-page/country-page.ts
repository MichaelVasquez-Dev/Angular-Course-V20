import { Component, inject } from '@angular/core';
import { CountryService } from '../../services/country.service';
import { ActivatedRoute } from '@angular/router';
import { rxResource } from '@angular/core/rxjs-interop';
import { Observable, of } from 'rxjs';
import { Country } from '../../interfaces/country.interface';
import { DecimalPipe, Location } from '@angular/common';

@Component({
  selector: 'app-country-page',
  imports: [DecimalPipe],
  templateUrl: './country-page.html'
})
export default class CountryPage {

  readonly countryService = inject(CountryService);
  readonly location = inject(Location);

  countryCode = inject(ActivatedRoute).snapshot.params['code'];

  countryResource = rxResource({
    params: () => ({ code: this.countryCode }),
    stream: ({ params }): Observable<Country> => {
      return this.countryService.searchCountryByCode(params.code);
    }
  })

  goBack() {
    this.location.back();
  }
}
