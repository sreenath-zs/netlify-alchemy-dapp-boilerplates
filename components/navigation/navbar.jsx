//import { ConnectButton } from "@rainbow-me/rainbowkit";
import styles from "../../styles/Navbar.module.css";
export default function Navbar() {
	return (
		<nav className={styles.navbar}>
			<a href="http://sreenathrk.online/" target={"_blank"}>
				<img className={styles.alchemy_logo} align="center" src="/sr.png"></img>
			</a>
			{/* <ConnectButton></ConnectButton> */}
		</nav>
	);
}
