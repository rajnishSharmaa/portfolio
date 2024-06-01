import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";
import { TbBrandLinkedin } from "react-icons/tb";
import { CgInstagram } from "react-icons/cg";

// import 'bootstrap/dist/css/bootstrap.css';

export default function Home() {
  const technologies = [
    ["React.js", "Next.js", "JavaScript ", "Bootstrap"],
    ["Node.js", "Express.js", "Socket.io"],
  ];
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
                <strong style={{ color: "white" }}>GET IN TOUCH -</strong>
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





      <p className={styles.aboutme} >____About Me</p>

      <div className={styles.about}>
        <div className={styles.introduction}>
          <p className={styles.myself}>MySelf Rajnish Sharma, and I'm passionate about creating quality products that meet all of the customer's needs, and I love learning new techniques and technologies that allow me to make that happen.</p>

          <p className={styles.techlist}> Here are a few technologies I have been working with recently :</p>
          <div className={styles.tech}>
            <div>

              {technologies[0].map((tech, index) => {
                return (
                  <div key={index} className="flex flex-row items-center space-x-2">

                    <span className="text-gray-400 sm:text-sm text-xs">&#x2022; {tech}</span>
                  </div>
                );
              })}


            </div>
            <div>
              {technologies[1].map((tech, index) => {
                return (
                  <div key={index} className="flex flex-row items-center space-x-2">
                    {/* <ArrowIcon className={"h-3 w-3 text-AAsecondary"} /> */}
                    <span className="text-gray-400 sm:text-sm text-xs">&#x2022; {tech}</span>
                  </div>
                );
              })}
            </div>

          </div>
        </div>
        <div className={styles.myimg}>

        {/* <img className={styles.img} src="/img.jpg" alt="Girl in a jacket" width="310" height="350"/> */}
        <img className={styles.img} src="https://img.freepik.com/free-photo/view-3d-man-holding-laptop_23-2150709818.jpg?t=st=1717231700~exp=1717235300~hmac=dbca6ac0d2fd5d1a89cd848aff29c716e2002299a8e82ff58559e15009afa255&w=740" alt="Girl in a jacket" width="310" height="350"/>

        </div>

      </div>








      <div className={styles.services}>
        <p className={styles.myservices} >SERVICES</p>

        <h4 className={styles.servicesheading}>D E S I G N &nbsp; S E R V I C E S &nbsp; I&nbsp;  A M &nbsp; P R O V I D I N G</h4>


        <div>
          <div className={styles.allwork}>
            <div  ><p  >Provide best web development</p>
              <p className={styles.cardtitle}>Website Design</p>
            </div>

            <div  ><p >Mobile App</p>
              <p className={styles.cardtitle}>Chat Application</p>
            </div>


          </div>

        </div>




      </div>

      {/* 
      <p className={styles.mywork} >EXPERIENCE</p>

      <h4 className={styles.recent}>MY WORK EXPERIENCE</h4>

      <div className={styles.experience}>

        <div className={styles.exp}>
          <div className={styles.backend}>
            <h1>INTERNSHIP</h1>
            <p>NOV 2022 - JAN 2023</p>

          </div>
          <div className={styles.about}>
            <h2>About Company</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor.Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation .</p>
          </div>
        </div>

      </div>

      <div className={styles.experience}>

        <div className={styles.exp}>
          <div className={styles.backend}>
            <h1>Software Developer</h1>
            <p>JAN 2023 - PRESENT</p>

          </div>
          <div className={styles.about}>
            <h2>About Company</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor.Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation .</p>
          </div>
        </div>

      </div>

    */}




      <div className={styles.footer}>
        <p>© 2023 copyright all right reserved</p>

      </div>




    </>
  );
}
