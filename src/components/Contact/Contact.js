import React from 'react';
import styles from './Contact.module.css';
const Contacts = () => {
  return (
    <React.Fragment>
      <div className={styles.contactsWrapper}>
        <div className={styles.contact}>
          Telegramm:
          <a href='https://t.me/Xaba73' className={styles.link}>
            {' '}
            @Xaba73
          </a>
        </div>
        <div className={styles.contact}>Телефон: +7 951 651 51 85</div>
        <div className={styles.contact}>
          Email: yaroslav.sulik.job@gmail.com
        </div>
        <div>
          HH:
          <a
            href='https://spb.hh.ru/resume/68768270ff0bce63870039ed1f496335533673'
            className={styles.link}
          >
            Резюме
          </a>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Contacts;
