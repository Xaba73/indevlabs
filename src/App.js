import React from 'react';
import Contact from './components/Contact/Contact';
import FormFindNumber from './components/FormFindNumber/FormFindNumber';
import Header from './components/Header/Header';
import styles from './App.module.css';
import Feedback from './components/Feedback/Feedback';
function App() {
  return (
    <div className={styles.app}>
      <Header />
      <FormFindNumber />
      <Feedback />
      <Contact />
    </div>
  );
}

export default App;
