import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { ButtonModule } from '@wawjs/ngx-prime/button';
import { AccordionModule } from '@wawjs/ngx-prime/accordion';
import { TranslateDirective, TranslateService } from '@wawjs/ngx-translate';
import { LeadFormComponent } from '../../../shared/lead-form/lead-form.component';

@Component({
	selector: 'app-for-manufacturers',
	imports: [ButtonModule, AccordionModule, LeadFormComponent, TranslateDirective],
	templateUrl: './for-manufacturers.component.html',
	styleUrl: './for-manufacturers.component.scss',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ForManufacturersPageComponent {
	readonly translateService = inject(TranslateService);
	readonly showForm = signal(false);

	protected readonly faq = [
		{
			question: this.translateService.translate('What does a manufacturer profile show?')(),
			answer: this.translateService.translate(
				'Your brand, model catalog, and every car listed on VIN Hub that carries your name — all verified against a digital passport.',
			)(),
		},
		{
			question: this.translateService.translate('Do dealerships need to be onboarded separately?')(),
			answer: this.translateService.translate(
				'Each dealership manages its own profile and inventory; your manufacturer profile links to all of them automatically.',
			)(),
		},
		{
			question: this.translateService.translate('Is there a cost to join as a manufacturer?')(),
			answer: this.translateService.translate(
				'Getting listed is free — reach out and we will set up your profile and model catalog.',
			)(),
		},
	];
}
