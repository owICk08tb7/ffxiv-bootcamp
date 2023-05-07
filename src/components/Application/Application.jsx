import { React } from 'react';
import { useTranslation } from 'react-i18next';

import styles from 'src/components/Application/Application.module.scss';
import { Arena } from 'src/components/Arena';

export function Application() {
  const { t } = useTranslation();

  return (
    <div className={styles.container}>
      <h1>
        {t('welcomeToBootcamp')}
      </h1>
      <Arena />
    </div>
  );
}
