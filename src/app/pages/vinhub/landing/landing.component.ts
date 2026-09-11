import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ButtonModule } from '@wawjs/ngx-prime/button';
import { CardModule } from '@wawjs/ngx-prime/card';
import { TranslateDirective } from '@wawjs/ngx-translate';
import { FooterComponent } from '../../../layouts/footer/footer.component';

interface LandingPillar {
	icon: string;
	title: string;
	description: string;
	link: string;
}

interface LandingFeature {
	icon: string;
	title: string;
	description: string;
}

interface LandingRole {
	label: string;
	link: string;
}

@Component({
	selector: 'app-landing',
	imports: [RouterLink, ButtonModule, CardModule, FooterComponent, TranslateDirective],
	templateUrl: './landing.component.html',
	styleUrl: './landing.component.scss',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LandingPageComponent {
	/** The three pillars of the marketplace — what the platform actually connects. */
	protected readonly pillars: LandingPillar[] = [
		{
			icon: 'pi-car',
			title: 'Авто',
			description: 'Оголошення про продаж і оренду з цифровим паспортом кожного авто.',
			link: '/cars',
		},
		{
			icon: 'pi-building',
			title: 'Дилери',
			description: 'Перевірені дилерські центри з публічним профілем і рейтингом.',
			link: '/dealerships',
		},
		{
			icon: 'pi-briefcase',
			title: 'Виробники',
			description: 'Каталоги моделей від виробників, підтверджені записами в паспорті.',
			link: '/manufacturers',
		},
	];

	protected readonly features: LandingFeature[] = [
		{
			icon: 'pi-shield',
			title: 'Цифровий паспорт',
			description:
				'Сервіс, ремонти, аварії та зміна власників — в одній перевіреній історії авто.',
		},
		{
			icon: 'pi-search',
			title: 'Пошук за фактами',
			description: 'Фільтруйте оголошення за маркою, моделлю та типом угоди — продаж або оренда.',
		},
		{
			icon: 'pi-comments',
			title: 'Прямий контакт',
			description: 'Пишіть продавцю чи дилеру напряму з оголошення, без посередників.',
		},
	];

	protected readonly roles: LandingRole[] = [
		{ label: 'Для покупців', link: '/for-users' },
		{ label: 'Для продавців', link: '/for-salespeople' },
		{ label: 'Для дилерів', link: '/for-dealerships' },
		{ label: 'Для виробників', link: '/for-manufacturers' },
		{ label: 'Для сервісних центрів', link: '/for-service-centers' },
	];
}
