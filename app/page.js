'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

export default function RedirectHome() {
    const router = useRouter();
    const [hasMounted, setHasMounted] = useState(false);

    useEffect(() => {
        if(typeof window === 'undefined') return;

        setHasMounted(true);

        const browserLang = navigator.language?.slice(0, 2) || 'az';
        const supportedLangs = ['az', 'en', 'ru'];
        const finalLang = supportedLangs.includes(browserLang) ? browserLang : 'az';

        router.replace(`/${finalLang}`);
    }, []);

    if(!hasMounted) return null;

    return null;
}
