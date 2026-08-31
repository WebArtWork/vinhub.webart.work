import { Injectable, computed, signal } from '@angular/core';
import { CARS_FALLBACK } from './car.const';
import { Car } from './car.interface';

@Injectable({ providedIn: 'root' })
export class CarService {
	readonly cars = signal<Car[]>(CARS_FALLBACK);

	getById(id: string) {
		return computed(() => this.cars().find((car) => car._id === id));
	}
}
