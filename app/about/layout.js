import localFont from "next/font/local";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
    title: "Sahaj Nyay About Page",
    description: "At Sahaj Nyay, we are dedicated to providing personalized, high-quality legal services with a focus on integrity, diligence, and results. Let us help you secure the justice and peace of mind you deserve.",
};


