import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";
import { TbBrandLinkedin } from "react-icons/tb";
import { CgInstagram } from "react-icons/cg";
// import MyProjects from "./component/myprojects/page"

export default function Home() {
  return (
    <>
      <div className={styles.introBox}>
        <div className={styles.box}>
          <p className={styles.hii}>Hii, I'm Rajnish Sharma</p>
          <h1 className={styles.position}>Software developer</h1>
          <p className={styles.bio}>With a passion for full-stack development, <br />
            I am a proficient developer capable of designing and developing complex applications with expertise in React and Node.js.</p>


          <div className={styles.btn}>
            <div>
              <button className={styles.project}><Link href="/contact">
                <strong>GET IN TOUCH -</strong>
              </Link></button>
            </div>
            <div className={styles.icons}>

              <div>
                <Link href="https://www.linkedin.com/in/rajnish-sharma-48a612249/"><TbBrandLinkedin href="www.linkedin.com" className={styles.linkedin} /></Link>

              </div>&nbsp;

              <div>
                <CgInstagram className={styles.instagram} />
              </div>
            </div>
          </div>

        </div>


      </div>

      {/* <div>
        <MyProjects />
      </div> */}



    </>
  );
}
