import "./style.css";
import Link from "next/link";

export default function Item({ params }) {
  return (
    <main>
      <h1 className="title">Item Page</h1>
      <p className="bodytext">要求されたアイテム番号は{params.item}</p>
      <div className="flex justify-center">
        <Link href="/">Home</Link>
      </div>
    </main>
  );
}
