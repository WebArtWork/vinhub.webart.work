import { required, schema } from '@angular/forms/signals';
import { Salesperson } from '../salesperson.interface';

export const salespersonFormSchema = schema<Salesperson>((path) => {
	required(path.name);
	required(path.dealershipId);
});
