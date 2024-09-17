import Link from "next/link";
import Header from "@/components/header"
import Image from "next/image";

export default function Home() {
    return (
        <main>
            <Header/>
            <h1>Welcome to this NextJS Course!</h1>
            <p>🔥 Let&apos;s get started! 🔥</p>
            <p>
                <Link href="/about">About</Link>
            </p>
            <p>

                <Link href="/blog">Blog</Link></p>
        </main>
    );
}
