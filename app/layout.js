export const metadata = {
  title: 'Laurig G. | The Accountant',
  description: 'Accounting, tax and business support',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
