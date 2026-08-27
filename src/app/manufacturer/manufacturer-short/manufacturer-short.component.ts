import { Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ManufacturerIconComponent } from '../manufacturer-icon/manufacturer-icon.component';
import { Manufacturer } from '../manufacturer.interface';

@Component({
	selector: 'app-manufacturer-short',
	imports: [RouterLink, ManufacturerIconComponent],
	templateUrl: './manufacturer-short.component.html',
	styleUrl: './manufacturer-short.component.scss',
})
export class ManufacturerShortComponent {
	readonly manufacturer = input.required<Manufacturer>();
}
