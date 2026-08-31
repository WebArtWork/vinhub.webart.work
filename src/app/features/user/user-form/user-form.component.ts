import { Component, computed, input, output, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from '@wawjs/ngx-prime/button';
import { InputTextModule } from '@wawjs/ngx-prime/inputtext';
import { SelectModule } from '@wawjs/ngx-prime/select';
import { TextareaModule } from '@wawjs/ngx-prime/textarea';
import { TranslateDirective } from '@wawjs/ngx-translate';
import { PublicUser } from '../user.interface';

@Component({
	selector: 'app-user-form',
	imports: [
		FormsModule,
		ButtonModule,
		InputTextModule,
		SelectModule,
		TextareaModule,
		TranslateDirective,
	],
	templateUrl: './user-form.component.html',
	styleUrl: './user-form.component.scss',
})
export class UserFormComponent {
	readonly user = input<PublicUser>();
	readonly saved = output<PublicUser>();

	protected readonly roles = ['buyer', 'seller', 'dealer'];

	readonly model = signal<PublicUser>(this._initialModel());

	readonly isSaveDisabled = computed(() => !this.model().name.trim());

	updateModel<K extends keyof PublicUser>(
		key: K,
		value: PublicUser[K],
	): void {
		this.model.update((current) => ({ ...current, [key]: value }));
	}

	save(): void {
		if (this.isSaveDisabled()) return;
		this.saved.emit(this.model());
	}

	private _initialModel(): PublicUser {
		const u = this.user();
		return {
			_id: u?._id ?? '',
			name: u?.name ?? '',
			role: u?.role ?? 'buyer',
			avatar: u?.avatar ?? '',
			bio: u?.bio ?? '',
			location: u?.location ?? '',
			memberSince: u?.memberSince ?? '',
			listingsCount: u?.listingsCount ?? 0,
			rating: u?.rating ?? 0,
		};
	}
}
