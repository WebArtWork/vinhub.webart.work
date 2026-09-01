import { Component, input } from '@angular/core';
import { Dealership } from '../dealership.interface';

@Component({
	selector: 'app-dealership-icon',
	templateUrl: './dealership-icon.component.html',
	styleUrl: './dealership-icon.component.scss',
})
export class DealershipIconComponent {
	readonly dealership = input.required<Dealership>();
}
