export type PublicUserRole = 'buyer' | 'seller' | 'dealer';

export interface PublicUser {
	_id: string;
	name: string;
	role: PublicUserRole;
	avatar: string;
	bio: string;
	location: string;
	memberSince: string;
	listingsCount: number;
	rating: number;
}
