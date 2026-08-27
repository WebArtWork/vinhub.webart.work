import { Component, computed, input, output, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from '@wawjs/ngx-prime/button';
import { InputNumberModule } from '@wawjs/ngx-prime/inputnumber';
import { InputTextModule } from '@wawjs/ngx-prime/inputtext';
import { TranslateDirective } from '@wawjs/ngx-translate';
import { Dealership } from '../dealership.interface';

@Component({
	selector: 'app-dealership-form',
	imports: [FormsModule, ButtonModule, InputTextModule, InputNumberModule, TranslateDirective],
	templateUrl: './dealership-form.component.html',
	styleUrl: './dealership-form.component.scss',
})
export class DealershipFormComponent {
	readonly dealership = input<Dealership>();
	readonly saved = output<Dealership>();

	readonly model = signal<Dealership>(this._initialModel());

	readonly isSaveDisabled = computed(() => {
		const model = this.model();
		return !model.name.trim() || !model.address.trim() || !model.city.trim();
	});

	updateModel<K extends keyof Dealership>(key: K, value: Dealership[K]): void {
		this.model.update((current) => ({ ...current, [key]: value }));
	}

	save(): void {
		if (this.isSaveDisabled()) return;
		this.saved.emit(this.model());
	}

	private _initialModel(): Dealership {
		const d = this.dealership();
		return {
			_id: d?._id ?? '',
			name: d?.name ?? '',
			address: d?.address ?? '',
			city: d?.city ?? '',
			state: d?.state ?? '',
			phone: d?.phone ?? '',
			email: d?.email ?? '',
			logo: d?.logo ?? '',
			lat: d?.lat ?? 0,
			lng: d?.lng ?? 0,
			rating: d?.rating ?? 0,
		};
	}
}
