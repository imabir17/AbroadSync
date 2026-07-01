import { redirect } from 'next/navigation'

export default function RootPage() {
  // Scrap the marketing landing page and redirect straight to the application
  redirect('/dashboard')
}
