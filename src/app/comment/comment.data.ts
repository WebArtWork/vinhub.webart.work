import commentData from '../../data/comment/comment.json';
import { Comment, CommentTargetType } from './comment.interface';

type RawComment = Partial<Comment>;

const rawComments = commentData as RawComment[];

export const comments: Comment[] = rawComments.map(_toComment);

function _toComment(raw: RawComment): Comment {
	return {
		_id: _stringOrFallback(raw._id),
		targetType: _oneOf<CommentTargetType>(
			raw.targetType,
			['car', 'listing', 'dealership', 'salesperson'],
			'listing',
		),
		targetId: _stringOrFallback(raw.targetId),
		authorId: _stringOrFallback(raw.authorId),
		rating: typeof raw.rating === 'number' ? raw.rating : undefined,
		text: _stringOrFallback(raw.text),
		createdAt: _stringOrFallback(raw.createdAt),
	};
}

function _stringOrFallback(
	value: string | null | undefined,
	fallback = '',
): string {
	return typeof value === 'string' && value.trim().length > 0
		? value.trim()
		: fallback;
}

function _oneOf<T extends string>(
	value: string | null | undefined,
	allowed: T[],
	fallback: T,
): T {
	return allowed.includes(value as T) ? (value as T) : fallback;
}
