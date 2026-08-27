import { CurrencyPipe, DatePipe, DecimalPipe, TitleCasePipe } from '@angular/common';
import { Component, input } from '@angular/core';
import { CardModule } from '@wawjs/ngx-prime/card';
import { TagModule } from '@wawjs/ngx-prime/tag';
import { CarRecord } from '../record.interface';

@Component({
	selector: 'app-record-view',
	imports: [CurrencyPipe, DatePipe, DecimalPipe, TitleCasePipe, CardModule, TagModule],
	templateUrl: './record-view.component.html',
	styleUrl: './record-view.component.scss',
})
export class RecordViewComponent {
	readonly record = input.required<CarRecord>();
}
