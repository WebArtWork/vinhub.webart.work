import userData from '../../../data/user/user.json';
import { PublicUser, PublicUserRole } from './user.interface';

type RawUser = Partial<PublicUser>;

const rawUsers = userData as RawUser[];

export const publicUsers: PublicUser[] = rawUsers.map(_toPublicUser);

function _toPublicUser(raw: RawUser): PublicUser {
	return {
		_id: _stringOrFallback(raw._id),
		name: _stringOrFallback(raw.name),
		role: _oneOf<PublicUserRole>(
			raw.role,
			['buyer', 'seller', 'dealer'],
			'buyer',
		),
		avatar: _stringOrFallback(raw.avatar),
		bio: _stringOrFallback(raw.bio),
		location: _stringOrFallback(raw.location),
		memberSince: _stringOrFallback(raw.memberSince),
		listingsCount: _numberOrFallback(raw.listingsCount),
		rating: _numberOrFallback(raw.rating),
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

function _numberOrFallback(
	value: number | null | undefined,
	fallback = 0,
): number {
	return typeof value === 'number' && Number.isFinite(value)
		? value
		: fallback;
}

function _oneOf<T extends string>(
	value: string | null | undefined,
	allowed: T[],
	fallback: T,
): T {
	return allowed.includes(value as T) ? (value as T) : fallback;
}
