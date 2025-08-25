import 'styles/globals.css';
import 'styles/button.css';
import 'intl-tel-input/build/css/intlTelInput.css';

import Header from 'layouts/Header/Header';
import Footer from 'layouts/Footer/Footer';

import { dir } from 'i18next';
import I18nProvider from '@/components/I18nProvider';
import { loadTranslations } from '@/app/i18n/server';

const SITE_URL = 'https://digix.az';

export async function generateMetadata({ params }) {
  const locale = params.locale || 'az';
  const resources = await loadTranslations(locale, ['meta']);

  const t = (k, fallback = '') => resources?.meta?.[k] ?? fallback;

  return {
    metadataBase: new URL(SITE_URL),
    title: {
      default: t('siteName', 'Digix'),
      template: `%s | ${t('siteName', 'Digix')}`,
    },
    description: t('siteDescription', 'Default site description'),
    alternates: {
      canonical: `/${locale}`,
      languages: {
        az: '/az',
        en: '/en',
        ru: '/ru',
      },
    },
    openGraph: {
      type: 'website',
      siteName: t('siteName', 'Digix'),
      title: t('ogTitle', t('siteName', 'Digix')),
      description: t('ogDescription', t('siteDescription', 'Default site description')),
      url: `/${locale}`,
      images: ['/og.png'],
      locale,
    },
    twitter: {
      card: 'summary_large_image',
      title: t('ogTitle', t('siteName', 'Digix')),
      description: t('ogDescription', t('siteDescription', 'Default site description')),
      images: ['/og.png'],
    },
    robots: { index: true, follow: true },
    icons: { icon: '/favicon.svg' },
  };
}


export const dynamic = 'force-static';
export default async function LocaleLayout({ children, params }) {
  const locale = params.locale;
  const direction = dir(locale);
  const resources = await loadTranslations(locale, ['common']);

  return (
    <html lang={locale} dir={direction}>
      <body>
        <I18nProvider lng={locale} resources={resources}>
          <div className="page">
            <Header />
            <main className="main">{children}</main>
            <Footer />
          </div>
        </I18nProvider>
      </body>
    </html>
  );
}
