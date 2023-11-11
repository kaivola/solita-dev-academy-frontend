import { Analytics } from "@vercel/analytics/react";
import type { Metadata } from "next";

import "./globals.css";

export const metadata: Metadata = {
    title: "Dev Academy Assignment"
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <html lang="en">
            <body>
                <div className="h-screen w-screen">{children}</div>
                <Analytics />
            </body>
        </html>
    );
};

export default RootLayout;
