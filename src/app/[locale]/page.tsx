import { getTranslations } from 'next-intl/server';

import { TranslationsProvider } from '@/components/server';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
	const { locale } = await params;

	const t = await getTranslations({ locale, namespace: 'Home.metadata' });

	return {
		title: t('title'),
		description: t('description')
	};
}

export default async function Home() {
	return (
		<TranslationsProvider namespaces={['common', 'Home']}>
			<main></main>
		</TranslationsProvider>
	);
}
