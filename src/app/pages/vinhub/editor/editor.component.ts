import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { SelectModule } from '@wawjs/ngx-prime/select';
import { FormsModule } from '@angular/forms';
import { CarFormComponent } from '../../../car/car-form/car-form.component';
import { ListingFormComponent } from '../../../listing/listing-form/listing-form.component';
import { RecordFormComponent } from '../../../record/record-form/record-form.component';
import { ManufacturerFormComponent } from '../../../manufacturer/manufacturer-form/manufacturer-form.component';
import { DealershipFormComponent } from '../../../dealership/dealership-form/dealership-form.component';
import { SalespersonFormComponent } from '../../../salesperson/salesperson-form/salesperson-form.component';
import { UserFormComponent } from '../../../user/user-form/user-form.component';

type EditorEntity = 'car' | 'listing' | 'record' | 'manufacturer' | 'dealership' | 'salesperson' | 'user';

@Component({
	selector: 'app-editor',
	imports: [
		FormsModule,
		SelectModule,
		CarFormComponent,
		ListingFormComponent,
		RecordFormComponent,
		ManufacturerFormComponent,
		DealershipFormComponent,
		SalespersonFormComponent,
		UserFormComponent,
	],
	templateUrl: './editor.component.html',
	styleUrl: './editor.component.scss',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EditorPageComponent {
	readonly entities: EditorEntity[] = [
		'car',
		'listing',
		'record',
		'manufacturer',
		'dealership',
		'salesperson',
		'user',
	];

	readonly entity = signal<EditorEntity>('car');
}
