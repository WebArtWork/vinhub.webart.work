import { Component, input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { RatingModule } from '@wawjs/ngx-prime/rating';
import { DealershipIconComponent } from '../dealership-icon/dealership-icon.component';
import { Dealership } from '../dealership.interface';

@Component({
	selector: 'app-dealership-short',
	imports: [RouterLink, FormsModule, RatingModule, DealershipIconComponent],
	templateUrl: './dealership-short.component.html',
	styleUrl: './dealership-short.component.scss',
})
export class DealershipShortComponent {
	readonly dealership = input.required<Dealership>();
}
