import { SessionProvider } from 'next-auth/react'
import { auth } from '@/auth'


export const metadata = {
  title: 'Next.js',
  description: 'Generated by Next.js',
}


export default async function  RootLayout ({ children }) {
  const session = await auth();
  return (
    <SessionProvider session={session}>

      <html lang="en">
        <body>
          {children}
        </body>
      </html>
    </SessionProvider>

  )
}
