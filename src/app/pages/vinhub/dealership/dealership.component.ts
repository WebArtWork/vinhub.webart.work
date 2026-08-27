import {
	ChangeDetectionStrategy,
	Component,
	computed,
	inject,
} from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs';
import { CommentsViewComponent } from '../../../comment/comments-view/comments-view.component';
import { DealershipViewComponent } from '../../../dealership/dealership-view/dealership-view.component';
import { DealershipService } from '../../../dealership/dealership.service';
import { SalespersonShortComponent } from '../../../salesperson/salesperson-short/salesperson-short.component';
import { SalespersonService } from '../../../salesperson/salesperson.service';

@Component({
	selector: 'app-dealership-page',
	imports: [
		DealershipViewComponent,
		SalespersonShortComponent,
		CommentsViewComponent,
	],
	templateUrl: './dealership.component.html',
	styleUrl: './dealership.component.scss',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DealershipPageComponent {
	private readonly _dealershipService = inject(DealershipService);
	private readonly _salespersonService = inject(SalespersonService);

	private readonly _dealershipId = toSignal(
		inject(ActivatedRoute).paramMap.pipe(
			map((params) => params.get('id') ?? ''),
		),
		{ initialValue: '' },
	);

	readonly dealership = computed(() =>
		this._dealershipService.getById(this._dealershipId())(),
	);
	readonly salespeople = computed(() =>
		this._salespersonService.getByDealershipId(this._dealershipId())(),
	);
}
