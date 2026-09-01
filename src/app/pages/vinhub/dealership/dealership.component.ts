import {
	ChangeDetectionStrategy,
	Component,
	computed,
	inject,
} from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs';
import { CommentsViewComponent } from '../../../features/comment/comments-view/comments-view.component';
import { DealershipViewComponent } from '../../../features/dealership/dealership-view/dealership-view.component';
import { DealershipService } from '../../../features/dealership/dealership.service';
import { SalespersonShortComponent } from '../../../features/salesperson/salesperson-short/salesperson-short.component';
import { SalespersonService } from '../../../features/salesperson/salesperson.service';
import { TranslateDirective } from '@wawjs/ngx-translate';

@Component({
	selector: 'app-dealership-page',
	imports: [
		DealershipViewComponent,
		SalespersonShortComponent,
		CommentsViewComponent,
		TranslateDirective,
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
