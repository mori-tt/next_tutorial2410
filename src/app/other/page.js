import Link from "next/link";
import Image from "next/image";

export default function Other() {
  return (
    <main>
      <h1 className="text-2xl m-5 text-center">Other Page</h1>
      <p className="text-lg m-5 text-center">別のページ</p>
      <p>
        <Image src="/autumn.jpg" alt="autumn" width={1000} height={664} />
      </p>

      <div className="flex justify-center">
        <Link href="/">Home</Link>
      </div>
    </main>
  );
}
