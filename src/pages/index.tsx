import NavBar from '@/components/navbar/navbar'
import Hero from '@/components/hero/hero'
import About from '@/components/about/about'
import styles from '@/styles/index.module.css'


export default function Home() {
  return(
    <>
      <NavBar/>
      <div>
        <section className={styles.__body_custom}>
          <Hero/>
        </section>
        <section>
          <About />
        </section>
      </div>
    </>
  )
}
