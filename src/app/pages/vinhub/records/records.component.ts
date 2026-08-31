import {
	ChangeDetectionStrategy,
	Component,
	computed,
	inject,
} from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs';
import { CarService } from '../../../features/car/car.service';
import { RecordViewComponent } from '../../../features/record/record-view/record-view.component';
import { RecordService } from '../../../features/record/record.service';
import { TranslateDirective } from '@wawjs/ngx-translate';

@Component({
	selector: 'app-records-page',
	imports: [RecordViewComponent, TranslateDirective],
	templateUrl: './records.component.html',
	styleUrl: './records.component.scss',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RecordsPageComponent {
	private readonly _carService = inject(CarService);
	private readonly _recordService = inject(RecordService);

	private readonly _carId = toSignal(
		inject(ActivatedRoute).paramMap.pipe(
			map((params) => params.get('carId') ?? ''),
		),
		{ initialValue: '' },
	);

	readonly car = computed(() => this._carService.getById(this._carId())());
	readonly records = computed(() =>
		this._recordService.getByCarId(this._carId())(),
	);
}
