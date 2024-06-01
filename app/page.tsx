import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen max-h-screen flex-col items-center pt-16 gap-8 bg-gradient-to-r from-blue-900 to-indigo-900">
      <div className="flex flex-col items-center gap-4">
        <div className="rounded-full bg-gradient-to-r from-cyan-300 via-cyan-400 to-cyan-600 p-1">
          <Image
            src="/logo.svg"
            alt="Vercel Logo"
            width={120}
            height={32}
            className="rounded-md"
          />
        </div>

        <h1 className="text-3xl font-bold">
          APUD<span className="text-xl">👟</span>SPORT
        </h1>
      </div>

      <div className="flex flex-col gap-8 w-full px-6">
        <Link
          href="https://api.whatsapp.com/send?phone=6285712423318"
          className="w-full flex gap-2 justify-between items-center text-xl bg-blue-600 shadow-xl px-6 py-2 rounded-full text-white hover:bg-blue-700"
        >
          <Image
            src="/wa.svg"
            alt="whatsapp"
            width={40}
            height={40}
            className="mb-2"
          />
          WhatsApp Kami
          <Image
            src="/arrow.svg"
            alt="arrow"
            width={24}
            height={24}
            className="transform transition-transform duration-200 hover:translate-x-1"
          />
        </Link>
        <Link
          href="https://shopee.co.id/sitiwusport?uls_trackid=4vtp6uhh00ke&utm_content=PjLc6vQRQMHZb5WyUK1toaUd8PR"
          className="w-full flex gap-2 justify-between items-center text-xl bg-blue-600 shadow-2xl px-6 py-2 rounded-full text-white hover:bg-blue-700"
        >
          <Image
            src="/shopee.svg"
            alt="shopee"
            width={40}
            height={44.875}
            className="mb-2"
          />
          Toko Kami
          <Image
            src="/arrow.svg"
            alt="arrow"
            width={24}
            height={24}
            className="transform transition-transform duration-200 hover:translate-x-1"
          />
        </Link>
      </div>
      <div className="text-center absolute bottom-0.5">
        <span className="text-xs text-slate-400">
          create by{" "}
          <Link href="https://github.com/agisnarevaldo" className="underline">
            agisnarevaldo
          </Link>
        </span>
      </div>
    </main>
  );
}
