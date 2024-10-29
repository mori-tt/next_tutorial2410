"use client";
import Link from "next/link";
import JSXStyle from "styled-jsx/style";

export default function Thanks() {
  return (
    <main>
      <JSXStyle>{`
        .jsx-title {
          color: #1600da;
          text-align: center;
          font-size: 40px;
          color: #1600da;
        }
        .jsx-bodytext {
          text-align: center;
          font-size: 20px;
          color: #666;
        }
      `}</JSXStyle>
      <h1 className="jsx-title">Thanks</h1>
      <p className="jsx-bodytext">投稿ありがとうございます</p>
      <div className="flex justify-center">
        <Link href="/">Home</Link>
      </div>
    </main>
  );
}
