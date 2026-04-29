import './globals.css'
  export const metadata = {
  title: 'Laurig G. | Accountant',
  description: 'Professional accountant supporting bookkeeping, BAS/GST assistance, reconciliations and compliance support.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
