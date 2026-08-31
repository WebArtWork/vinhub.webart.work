import { DatePipe } from '@angular/common';
import { Component, computed, inject, input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RatingModule } from '@wawjs/ngx-prime/rating';
import { PublicUserService } from '../../user/user.service';
import { UserIconComponent } from '../../user/user-icon/user-icon.component';
import { Comment } from '../comment.interface';

@Component({
	selector: 'app-comment-short',
	imports: [DatePipe, FormsModule, RatingModule, UserIconComponent],
	templateUrl: './comment-short.component.html',
	styleUrl: './comment-short.component.scss',
})
export class CommentShortComponent {
	private readonly _userService = inject(PublicUserService);

	readonly comment = input.required<Comment>();

	protected readonly author = computed(() =>
		this._userService.getById(this.comment().authorId)(),
	);
}
