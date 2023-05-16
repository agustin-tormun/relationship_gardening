import NavBar from '@/components/navbar/navbar'
import Hero from '@/components/hero/hero'
import styles from '@/styles/index.module.css'


export default function Home() {
  return(
    <>
      <NavBar/>
      <div className={styles.__body_custom}>
        <section>
          <Hero/>
        </section>
      </div>
    </>
  )
}
