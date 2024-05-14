import Link from "next/link";
import ProductCard from "./components/ProductCard";

export default function Home() {
  return (
    <main>
      <h1 className="p-4 text-2xl bg-sky-400">Hello world</h1>
      <Link className="hover:bg-sky-200" href="/users">Users</Link>
      <ProductCard></ProductCard>
    </main>
  );
}
