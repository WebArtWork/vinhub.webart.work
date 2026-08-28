import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { ButtonModule } from '@wawjs/ngx-prime/button';
import { AccordionModule } from '@wawjs/ngx-prime/accordion';
import { LeadFormComponent } from '../../../shared/lead-form/lead-form.component';

@Component({
	selector: 'app-for-users',
	imports: [ButtonModule, AccordionModule, LeadFormComponent],
	templateUrl: './for-users.component.html',
	styleUrl: './for-users.component.scss',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ForUsersPageComponent {
	readonly showForm = signal(false);

	protected readonly faq = [
		{
			question: 'How does VIN Hub verify a car’s history?',
			answer:
				'Every listing links to a digital passport built from service, repair, accident, and ownership records submitted by dealerships, salespeople, and past owners.',
		},
		{
			question: 'Is browsing and messaging free?',
			answer:
				'Yes — exploring listings, viewing digital passports, and contacting sellers is free for buyers and renters.',
		},
		{
			question: 'Can I buy, sell, and rent from the same account?',
			answer:
				'Yes, one VIN Hub account covers browsing listings, publishing your own, and tracking cars you’ve saved.',
		},
	];
}
