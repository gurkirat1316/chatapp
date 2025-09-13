import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "ChatApp",
  description: "Signup/Login Demo",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-gray-100 text-gray-900">
        <main className="p-6">{children}</main>
      </body>
    </html>
  );
}
