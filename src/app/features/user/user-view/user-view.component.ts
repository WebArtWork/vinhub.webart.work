import { DatePipe, TitleCasePipe } from '@angular/common';
import { Component, input } from '@angular/core';
import { CardModule } from '@wawjs/ngx-prime/card';
import { RatingModule } from '@wawjs/ngx-prime/rating';
import { FormsModule } from '@angular/forms';
import { TagModule } from '@wawjs/ngx-prime/tag';
import { UserIconComponent } from '../user-icon/user-icon.component';
import { PublicUser } from '../user.interface';

@Component({
	selector: 'app-user-view',
	imports: [
		DatePipe,
		TitleCasePipe,
		FormsModule,
		CardModule,
		RatingModule,
		TagModule,
		UserIconComponent,
	],
	templateUrl: './user-view.component.html',
	styleUrl: './user-view.component.scss',
})
export class UserViewComponent {
	readonly user = input.required<PublicUser>();
}
