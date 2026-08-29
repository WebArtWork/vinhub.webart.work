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
import { ListingViewComponent } from '../../../listing/listing-view/listing-view.component';
import { ListingService } from '../../../listing/listing.service';
import { RequestFormComponent } from '../../../request/request-form/request-form.component';
import { TranslateDirective } from '@wawjs/ngx-translate';

@Component({
	selector: 'app-listing-page',
	imports: [
		ListingViewComponent,
		RequestFormComponent,
		CommentsViewComponent,
		TranslateDirective,
	],
	templateUrl: './listing.component.html',
	styleUrl: './listing.component.scss',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ListingPageComponent {
	private readonly _listingService = inject(ListingService);

	private readonly _listingId = toSignal(
		inject(ActivatedRoute).paramMap.pipe(
			map((params) => params.get('id') ?? ''),
		),
		{ initialValue: '' },
	);

	readonly listing = computed(() =>
		this._listingService.getById(this._listingId())(),
	);
}
