import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { ButtonModule } from '@wawjs/ngx-prime/button';
import { AccordionModule } from '@wawjs/ngx-prime/accordion';
import { TranslateDirective, TranslateService } from '@wawjs/ngx-translate';
import { LeadFormComponent } from '../../../shared/lead-form/lead-form.component';

@Component({
	selector: 'app-for-dealerships',
	imports: [ButtonModule, AccordionModule, LeadFormComponent, TranslateDirective],
	templateUrl: './for-dealerships.component.html',
	styleUrl: './for-dealerships.component.scss',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ForDealershipsPageComponent {
	readonly translateService = inject(TranslateService);
	readonly showForm = signal(false);

	protected readonly faq = [
		{
			question: this.translateService.translate('How much does a dealership partnership cost?')(),
			answer: this.translateService.translate(
				'It is free to start — reach out and we will walk you through the details.',
			)(),
		},
		{
			question: this.translateService.translate('Can our salespeople have their own profiles?')(),
			answer: this.translateService.translate(
				'Yes, each salesperson at your dealership gets their own public profile linked to your dealership profile.',
			)(),
		},
		{
			question: this.translateService.translate('What do buyers see on our dealership profile?')(),
			answer: this.translateService.translate(
				'Your description, rating, salespeople, and every active listing in your inventory.',
			)(),
		},
	];
}
