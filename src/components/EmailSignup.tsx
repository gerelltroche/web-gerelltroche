"use client";
import backupStyles from "./EmailSignup.module.css";
import { useState } from "react";

interface EmailSignupProps {
	styles?: Record<string, string>;
}

function EmailSignup({ styles }: EmailSignupProps) {
	const [signedUp, setSignedUp] = useState(false);

	const handleSignup = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		setSignedUp(true);
	};
	console.log("signedUp", signedUp);
	return (
		<form
			className={styles ? styles.emailForm : backupStyles.emailForm}
			onSubmit={handleSignup}
		>
			{!signedUp ? (
				<>
					<input
						type="email"
						placeholder="email@idk.com"
					/>
					<button>Sign up</button>
				</>
			) : (
				<p>Thanks!</p>
			)}
		</form>
	);
}

export default EmailSignup;
