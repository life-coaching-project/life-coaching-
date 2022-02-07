import React from "react";
import NavBar from "./NavBar";
import styles from "./styles.module.css";
import "./AboutUs.css";
const AboutUs = () => {
  return (
    <div>
      <div>
        <NavBar />
        <div className={styles.card}>
          <div>
            <img
              id={styles.img}
              src="https://scontent.ftun4-1.fna.fbcdn.net/v/t1.6435-9/181823556_4088235697864305_6218531912136017614_n.jpg?_nc_cat=102&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=wzuJUoIg3Y4AX9WGLBm&tn=mQ5sbGdf0f_fqFuf&_nc_ht=scontent.ftun4-1.fna&oh=00_AT82ct4Tb00J0c6sb6yBJe7kQ8w5jPfOPFeAbvOo2RSE4A&oe=6223AA02"
              alt=""
            />
            <h4>Hamid</h4>
            <h4>entrepreneur and founder of EVERYTHING corporate </h4>
          </div>
          <div>
            <img
              id={styles.img}
              src="https://scontent.ftun4-1.fna.fbcdn.net/v/t1.6435-9/166332706_4014560808638302_914814810667093701_n.jpg?_nc_cat=101&ccb=1-5&_nc_sid=8bfeb9&_nc_ohc=foyXgmloVWAAX-wshnQ&_nc_ht=scontent.ftun4-1.fna&oh=00_AT8ncyZDqyOsQMQP39XGHx3p1_M51cDW22QKIWaMEHGBxA&oe=622365D9"
              alt=""
            />
            <h4>Badis</h4>
            <h4> saxology professor in manchester with 10 years experience</h4>
          </div>
          <div id="oussema">
            <img
              id={styles.img}
              src="https://scontent.ftun4-1.fna.fbcdn.net/v/t39.30808-6/271187208_3053201678233844_1353422499024821566_n.jpg?_nc_cat=111&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=UJpo221fQbwAX-pf7A7&_nc_oc=AQk4pSNs5FRFzzrZ9b84iYIIejSRLpFkRZSaheU57gOGN959LZianfAI_mKbINrGT0w&_nc_ht=scontent.ftun4-1.fna&oh=00_AT_oHWhCgJd5WJfaVQE063hzsZPbn64Ab79gABLmMnM9aA&oe=620356A4"
            />
            <h4>oussama</h4>
            <h4>harvard professor in marital relationships</h4>
          </div>
          <div id="najm">
            <img
              id={styles.img}
              src="https://scontent.ftun4-1.fna.fbcdn.net/v/t1.6435-9/194380623_1123450238177504_3479070352563988667_n.jpg?_nc_cat=106&ccb=1-5&_nc_sid=174925&_nc_ohc=EBPp_DlNMjwAX9PXvAK&_nc_ht=scontent.ftun4-1.fna&oh=00_AT-Q1UdWJuqdDOtSCNpqsiwCy3m3Bxca9W5yLpw1Ji7mLA&oe=6222C1D3"
            />
            <h4>Najem</h4>
            <h4>national uruggwanian team fitness trainer for 10 years</h4>
          </div>
        </div>
      </div>
    </div>
  );
};
export default AboutUs;
