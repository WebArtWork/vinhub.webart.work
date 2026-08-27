import { Injectable, computed, signal } from '@angular/core';
import { REQUESTS_FALLBACK } from './request.const';
import { CarRequest } from './request.interface';

@Injectable({ providedIn: 'root' })
export class RequestService {
	readonly requests = signal<CarRequest[]>(REQUESTS_FALLBACK);

	getById(id: string) {
		return computed(() => this.requests().find((request) => request._id === id));
	}

	getByListingId(listingId: string) {
		return computed(() => this.requests().filter((request) => request.listingId === listingId));
	}
}
