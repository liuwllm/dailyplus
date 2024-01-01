import FirebaseUi from "@/Components/firebase"

export default function Home() {
  return (
    <main className="flex min-h-screen bg-blue-50 flex-col justify-center items-center p-24">
      <span className="font-bold text-4xl text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-blue-500">DailyPlus+</span>
      <div className="p-2">Send help. My life is spiraling out of control.</div>
      <FirebaseUi />
      <div id="loader">Loading...</div>
    </main>
  )
}
