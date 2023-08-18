//import { ConnectButton } from "@rainbow-me/rainbowkit";
import styles from "../../styles/Navbar.module.css";
export default function Navbar() {
	return (
		<nav className={styles.navbar}>
			<a href="http://sreenathrk.online/" target={"_blank"}>
				{/* <img className={styles.alchemy_logo} align="center" src="/sr.png"></img> */}
				<img
						id="badge-button"
						style={{ width: "240px", height: "53px" }}
						src="/sr.png"
						alt="Alchemy Supercharged"
					/>
			</a>
			{/* <ConnectButton></ConnectButton> */}
		</nav>
	);
}
