import {
	Component,
	computed,
	inject,
	input,
	output,
	signal,
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from '@wawjs/ngx-prime/button';
import { InputTextModule } from '@wawjs/ngx-prime/inputtext';
import { SelectModule } from '@wawjs/ngx-prime/select';
import { TranslateDirective } from '@wawjs/ngx-translate';
import { DealershipService } from '../../dealership/dealership.service';
import { Salesperson } from '../salesperson.interface';

@Component({
	selector: 'app-salesperson-form',
	imports: [
		FormsModule,
		ButtonModule,
		InputTextModule,
		SelectModule,
		TranslateDirective,
	],
	templateUrl: './salesperson-form.component.html',
	styleUrl: './salesperson-form.component.scss',
})
export class SalespersonFormComponent {
	private readonly _dealershipService = inject(DealershipService);

	readonly salesperson = input<Salesperson>();
	readonly saved = output<Salesperson>();

	protected readonly dealerships = computed(() =>
		this._dealershipService.dealerships(),
	);

	readonly model = signal<Salesperson>(this._initialModel());

	readonly isSaveDisabled = computed(() => {
		const model = this.model();
		return !model.name.trim() || !model.dealershipId;
	});

	updateModel<K extends keyof Salesperson>(
		key: K,
		value: Salesperson[K],
	): void {
		this.model.update((current) => ({ ...current, [key]: value }));
	}

	save(): void {
		if (this.isSaveDisabled()) return;
		this.saved.emit(this.model());
	}

	private _initialModel(): Salesperson {
		const s = this.salesperson();
		return {
			_id: s?._id ?? '',
			name: s?.name ?? '',
			dealershipId: s?.dealershipId ?? '',
			title: s?.title ?? '',
			phone: s?.phone ?? '',
			email: s?.email ?? '',
			avatar: s?.avatar ?? '',
			rating: s?.rating ?? 0,
			dealsClosed: s?.dealsClosed ?? 0,
		};
	}
}
