import styles from '@/styles/hero/hero.module.css'

const Hero = () => {
  return(
    <div className={styles.__main_container}>
      <div>
        <h2 className={styles.__txt_hero}>Nurture love, watch bonds blossom.</h2>
      </div>
      <div>
        <img
          className={styles.__img_hero}
          src="/images/hero_tiny.png"
          alt="Image of the cycle between seeds turning into a tree and a person turning into various persons"
        />
      </div>
    </div>
  )
}

export default Hero