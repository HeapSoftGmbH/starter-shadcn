import { createNavigation } from 'next-intl/navigation';
import { defineRouting } from 'next-intl/routing';

import { locales } from './languages';

export const routing = defineRouting({
	locales,
	localePrefix: 'always',
	defaultLocale: 'en'
});

export const { Link, redirect, usePathname, useRouter } = createNavigation(routing);
