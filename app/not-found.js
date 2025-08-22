export default function NotFound() {
    return (
        <div style={{ padding: '2rem', textAlign: 'center' }}>
            <h1>404 - Səhifə tapılmadı</h1>
            <p>Üzr istəyirik, belə bir səhifə mövcud deyil.</p>
            <a href={`/${typeof window !== 'undefined' ? window.location.pathname.split('/')[1] : 'az'}`} style={{ color: 'blue' }}>
                Ana səhifəyə qayıt
            </a>
        </div>
    );
}
