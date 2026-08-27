import { Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SalespersonIconComponent } from '../salesperson-icon/salesperson-icon.component';
import { Salesperson } from '../salesperson.interface';

@Component({
	selector: 'app-salesperson-short',
	imports: [RouterLink, SalespersonIconComponent],
	templateUrl: './salesperson-short.component.html',
	styleUrl: './salesperson-short.component.scss',
})
export class SalespersonShortComponent {
	readonly salesperson = input.required<Salesperson>();
}
