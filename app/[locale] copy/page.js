'use client';

import { useTranslation } from 'react-i18next';
import { useEffect, useState } from 'react';

import Manshet from '../../components/manshet/manshet';
import Slider from '../../components/slider/slider';
import Services from '../../components/AdvantCard/Card';
import Why from '../../components/why/why';
import Levels from '../../components/levels/levels';
import How from '../../components/how/how';
import Corps from '../../components/corps/corps';
import FAQ from '../../components/faq/faq';
import Form from '../../components/form/form';

export default function Page() {


  const { t, i18n } = useTranslation();
  const [ready, setReady] = useState(false);

  useEffect(() => {
    // Dil yüklendikten sonra render et
    if(i18n.isInitialized) {
      setReady(true);
    } else {
      i18n.on('initialized', () => setReady(true));
    }
  }, [i18n]);

  if(!ready) return null; // ya da <Loading />

  return (
    <div className="section_wrap wrap_container">
      <Manshet />
      <Slider />
      <Services />
      <Why />
      <Levels />
      <How />
      <Corps />
      <FAQ />
      <Form />
    </div>
  );
}
