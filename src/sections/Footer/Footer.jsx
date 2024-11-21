import styles from './FooterStyles.module.css';

function Footer() {
  return (
    <section id="footer" className={styles.container}>
      <p>
        &copy; 2024 prathamngundikere <br />
        All rights reserved
        <a href="src/assets/3.jpg" target="_blank" rel="noopener noreferrer">
  Open Image
</a>
      </p>
    </section>
  );
}

export default Footer;
