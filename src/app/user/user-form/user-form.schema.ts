import { required, schema } from '@angular/forms/signals';
import { PublicUser } from '../user.interface';

export const userFormSchema = schema<PublicUser>((path) => {
	required(path.name);
});
