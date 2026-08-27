import { DatePipe, TitleCasePipe } from '@angular/common';
import { Component, input } from '@angular/core';
import { CardModule } from '@wawjs/ngx-prime/card';
import { TagModule } from '@wawjs/ngx-prime/tag';
import { RequestIconComponent } from '../request-icon/request-icon.component';
import { CarRequest } from '../request.interface';

@Component({
	selector: 'app-request-view',
	imports: [DatePipe, TitleCasePipe, CardModule, TagModule, RequestIconComponent],
	templateUrl: './request-view.component.html',
	styleUrl: './request-view.component.scss',
})
export class RequestViewComponent {
	readonly request = input.required<CarRequest>();
}
