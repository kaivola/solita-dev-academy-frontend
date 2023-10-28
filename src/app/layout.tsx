import type { Metadata } from "next";

import "./globals.css";

export const metadata: Metadata = {
    title: "Dev Academy Assignment"
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <html lang="en">
            <body>
                <div className="flex h-screen">
                    <div className="h-full flex-grow bg-primaryBackground">
                        <div className="p-8 h-full">{children}</div>
                    </div>
                </div>
            </body>
        </html>
    );
};

export default RootLayout;
