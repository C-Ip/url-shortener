import ShortenForm from "./ui/shorten-form";

export default function Home() {
  return (
    <main className="flex min-h-screen max-h-screen flex-col items-center place-content-center">
      <p className=" text-3xl p-5">URL Shortener</p>
      <ShortenForm />
    </main>
  )
}
