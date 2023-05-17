import styles from '@/styles/about/about.module.css'
const About = () => {
  return(
    <div className={styles.__bg_main}>
      <div>
        <p className={styles.__txt_about}>
          Relationships are like gardens, flourishing with love and growth. 
          Just as a garden needs watering and care to bloom, relationships 
          thrive when nurtured and tended to. From tending to communication and 
          understanding, to cultivating trust and support, taking care of our 
          relationships is key to cultivating a beautiful and fulfilling 
          connection that lasts.
          <br/><br/>
          With <b className={styles.__txt_highlight}>Relationship Gardening</b> you can keep track of your connections 
          with loved ones, <b className={styles.__txt_highlight}>making sure your relationships are always in bloom.</b>
        </p>
      </div>
      <div>
        <img
          className={styles.__img_hero}
          src="/images/hero_og_white_tiny.png"
          alt="Image of the cycle between seeds turning into a tree and a person turning into various persons"
        />
      </div>
    </div>
  )
}

export default About