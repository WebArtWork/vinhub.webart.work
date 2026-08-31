import {
	ChangeDetectionStrategy,
	Component,
	computed,
	inject,
} from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { map } from 'rxjs';
import { CarViewComponent } from '../../../features/car/car-view/car-view.component';
import { CarService } from '../../../features/car/car.service';
import { CommentsViewComponent } from '../../../features/comment/comments-view/comments-view.component';
import { ListingShortComponent } from '../../../features/listing/listing-short/listing-short.component';
import { ListingService } from '../../../features/listing/listing.service';
import { RecordShortComponent } from '../../../features/record/record-short/record-short.component';
import { RecordService } from '../../../features/record/record.service';
import { TranslateDirective } from '@wawjs/ngx-translate';

@Component({
	selector: 'app-car-page',
	imports: [
		RouterLink,
		CarViewComponent,
		RecordShortComponent,
		ListingShortComponent,
		CommentsViewComponent,
		TranslateDirective,
	],
	templateUrl: './car.component.html',
	styleUrl: './car.component.scss',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CarPageComponent {
	private readonly _carService = inject(CarService);
	private readonly _recordService = inject(RecordService);
	private readonly _listingService = inject(ListingService);

	private readonly _carId = toSignal(
		inject(ActivatedRoute).paramMap.pipe(
			map((params) => params.get('id') ?? ''),
		),
		{ initialValue: '' },
	);

	readonly car = computed(() => this._carService.getById(this._carId())());
	readonly records = computed(() =>
		this._recordService.getByCarId(this._carId())(),
	);
	readonly listings = computed(() =>
		this._listingService.getByCarId(this._carId())(),
	);
}
