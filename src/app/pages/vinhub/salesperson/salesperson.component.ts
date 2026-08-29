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
import { SalespersonViewComponent } from '../../../salesperson/salesperson-view/salesperson-view.component';
import { SalespersonService } from '../../../salesperson/salesperson.service';
import { TranslateDirective } from '@wawjs/ngx-translate';

@Component({
	selector: 'app-salesperson-page',
	imports: [SalespersonViewComponent, CommentsViewComponent, TranslateDirective],
	templateUrl: './salesperson.component.html',
	styleUrl: './salesperson.component.scss',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SalespersonPageComponent {
	private readonly _salespersonService = inject(SalespersonService);

	private readonly _salespersonId = toSignal(
		inject(ActivatedRoute).paramMap.pipe(
			map((params) => params.get('id') ?? ''),
		),
		{ initialValue: '' },
	);

	readonly salesperson = computed(() =>
		this._salespersonService.getById(this._salespersonId())(),
	);
}
