import { Injectable, computed, signal } from '@angular/core';
import { MANUFACTURERS_FALLBACK } from './manufacturer.const';
import { Manufacturer } from './manufacturer.interface';

@Injectable({ providedIn: 'root' })
export class ManufacturerService {
	readonly manufacturers = signal<Manufacturer[]>(MANUFACTURERS_FALLBACK);

	getById(id: string) {
		return computed(() => this.manufacturers().find((manufacturer) => manufacturer._id === id));
	}
}
