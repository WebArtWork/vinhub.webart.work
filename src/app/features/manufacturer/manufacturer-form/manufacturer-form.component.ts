import { Component, computed, input, output, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from '@wawjs/ngx-prime/button';
import { InputNumberModule } from '@wawjs/ngx-prime/inputnumber';
import { InputTextModule } from '@wawjs/ngx-prime/inputtext';
import { TextareaModule } from '@wawjs/ngx-prime/textarea';
import { TranslateDirective } from '@wawjs/ngx-translate';
import { Manufacturer } from '../manufacturer.interface';

@Component({
	selector: 'app-manufacturer-form',
	imports: [
		FormsModule,
		ButtonModule,
		InputTextModule,
		InputNumberModule,
		TextareaModule,
		TranslateDirective,
	],
	templateUrl: './manufacturer-form.component.html',
	styleUrl: './manufacturer-form.component.scss',
})
export class ManufacturerFormComponent {
	readonly manufacturer = input<Manufacturer>();
	readonly saved = output<Manufacturer>();

	readonly model = signal<Manufacturer>(this._initialModel());

	readonly isSaveDisabled = computed(() => {
		const model = this.model();
		return !model.name.trim() || !model.country.trim();
	});

	updateModel<K extends keyof Manufacturer>(
		key: K,
		value: Manufacturer[K],
	): void {
		this.model.update((current) => ({ ...current, [key]: value }));
	}

	save(): void {
		if (this.isSaveDisabled()) return;
		this.saved.emit(this.model());
	}

	private _initialModel(): Manufacturer {
		const m = this.manufacturer();
		return {
			_id: m?._id ?? '',
			name: m?.name ?? '',
			country: m?.country ?? '',
			founded: m?.founded ?? new Date().getFullYear(),
			logo: m?.logo ?? '',
			description: m?.description ?? '',
			website: m?.website ?? '',
		};
	}
}
