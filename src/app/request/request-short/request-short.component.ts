import { DatePipe, TitleCasePipe } from '@angular/common';
import { Component, input } from '@angular/core';
import { TagModule } from '@wawjs/ngx-prime/tag';
import { RequestIconComponent } from '../request-icon/request-icon.component';
import { CarRequest } from '../request.interface';

@Component({
	selector: 'app-request-short',
	imports: [DatePipe, TitleCasePipe, TagModule, RequestIconComponent],
	templateUrl: './request-short.component.html',
	styleUrl: './request-short.component.scss',
})
export class RequestShortComponent {
	readonly request = input.required<CarRequest>();
}
