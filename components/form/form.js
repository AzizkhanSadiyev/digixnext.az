'use client';

import { useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import '@/styles/form.css';
import styles from './form.module.css';

export default function Form() {
  const { t } = useTranslation();

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phoneRaw: '',
    phoneE164: '',
    message: '',
  });

  const [phoneError, setPhoneError] = useState('');
  const telRef = useRef(null);
  const itiRef = useRef(null);

  // AZ maska: 0XX XXX XX XX
  const formatAZ = (digits) => {
    if (!digits) return '';
    const withZero = digits[0] === '0' ? digits : '0' + digits;
    const d = withZero.slice(0, 10); // 0 + 9 rəqəm
    const p1 = d.slice(0, 3); // 051
    const p2 = d.slice(3, 6); // 406
    const p3 = d.slice(6, 8); // 92
    const p4 = d.slice(8, 10); // 24
    return [p1, p2, p3, p4].filter(Boolean).join(' ');
  };

  useEffect(() => {
    let destroyed = false;

    (async () => {
      const intlTelInput = (await import('intl-tel-input')).default;

      if (telRef.current && !destroyed) {
        itiRef.current = intlTelInput(telRef.current, {
          initialCountry: 'az',
          separateDialCode: true,
          nationalMode: true,         // milli format (0XX XXX XX XX)
          autoPlaceholder: 'aggressive',
          formatOnDisplay: true,
          utilsScript:
            'https://cdn.jsdelivr.net/npm/intl-tel-input@18.5.6/build/js/utils.js',
        });

        const sync = () => {
          const raw = telRef.current.value;
          const isValid = raw === '' ? true : itiRef.current.isValidNumber();
          setFormData((s) => ({
            ...s,
            phoneRaw: raw,
            phoneE164: itiRef.current.getNumber() || '',
          }));
          setPhoneError(isValid ? '' : t('form_section.error_phone', 'Nömrə düzgün deyil'));
        };

        const handleKeyDown = (e) => {
          const allowedControl = [
            'Backspace', 'Delete', 'Tab', 'Escape', 'Enter',
            'ArrowLeft', 'ArrowRight', 'Home', 'End',
          ].includes(e.key);
          const isMetaCombo =
            (e.ctrlKey || e.metaKey) &&
            ['a', 'c', 'v', 'x'].includes(e.key.toLowerCase());
          const isDigit = /^[0-9]$/.test(e.key);
          if (allowedControl || isMetaCombo || isDigit) return;
          e.preventDefault();
        };

        const handlePaste = (e) => {
          e.preventDefault();
          const txt = (e.clipboardData || window.clipboardData).getData('text') || '';
          const digits = txt.replace(/\D/g, '');
          const iso2 = itiRef.current.getSelectedCountryData()?.iso2;
          telRef.current.value = iso2 === 'az' ? formatAZ(digits) : digits;
          sync();
        };

        const handleInput = () => {
          const digits = telRef.current.value.replace(/\D/g, '');
          const iso2 = itiRef.current.getSelectedCountryData()?.iso2;
          telRef.current.value = iso2 === 'az' ? formatAZ(digits) : digits;
          sync();
        };

        const handleCountryChange = () => {
          // ölkə dəyişəndə sahəni təmizlə ki, köhnə format qalmasın
          telRef.current.value = '';
          setPhoneError('');
          sync();
        };

        telRef.current.addEventListener('keydown', handleKeyDown);
        telRef.current.addEventListener('paste', handlePaste);
        telRef.current.addEventListener('input', handleInput);
        telRef.current.addEventListener('countrychange', handleCountryChange);

        // ilkin sync
        sync();

        // cleanup
        return () => {
          try {
            telRef.current?.removeEventListener('keydown', handleKeyDown);
            telRef.current?.removeEventListener('paste', handlePaste);
            telRef.current?.removeEventListener('input', handleInput);
            telRef.current?.removeEventListener('countrychange', handleCountryChange);
            itiRef.current?.destroy();
          } catch {}
        };
      }
    })();

    return () => { destroyed = true; };
  }, [t]);

  const handleChange = (e) =>
    setFormData((s) => ({ ...s, [e.target.name]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    const isValid = itiRef.current?.isValidNumber?.();
    if (!isValid) {
      setPhoneError(t('form_section.error_phone', 'Nömrə düzgün deyil'));
      return;
    }
    const payload = { ...formData, phone: formData.phoneE164 };
    console.log(payload); // TODO: API çağırışı
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      {/* Ad & Soyad → 2 sütun */}
      <div className={styles.twoCol}>
        <div className="form_item">
          <input
            type="text"
            name="firstName"
            placeholder={t('form_section.fields.placeholder_firstName', 'Ad')}
            className="item_input"
            value={formData.firstName}
            onChange={handleChange}
          />
        </div>
        <div className="form_item">
          <input
            type="text"
            name="lastName"
            placeholder={t('form_section.fields.placeholder_lastName', 'Soyad')}
            className="item_input"
            value={formData.lastName}
            onChange={handleChange}
          />
        </div>
      </div>

      <div className="form_item">
        <input
          type="email"
          name="email"
          placeholder={t('form_section.fields.placeholder_email', 'E-mail')}
          className="item_input"
          value={formData.email}
          onChange={handleChange}
        />
        {!formData.email.includes('@') && formData.email.length > 0 && (
          <div className={styles.error_type}>
            {t('form_section.error_email', 'E-mail düzgün deyil')}
          </div>
        )}
      </div>

      {/* Telefon — intl-tel-input + AZ maska */}
      <div className="form_item">
        <input
          ref={telRef}
          type="tel"
        /* Safari mobil üçün rəqəmsal klaviatura */
          inputMode="numeric"
          autoComplete="tel"
          placeholder={t('form_section.fields.placeholder_phone', 'Telefon nömrəsi')}
          className={`item_input ${styles.telInputReset}`}
        />
        {phoneError && <div className={styles.error_type}>{phoneError}</div>}
      </div>

      <div className="form_item">
        <label className="itm_inp_label">
          {t('form_section.fields.message', 'Mesaj')}
        </label>
        <textarea
          name="message"
          className="item_input"
          placeholder={t('form_section.fields.placeholder_message', 'Type your message here')}
          style={{ minHeight: '120px' }}
          value={formData.message}
          onChange={handleChange}
        />
      </div>

      <div className="form_item">
        <div className={styles.form_help}>Helper text</div>
      </div>

      <div className="form_item">
        <button type="submit" className={`${styles.btn_item} btn_item primary`}>
          {t('form_section.send', 'Mesajı göndər')}
        </button>
      </div>
    </form>
  );
}
