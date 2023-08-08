import './globals.css'
import 'atropos/css'

export const metadata = {
  title: 'Enter Agencia Digital',
  description: 's',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
