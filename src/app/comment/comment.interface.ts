export type CommentTargetType =
	| 'car'
	| 'listing'
	| 'dealership'
	| 'salesperson';

export interface Comment {
	_id: string;
	targetType: CommentTargetType;
	targetId: string;
	authorId: string;
	rating?: number;
	text: string;
	createdAt: string;
}
