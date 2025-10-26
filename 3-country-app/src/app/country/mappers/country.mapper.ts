import { Country } from "../interfaces/country.interface";
import { ResponseCountry } from "../interfaces/response-countries.interface";

export class CountryMapper {

  static mapResponseCountryToCountry(responseCountry: ResponseCountry): Country {
    return {
      cca2: responseCountry.cca2,
      flag: responseCountry.flag,
      flagSvg: responseCountry.flags.svg,
      name: responseCountry.translations['spa'].common ?? 'No disponible',
      capital: responseCountry.capital.join(', '),
      population: responseCountry.population,
    };
  }

  static mapResponseCountriesToCountries(responseCountries: ResponseCountry[]): Country[] {
    return responseCountries.map(CountryMapper.mapResponseCountryToCountry);
  }

}
