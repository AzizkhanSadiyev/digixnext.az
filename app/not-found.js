'use client';
import 'styles/globals.css';
import 'styles/button.css';
import Link from 'next/link';
import { useRouter, usePathname } from 'next/navigation';
import styles from './not-found.module.css';

export default function NotFound() {
  const router = useRouter();

  return (
    <main className={styles.wrap} aria-labelledby="nf-title" role="alert">
      <div className={styles.inner}>
        
        <div className={styles.illustration}>
          <img src="/assets/icons/404.svg" alt="" />
        </div>

        <h1 id="nf-title" className={styles.title}>404 - Page Not Found</h1>
        <p className={styles.subtitle}>
            Oh dear, it seems like you&apos;ve ventured off the map.
        </p>

        <div className={styles.btnRow}>
            <button type="button" className="btn_item white" onClick={() => router.back()}>
                Go back
            </button>
            <a href={`/${typeof window !== 'undefined' ? window.location.pathname.split('/')[1] : `${currentLang}`}`} className="btn_item primary">
                Take me home
            </a>
        </div>
      </div>
    </main>
  );
}
