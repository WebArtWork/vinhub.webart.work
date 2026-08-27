import { Component, input } from '@angular/core';
import { AvatarModule } from '@wawjs/ngx-prime/avatar';
import { PublicUser } from '../user.interface';

@Component({
	selector: 'app-user-icon',
	imports: [AvatarModule],
	templateUrl: './user-icon.component.html',
	styleUrl: './user-icon.component.scss',
})
export class UserIconComponent {
	readonly user = input.required<PublicUser>();
}
