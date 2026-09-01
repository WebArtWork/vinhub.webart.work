import { Injectable, computed, signal } from '@angular/core';
import { LISTINGS_FALLBACK } from './listing.const';
import { Listing } from './listing.interface';

@Injectable({ providedIn: 'root' })
export class ListingService {
	readonly listings = signal<Listing[]>(LISTINGS_FALLBACK);

	getById(id: string) {
		return computed(() =>
			this.listings().find((listing) => listing._id === id),
		);
	}

	getByCarId(carId: string) {
		return computed(() =>
			this.listings().filter((listing) => listing.carId === carId),
		);
	}
}
