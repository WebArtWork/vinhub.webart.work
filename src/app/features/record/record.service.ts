import { Injectable, computed, signal } from '@angular/core';
import { RECORDS_FALLBACK } from './record.const';
import { CarRecord } from './record.interface';

@Injectable({ providedIn: 'root' })
export class RecordService {
	readonly records = signal<CarRecord[]>(RECORDS_FALLBACK);

	getById(id: string) {
		return computed(() =>
			this.records().find((record) => record._id === id),
		);
	}

	getByCarId(carId: string) {
		return computed(() =>
			this.records()
				.filter((record) => record.carId === carId)
				.sort(
					(a, b) =>
						new Date(b.date).getTime() - new Date(a.date).getTime(),
				),
		);
	}
}
