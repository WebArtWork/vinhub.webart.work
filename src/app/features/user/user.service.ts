import { Injectable, computed, signal } from '@angular/core';
import { PUBLIC_USERS_FALLBACK } from './user.const';
import { PublicUser } from './user.interface';

@Injectable({ providedIn: 'root' })
export class PublicUserService {
	readonly users = signal<PublicUser[]>(PUBLIC_USERS_FALLBACK);

	getById(id: string) {
		return computed(() => this.users().find((user) => user._id === id));
	}
}
