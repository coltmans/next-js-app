
import styles from './page.module.css';
import Link from 'next/link';
import MealsGrid from '@/components/meals/meals-grid';
import { getMeals } from '@/lib/meals';
import { Suspense } from 'react';


async function Meals () {
  const meals = await getMeals();
  return <MealsGrid meals={meals} />;
}

export default function MealsPage() {

  return (
    <>
      <header className={styles.header} >
        <h1>Delicious meals, <span className={styles.highlight}>by you</span></h1>
        <p>Choose your favorite recipe and cook it yourself.</p>
        <p className={styles.cta}>
          <Link href='/meals/share'>Share Your Favorite Recipe</Link>
        </p>
      </header>
      <main>
        <Suspense fallback={<h1 className={styles.loading}>Fetching meals...</h1>}>
          <Meals />
        </Suspense>
      </main>
    </>

  );
}