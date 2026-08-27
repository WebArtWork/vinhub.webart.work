import { Component, computed, inject, input } from '@angular/core';
import { CommentShortComponent } from '../comment-short/comment-short.component';
import { CommentService } from '../comment.service';
import { CommentTargetType } from '../comment.interface';

@Component({
	selector: 'app-comments-view',
	imports: [CommentShortComponent],
	templateUrl: './comments-view.component.html',
	styleUrl: './comments-view.component.scss',
})
export class CommentsViewComponent {
	private readonly _commentService = inject(CommentService);

	readonly targetType = input.required<CommentTargetType>();
	readonly targetId = input.required<string>();

	protected readonly comments = computed(() =>
		this._commentService.getForTarget(this.targetType(), this.targetId())(),
	);
}
