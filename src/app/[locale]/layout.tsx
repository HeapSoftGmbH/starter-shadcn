import { notFound } from 'next/navigation';

import { routing } from '@/i18n/routing';
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

	if (!routing.locales.includes(locale)) {
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
