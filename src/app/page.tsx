import styles from "./page.module.css";
import EmailSignup from "@/components/EmailSignup";

export default function Home() {
	return (
		<div className={styles.container}>
			<section className={styles.hero}>
				<h1>Full-Stack Engineer & AI Enthusiast</h1>
				<p>
					Currently researching how to use LLMs in high-risk domains safely.
				</p>
			</section>

			<section className={styles.contact}>
				<p>Find me on Github</p>
				<p>Reach out to me</p>
				<p>
					I write sometimes, if you'd like to be notified when i post something
					new:
				</p>
				<EmailSignup styles={styles} />
			</section>
		</div>
	);
}
