import { redirect } from 'next/navigation';

export default function RedirectHome() {
    const supportedLangs = ['az', 'en', 'ru'];
    const defaultLang = 'az';

    redirect(`/${defaultLang}`);
}