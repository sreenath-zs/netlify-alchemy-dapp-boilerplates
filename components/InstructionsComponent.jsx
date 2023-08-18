import styles from "../styles/InstructionsComponent.module.css";
import Router, { useRouter } from "next/router";
export default function InstructionsComponent() {
	const router = useRouter();
	return (
		<div className={styles.container}>
			<header className={styles.header_container}>
				<h1>
					Sreenath Rangana<span>-DevOps_Engineer</span>
				</h1>
				<p>
					<h3>Website is under working.....</h3>{" "}
					<span><b>DevOps Life</b></span>
				</p>
			</header>

			<div className={styles.buttons_container}>
				<a
					target={"_blank"}
					href={"https://zelarsoft.com/"}
				>
					<div className={styles.button}>
						{/* <img src="https://static.alchemyapi.io/images/cw3d/Icon%20Medium/lightning-square-contained-m.svg" width={"20px"} height={"20px"} /> */}
						<p>My Office--ZelarSoft Pvt Ltd</p>
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
					href={"https://orangematter.solarwinds.com/wp-content/uploads/2022/03/DevOps-lifecycle-capabilities-1024x621.png"}
				>
					<div className={styles.button}>
						<img
							src="https://static.alchemyapi.io/images/cw3d/Icon%20Large/file-eye-01-l.svg"
							width={"20px"}
							height={"20px"}
						/>
						<p>DevOps LifeCycle</p>
					</div>
				</a>
			</div>
			<div className={styles.footer}>
				<a href="http://sreenathrk.online/" target={"_blank"}>
					<img
						id="badge-button"
						style={{ width: "240px", height: "53px" }}
						src="https://media.istockphoto.com/id/1325438825/vector/premium-letter-sr-logo-design-rs-letter-logo-design-with-modern-trendy.jpg?s=612x612&w=0&k=20&c=1rgBoofcl29vFKoU0jZsakUKDjPFA3bxlIjxyfoNv2E="
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
