import {
	ChangeDetectionStrategy,
	Component,
	computed,
	inject,
} from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs';
import { ManufacturerViewComponent } from '../../../manufacturer/manufacturer-view/manufacturer-view.component';
import { ManufacturerService } from '../../../manufacturer/manufacturer.service';
import { TranslateDirective } from '@wawjs/ngx-translate';

@Component({
	selector: 'app-manufacturer-page',
	imports: [ManufacturerViewComponent, TranslateDirective],
	templateUrl: './manufacturer.component.html',
	styleUrl: './manufacturer.component.scss',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ManufacturerPageComponent {
	private readonly _manufacturerService = inject(ManufacturerService);

	private readonly _manufacturerId = toSignal(
		inject(ActivatedRoute).paramMap.pipe(
			map((params) => params.get('id') ?? ''),
		),
		{ initialValue: '' },
	);

	readonly manufacturer = computed(() =>
		this._manufacturerService.getById(this._manufacturerId())(),
	);
}
