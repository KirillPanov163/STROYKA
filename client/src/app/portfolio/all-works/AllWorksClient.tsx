export const dynamic = 'force-dynamic';

import Link from 'next/link';
import styles from './allWorks.module.css';
import { MyWork } from '@/entities/portfolio/model';
import { transliterate } from '@/entities/Translater';
import Image from 'next/image';

const AllWorksServer = async () => {
  const url = `${process.env.NEXT_PUBLIC_API_URL}/my-work`;
  // const url = `http://server:3001/api/my-work`;

  console.log('📡 Запрос по адресу:', url);
  const works = await fetch(url, { cache: 'no-store' }).then((works) => works.json());

  // const works = await res.json();
  console.log('✅ Полученные данные:', works);

  if (!works?.data.length) {
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
        {works.data.map((work: MyWork) => (
          <div key={work.id} className={styles.workCard}>
            <h3 className={styles.workTitle}>{work.title}</h3>

            {work.image && (
              <div className={styles.imageContainer}>
                <Image
                  src={`http://localhost:3001${work.image}`}
                  alt={work.title || 'Изображение работы'}
                  className={styles.workImage}
                  fetchPriority="high"
                />
              </div>
            )}

            <Link
              href={`/portfolio/details/${transliterate(work.title || 'my_work')}-${
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
