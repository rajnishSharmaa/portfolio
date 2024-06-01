import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";
import { TbBrandLinkedin } from "react-icons/tb";
import { CgInstagram } from "react-icons/cg";
import { colors } from "@nextui-org/react";

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
          <p className={styles.hii}>I'm <span style={{color:"#0CDE6F"}}>Rajnish Sharma</span></p>
          <h1 className={styles.position}>Software developer</h1>
          <p className={styles.bio}>With a passion for full-stack development, <br />
            I am a proficient developer capable of designing and developing complex applications with expertise in React and Node.js.</p>


          <div className={styles.btn}>
            <div>
              <Link href="/contact"><button className={styles.getintouch}>
                <strong style={{ color: "white" }}>GET IN TOUCH -</strong>
                </button> </Link>
            </div>
            <div className={styles.icons}>

              <div>
                <Link href="https://www.linkedin.com/in/rajnish-sharma-48a612249/"><TbBrandLinkedin className={styles.linkedin} /></Link>

              </div>&nbsp;

              <div>
                <Link href="https://www.instagram.com/rajnish_sharmaa?igsh=MWt5ZWh5cThxYXp3bA%3D%3D&utm_source=qr"><CgInstagram className={styles.instagram} /></Link>
                
              </div>
            </div>
          </div>

        </div>


      </div>





      <p className={styles.aboutme} >____<span style={{color:"#0CDE6F"}}>About Me</span></p>

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
        {/* <div className={styles.myimg}> */}

          {/* <img className={styles.img} src="/img.jpg" alt="Girl in a jacket" width="310" height="350"/> */}
          {/* <img className={styles.img} src="https://img.freepik.com/free-photo/view-3d-man-holding-laptop_23-2150709818.jpg?t=st=1717231700~exp=1717235300~hmac=dbca6ac0d2fd5d1a89cd848aff29c716e2002299a8e82ff58559e15009afa255&w=740" alt="Girl in a jacket" width="310" height="350" />

        </div> */}

      </div>







      {/* 
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




      </div> */}

      <div className={styles.whatnext}>
        <p >What's Next?</p>
        <h1 style={{ paddingTop: "12px", color:"#0CDE6F" }}>Get In Touch</h1>

        <p style={{ paddingTop: "25px" }}>Although I'm Always open for any new opportunities,<br /> my inbox is open. Whether you have a question or just want to say hi, I'll try my best to get back to you!</p>


        <div>
          <Link href="/contact"><button className={styles.joinbtn}>
            <strong style={{ color: "white" }}>GET IN TOUCH </strong>
          </button> </Link>
        </div>



      </div>




      <div className={styles.footer}>
        <p>© 2023 copyright all right reserved</p>

      </div>




    </>
  );
}
