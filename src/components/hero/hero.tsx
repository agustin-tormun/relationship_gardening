import styles from '@/styles/hero/hero.module.css'

const Hero = () => {
  return(
    <div className={styles.__main_container}>
      <div>
        <h2 className={styles.__txt_hero}>Nurture love, watch bonds blossom.</h2>
      </div>
      <div>
      <button className={styles.btn__login} onClick={() => console.log('login')}>Go Garden My Loved Ones 🌱</button>
      </div>
    </div>
  )
}

export default Hero