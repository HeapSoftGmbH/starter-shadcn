import { pick } from 'lodash';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';

export default async function TranslationsProvider({
	children,
	namespaces
}: {
	children: React.ReactNode;
	namespaces: string[];
}) {
	const messages = await getMessages();

	return (
		<NextIntlClientProvider messages={pick(messages, ...namespaces)}>
			{children}
		</NextIntlClientProvider>
	);
}
