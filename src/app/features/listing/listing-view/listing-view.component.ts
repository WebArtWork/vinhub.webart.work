import { CurrencyPipe, DatePipe, TitleCasePipe } from '@angular/common';
import { Component, computed, inject, input } from '@angular/core';
import { CardModule } from '@wawjs/ngx-prime/card';
import { TagModule } from '@wawjs/ngx-prime/tag';
import { CarViewComponent } from '../../car/car-view/car-view.component';
import { CarService } from '../../car/car.service';
import { Listing } from '../listing.interface';

@Component({
	selector: 'app-listing-view',
	imports: [
		CurrencyPipe,
		DatePipe,
		TitleCasePipe,
		CardModule,
		TagModule,
		CarViewComponent,
	],
	templateUrl: './listing-view.component.html',
	styleUrl: './listing-view.component.scss',
})
export class ListingViewComponent {
	private readonly _carService = inject(CarService);

	readonly listing = input.required<Listing>();

	protected readonly car = computed(() =>
		this._carService.getById(this.listing().carId)(),
	);
}
