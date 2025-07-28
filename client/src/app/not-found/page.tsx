import Link from 'next/link';
import styles from './NotFoundPage.module.css';

export default function NotFoundPage() {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.errorCode}>404</div>
        <h1 className={styles.title}>Страница не найдена</h1>
        <p className={styles.message}>
          Кажется, мы не можем найти то, что вы ищете. Возможно, страница была перемещена или удалена.
        </p>
        <Link href="/" className={styles.homeButton}>
          Вернуться на главную
        </Link>
      </div>
    </div>
  );
}