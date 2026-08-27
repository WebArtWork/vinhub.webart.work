import { Injectable, computed, signal } from '@angular/core';
import { SALESPEOPLE_FALLBACK } from './salesperson.const';
import { Salesperson } from './salesperson.interface';

@Injectable({ providedIn: 'root' })
export class SalespersonService {
	readonly salespeople = signal<Salesperson[]>(SALESPEOPLE_FALLBACK);

	getById(id: string) {
		return computed(() => this.salespeople().find((salesperson) => salesperson._id === id));
	}

	getByDealershipId(dealershipId: string) {
		return computed(() => this.salespeople().filter((salesperson) => salesperson.dealershipId === dealershipId));
	}
}
