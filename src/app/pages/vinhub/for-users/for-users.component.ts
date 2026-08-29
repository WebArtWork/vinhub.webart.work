import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { ButtonModule } from '@wawjs/ngx-prime/button';
import { AccordionModule } from '@wawjs/ngx-prime/accordion';
import { TranslateDirective, TranslateService } from '@wawjs/ngx-translate';
import { LeadFormComponent } from '../../../shared/lead-form/lead-form.component';

@Component({
	selector: 'app-for-users',
	imports: [ButtonModule, AccordionModule, LeadFormComponent, TranslateDirective],
	templateUrl: './for-users.component.html',
	styleUrl: './for-users.component.scss',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ForUsersPageComponent {
	readonly translateService = inject(TranslateService);
	readonly showForm = signal(false);

	protected readonly faq = [
		{
			question: this.translateService.translate('How does VIN Hub verify a car’s history?')(),
			answer: this.translateService.translate(
				'Every listing links to a digital passport built from service, repair, accident, and ownership records submitted by dealerships, salespeople, and past owners.',
			)(),
		},
		{
			question: this.translateService.translate('Is browsing and messaging free?')(),
			answer: this.translateService.translate(
				'Yes — exploring listings, viewing digital passports, and contacting sellers is free for buyers and renters.',
			)(),
		},
		{
			question: this.translateService.translate('Can I buy, sell, and rent from the same account?')(),
			answer: this.translateService.translate(
				'Yes, one VIN Hub account covers browsing listings, publishing your own, and tracking cars you’ve saved.',
			)(),
		},
	];
}
