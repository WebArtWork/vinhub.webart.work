import { Component, computed, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import {
	ActivatedRouteSnapshot,
	NavigationEnd,
	Router,
	RouterLink,
} from '@angular/router';
import { filter, map, startWith } from 'rxjs';
import { TranslateService } from '@wawjs/ngx-translate';
import { CompanyService } from '../../company/company.service';
import { NavIconComponent } from '../../shared/nav-icon/nav-icon.component';
import { SidebarService } from '../sidebar/sidebar.service';

/** Mirrors the sidebar mode this burger icon represents. */
type BurgerState = 'three-lines' | 'two-lines' | 'one-line' | 'cross';

const BURGER_ICONS: Record<BurgerState, string> = {
	'three-lines': 'bars',
	'two-lines': 'list',
	'one-line': 'minus',
	cross: 'times',
};

interface TopbarNavItem {
	label: string;
	icon: string;
	to: string;
}

@Component({
	selector: 'layout-topbar',
	templateUrl: './topbar.component.html',
	imports: [RouterLink, NavIconComponent],
})
export class TopbarComponent {
	private readonly _router = inject(Router);
	private readonly _sidebarService = inject(SidebarService);
	private readonly _companyService = inject(CompanyService);
	readonly translateService = inject(TranslateService);

	protected readonly navItems: TopbarNavItem[] = [
		{ label: 'Cars', icon: 'car', to: '/' },
		{ label: 'Feed', icon: 'th-large', to: '/feed' },
		{ label: 'Dealerships', icon: 'shop', to: '/' },
	];

	/** Current page's title, for the mobile header (next to the logo). */
	protected readonly pageTitle = toSignal(
		this._router.events.pipe(
			filter(
				(event): event is NavigationEnd =>
					event instanceof NavigationEnd,
			),
			map(() =>
				this._deepestTitle(this._router.routerState.snapshot.root),
			),
			startWith(
				this._deepestTitle(this._router.routerState.snapshot.root),
			),
		),
		{ initialValue: '' },
	);

	protected readonly displayTitle = computed(
		() => this.pageTitle() || this._companyService.company().title,
	);

	readonly burgerState = computed<BurgerState>(() => {
		if (this._sidebarService.isMobile()) {
			return this._sidebarService.mobileOpen() ? 'cross' : 'three-lines';
		}

		switch (this._sidebarService.webMode()) {
			case 'shown':
				return 'three-lines';
			case 'minimized':
				return 'two-lines';
			case 'hidden':
			default:
				return 'one-line';
		}
	});

	readonly burgerIcon = computed(() => BURGER_ICONS[this.burgerState()]);

	onBurgerClick(): void {
		this._sidebarService.burgerClick();
	}

	private _onBurgerHover: ReturnType<typeof setTimeout> | null = null;
	onBurgerHover(hovered: boolean): void {
		if (this._onBurgerHover) {
			clearTimeout(this._onBurgerHover);
			this._onBurgerHover = null;
		}

		if (hovered) {
			this._sidebarService.onBurgerHover(hovered);
		} else {
			this._onBurgerHover = setTimeout(() => {
				this._sidebarService.onBurgerHover(hovered);
				this._onBurgerHover = null;
			}, 2000);
		}
	}

	private _deepestTitle(route: ActivatedRouteSnapshot): string {
		let node = route;
		let title = (node.data?.['meta']?.['title'] as string) ?? '';

		while (node.firstChild) {
			node = node.firstChild;
			const childTitle = node.data?.['meta']?.['title'] as
				| string
				| undefined;
			if (childTitle) title = childTitle;
		}

		return title;
	}
}
