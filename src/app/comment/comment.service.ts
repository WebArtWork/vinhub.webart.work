import { Injectable, computed, signal } from '@angular/core';
import { COMMENTS_FALLBACK } from './comment.const';
import { Comment, CommentTargetType } from './comment.interface';

@Injectable({ providedIn: 'root' })
export class CommentService {
	readonly comments = signal<Comment[]>(COMMENTS_FALLBACK);

	getForTarget(targetType: CommentTargetType, targetId: string) {
		return computed(() =>
			this.comments()
				.filter((comment) => comment.targetType === targetType && comment.targetId === targetId)
				.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()),
		);
	}
}
