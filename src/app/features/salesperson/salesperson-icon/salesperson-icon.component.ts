import { Component, input } from '@angular/core';
import { AvatarModule } from '@wawjs/ngx-prime/avatar';
import { Salesperson } from '../salesperson.interface';

@Component({
	selector: 'app-salesperson-icon',
	imports: [AvatarModule],
	templateUrl: './salesperson-icon.component.html',
	styleUrl: './salesperson-icon.component.scss',
})
export class SalespersonIconComponent {
	readonly salesperson = input.required<Salesperson>();
}
