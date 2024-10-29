import React from "react";
import postAction from "./postAction";

export default function Form() {
  return (
    <div>
      <form className="flex justify-center mt-10" action={postAction}>
        <input type="text" name="name" className="border-2 mr-2" />
        <button
          type="submit"
          className="text-white bg-blue-700 rounded-lg text-sm p-1"
        >
          送信
        </button>
      </form>
    </div>
  );
}
