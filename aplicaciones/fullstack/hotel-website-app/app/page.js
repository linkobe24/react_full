import Link from "next/link";
import Logo from "./_components/Logo";

export default function Home() {
  return (
    <div>
      <h1>The Hotel Website App</h1>;
      <Link href="/cabins">Explore luxury cabins</Link>
    </div>
  );
}
