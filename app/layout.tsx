// app/layout.tsx
import "./globals.css"; // Tailwind CSS import
import NavBar from "./component/NavBar"; // Import the navigation bar component

export const metadata = {
  title: "My Responsive Website",
  description:
    "A modern website built with Next.js, TypeScript, and TailwindCSS.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="flex">
        {/* Left-Side Navigation Bar */}

        <NavBar />
        {/* Main Content */}
        <main className="flex-1">{children}</main>
      </body>
    </html>
  );
}
