import { Component, input } from '@angular/core';
import { Manufacturer } from '../manufacturer.interface';

@Component({
	selector: 'app-manufacturer-icon',
	templateUrl: './manufacturer-icon.component.html',
	styleUrl: './manufacturer-icon.component.scss',
})
export class ManufacturerIconComponent {
	readonly manufacturer = input.required<Manufacturer>();
}
