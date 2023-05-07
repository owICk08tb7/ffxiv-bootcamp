import { React } from 'react';
import { useTranslation } from 'react-i18next';

export function Application() {
  const { t } = useTranslation();

  return (
    <div>
      {t('welcomeToBootcamp')}
    </div>
  );
}
