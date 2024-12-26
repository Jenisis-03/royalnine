// app/layout.tsx
import "./globals.css"; // Tailwind CSS import
import NavBar from "./component/NavBar"; // Import the navigation bar component

export const metadata = {
  title: "Royal 9 Engine Oil",
  description:
    "Where <Progress></Progress>erformance Meets Power",
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
