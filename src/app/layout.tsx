import { Providers } from "./providers"

export const metadata = {
  title: "Gaming Products",
  description: "Gaming products UI with Next.js",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
