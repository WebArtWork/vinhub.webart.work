import { TitleCasePipe } from '@angular/common';
import { Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { UserIconComponent } from '../user-icon/user-icon.component';
import { PublicUser } from '../user.interface';

@Component({
	selector: 'app-user-short',
	imports: [RouterLink, TitleCasePipe, UserIconComponent],
	templateUrl: './user-short.component.html',
	styleUrl: './user-short.component.scss',
})
export class UserShortComponent {
	readonly user = input.required<PublicUser>();
}
