import { hasLocale } from 'next-intl';
import { notFound } from 'next/navigation';

import { routing } from '@/i18n/navigation';
import { StoreProvider } from '@/lib/store';

import '../globals.css';

export default async function RootLayout({
	children,
	params
}: Readonly<{
	children: React.ReactNode;
	params: Promise<{ locale: string }>;
}>) {
	const { locale } = await params;

	if (!hasLocale(routing.locales, locale)) {
		notFound();
	}

	return (
		<html lang={locale}>
			<body>
				<StoreProvider>{children}</StoreProvider>
			</body>
		</html>
	);
}
