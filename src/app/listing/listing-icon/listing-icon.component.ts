import { Component, computed, inject, input } from '@angular/core';
import { CarIconComponent } from '../../car/car-icon/car-icon.component';
import { CarService } from '../../car/car.service';
import { Listing } from '../listing.interface';

@Component({
	selector: 'app-listing-icon',
	imports: [CarIconComponent],
	templateUrl: './listing-icon.component.html',
	styleUrl: './listing-icon.component.scss',
})
export class ListingIconComponent {
	private readonly _carService = inject(CarService);

	readonly listing = input.required<Listing>();

	protected readonly car = computed(() =>
		this._carService.getById(this.listing().carId)(),
	);
}
