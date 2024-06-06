"use client";

import React from "react";
import { ThemeProvider, CssBaseline } from "@mui/material";
import theme from "./theme";

interface Props {
	children: React.ReactNode;
}

export default function ClientThemeProvider({ children }: Props) {
	return (
		<ThemeProvider theme={theme}>
			<CssBaseline />
			{children}
		</ThemeProvider>
	);
}
