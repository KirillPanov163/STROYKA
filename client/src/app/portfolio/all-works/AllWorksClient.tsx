export const dynamic = 'force-dynamic';

import Link from 'next/link';
import styles from './allWorks.module.css';
import { MyWork } from '@/entities/portfolio/model';
import { transliterate } from '@/entities/Translater';

const AllWorksServer = async () => {
  const works = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/my_work`, {
    cache: 'no-store',
  }).then((res) => res.json());

  if (!works?.length) {
    return <div className={styles.empty}>Нет доступных работ</div>;
  }

  return (
    <div className={styles.container}>
      <div className={styles.headerContainer}>
        <Link href="/" className={styles.backButton} aria-label="Назад">
          Назад
        </Link>
        <h1 className={styles.title}>Все наши работы</h1>
      </div>

      <div className={styles.worksGrid}>
        {works.map((work: MyWork) => (
          <div key={work.id} className={styles.workCard}>
            <h3 className={styles.workTitle}>{work.title}</h3>

            {work.image && (
              <div className={styles.imageContainer}>
                <img
                  src={work.image}
                  alt={work.title || 'Изображение работы'}
                  className={styles.workImage}
                />
              </div>
            )}

            <Link
              href={`/portfolio/details/${transliterate(work.title || 'наша работа')}-${
                work.id
              }`}
              className={styles.detailsButton}
            >
              Подробнее
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllWorksServer;
