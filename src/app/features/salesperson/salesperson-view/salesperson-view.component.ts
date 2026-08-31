import { Component, computed, inject, input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CardModule } from '@wawjs/ngx-prime/card';
import { RatingModule } from '@wawjs/ngx-prime/rating';
import { DealershipService } from '../../dealership/dealership.service';
import { SalespersonIconComponent } from '../salesperson-icon/salesperson-icon.component';
import { Salesperson } from '../salesperson.interface';

@Component({
	selector: 'app-salesperson-view',
	imports: [FormsModule, CardModule, RatingModule, SalespersonIconComponent],
	templateUrl: './salesperson-view.component.html',
	styleUrl: './salesperson-view.component.scss',
})
export class SalespersonViewComponent {
	private readonly _dealershipService = inject(DealershipService);

	readonly salesperson = input.required<Salesperson>();

	protected readonly dealership = computed(() =>
		this._dealershipService.getById(this.salesperson().dealershipId)(),
	);
}
