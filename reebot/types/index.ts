// IUser interface
export interface IUser {
	_id: string;
	email: string | null | undefined;
	fullname: string | null | undefined;
	telephone: string;
	gender?: string;
	id: number; // Add this line
}
