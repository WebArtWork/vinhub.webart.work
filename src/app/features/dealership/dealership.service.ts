import { Injectable, computed, signal } from '@angular/core';
import { DEALERSHIPS_FALLBACK } from './dealership.const';
import { Dealership } from './dealership.interface';

@Injectable({ providedIn: 'root' })
export class DealershipService {
	readonly dealerships = signal<Dealership[]>(DEALERSHIPS_FALLBACK);

	getById(id: string) {
		return computed(() =>
			this.dealerships().find((dealership) => dealership._id === id),
		);
	}
}
