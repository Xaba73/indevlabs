import styles from './Header.module.css';
const Header = () => {
  return (
    <header className={styles.header}>
      <h1>Найди потерявшееся число последовательности</h1>
      <p className={styles.joke}>оно очень хочет домой </p>
      <h3 className={styles.company}>
        Подготовленно специально для компании Индевлабс
      </h3>
    </header>
  );
};

export default Header;
