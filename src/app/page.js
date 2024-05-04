import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";
import { TbBrandLinkedin } from "react-icons/tb";
import { CgInstagram } from "react-icons/cg";

export default function Home() {
  return (
    <>

      <div className={styles.introBox}>
        <div className={styles.box}>
          <p className={styles.hii}>I'm Rajnish Sharma</p>
          <h1 className={styles.position}>Software developer</h1>
          <p className={styles.bio}>With a passion for full-stack development, <br />
            I am a proficient developer capable of designing and developing complex applications with expertise in React and Node.js.</p>


          <div className={styles.btn}>
            <div>
              <button className={styles.getintouch}><Link href="/contact">
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




{/* 
      <p className={styles.mywork} >MY WORK</p>

      <h4 className={styles.recent}>R E C E N T &nbsp;&nbsp; P R O J E C T</h4>

      <div className={styles.allwork}>
        <div ><img className={styles.card} src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
          <p className={styles.cardtitle}>Website Design</p></div>&nbsp;&nbsp;&nbsp;&nbsp;
        <div ><img className={styles.card} src="https://images.unsplash.com/photo-1619410283995-43d9134e7656?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
          <p className={styles.cardtitle}>Backend Restful API's</p></div>&nbsp;&nbsp;&nbsp;&nbsp;
        <div ><img className={styles.card} src="https://images.unsplash.com/photo-1484807352052-23338990c6c6?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
          <p className={styles.cardtitle}>Chat Application</p></div>


      </div> */}

      {/* <div className={styles.allwork}>
        <div ><img className={styles.card} src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
          <p className={styles.cardtitle}>Website Design</p></div>
        <div ><img className={styles.card} src="https://images.unsplash.com/photo-1619410283995-43d9134e7656?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
          <p className={styles.cardtitle}>Backend Restful API's</p></div>
        <div ><img className={styles.card} src="https://images.unsplash.com/photo-1484807352052-23338990c6c6?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
          <p className={styles.cardtitle}>Chat Application</p></div>


      </div> */}



      {/* <div className={styles.services}>
        <p className={styles.myservices} >SERVICES</p>

        <h4 className={styles.servicesheading}>D E S I G N &nbsp; S E R V I C E S &nbsp; I&nbsp;  A M &nbsp; P R O V I D I N G</h4>


        <div>
          <div className={styles.allwork}>
            <div ><p className={styles.servicescard} >Provide best web development</p>
              <p className={styles.cardtitle}>Website Design</p>
            </div>
            <div ><p className={styles.servicescard}>Admin Panel</p>
              <p className={styles.cardtitle}>Backend Restful API's</p>
              </div>
            <div ><p className={styles.servicescard}>Mobile App</p>
              <p className={styles.cardtitle}>Chat Application</p>
              </div>


          </div>

        </div>




      </div> */}

      
{/* <p className={styles.mywork} >EXPERIENCE</p>

<h4 className={styles.recent}>MY WORK EXPERIENCE</h4> */}
    
    <div className={styles.experience}>

      <div className={styles.exp}>
        <div className={styles.backend}>
          <h1>Backend Dveloper</h1>
          <p>NOV 2023 - PRESENT</p>

        </div>
        {/* <div className={styles.about}>
          <h2>About Company</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor.Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation .</p>
        </div> */}
      </div>

    </div>



  <div className={styles.footer}>
    <p>© 2023 copyright all right reserved</p>

  </div>




    </>
  );
}
