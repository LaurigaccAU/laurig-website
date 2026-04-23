export const metadata = {
  title: "Laurig G.",
  description: "Accountant Website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
