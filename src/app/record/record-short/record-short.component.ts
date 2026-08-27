import { DatePipe, DecimalPipe } from '@angular/common';
import { Component, computed, input } from '@angular/core';
import { TagModule } from '@wawjs/ngx-prime/tag';
import { CarRecord } from '../record.interface';

const TYPE_ICON: Record<string, string> = {
	service: 'pi-wrench',
	repair: 'pi-hammer',
	accident: 'pi-exclamation-triangle',
	ownership_transfer: 'pi-user-edit',
	inspection: 'pi-check-square',
};

@Component({
	selector: 'app-record-short',
	imports: [DatePipe, DecimalPipe, TagModule],
	templateUrl: './record-short.component.html',
	styleUrl: './record-short.component.scss',
})
export class RecordShortComponent {
	readonly record = input.required<CarRecord>();

	protected readonly icon = computed(
		() => TYPE_ICON[this.record().type] ?? 'pi-file',
	);
}
