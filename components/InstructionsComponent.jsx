import styles from "../styles/InstructionsComponent.module.css";
import Router, { useRouter } from "next/router";
export default function InstructionsComponent() {
	const router = useRouter();
	return (
		<div className={styles.container}>
			<header className={styles.header_container}>
				<h1>
					Sreenath Rangana<span>-DevOps-Engineer</span>
				</h1>
				<p>
					Website is under working.....{" "}
					<span>DevOps Life</span>
				</p>
			</header>

			<div className={styles.buttons_container}>
				<a
					target={"_blank"}
					href={"https://zelarsoft.com/"}
				>
					<div className={styles.button}>
						{/* <img src="https://static.alchemyapi.io/images/cw3d/Icon%20Medium/lightning-square-contained-m.svg" width={"20px"} height={"20px"} /> */}
						<p>ZelarSoft-Company</p>
					</div>
				</a>
				<a
					target={"_blank"}
					href={"https://medium.com/@sreenath_rangana96"}
				>
					<div className={styles.button}>
						{/* <img src="https://static.alchemyapi.io/images/cw3d/Icon%20Medium/lightning-square-contained-m.svg" width={"20px"} height={"20px"} /> */}
						<p>My Medium_Blogs</p>
					</div>
				</a>
				<a
					target={"_blank"}
					href={"https://blog.zelarsoft.com/"}
				>
					<div className={styles.button}>
						<img
							src="https://static.alchemyapi.io/images/cw3d/Icon%20Large/file-eye-01-l.svg"
							width={"20px"}
							height={"20px"}
						/>
						<p>Visit Zelar_Blogs</p>
					</div>
				</a>
			</div>
			<div className={styles.footer}>
				<a href="http://sreenathrk.online/" target={"_blank"}>
					<img
						id="badge-button"
						style={{ width: "240px", height: "53px" }}
						src="https://st3.depositphotos.com/5040187/19012/v/450/depositphotos_190126098-stock-illustration-logo-swoosh-ellipse-blue-letter.jpg"
						alt="Alchemy Supercharged"
					/>
				</a>
				<div className={styles.icons_container}>
					<div>
						<a
							href="https://github.com/sreenath-zs?tab=repositories"
							target={"_blank"}
						>
							Leave a star on Github
						</a>
					</div>
					<div>
						<a
							href="https://www.linkedin.com/in/sreenath-rangana-1560a120b/"
							target={"_blank"}
						>
							Follow on LinkedIn
						</a>
					</div>
				</div>
			</div>
		</div>
	);
}
