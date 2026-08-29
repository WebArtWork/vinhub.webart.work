import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ButtonModule } from '@wawjs/ngx-prime/button';
import { CardModule } from '@wawjs/ngx-prime/card';
import { TranslateDirective } from '@wawjs/ngx-translate';
import { FooterComponent } from '../../../layouts/footer/footer.component';

interface LandingScenario {
	icon: string;
	title: string;
	description: string;
}

@Component({
	selector: 'app-landing',
	imports: [RouterLink, ButtonModule, CardModule, FooterComponent, TranslateDirective],
	templateUrl: './landing.component.html',
	styleUrl: './landing.component.scss',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LandingPageComponent {
	protected readonly scenarios: LandingScenario[] = [
		{
			icon: 'pi-question-circle',
			title: 'Buying a used car is a leap of faith',
			description:
				"The seller knows the car's real history. The buyer doesn't — accidents, repairs, and past owners are easy to hide or simply forget.",
		},
		{
			icon: 'pi-shield',
			title: 'One verified history, for everyone',
			description:
				"VIN Hub's digital passport tracks every service, repair, accident, and ownership transfer for a car — so buyers and sellers are looking at the same facts.",
		},
		{
			icon: 'pi-users',
			title: 'From listing to handshake, in one place',
			description:
				'Dealerships, salespeople, and private sellers list cars for sale or rent; buyers browse, ask questions, and reach out — without leaving VIN Hub.',
		},
	];
}
