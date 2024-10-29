"use server";
import { redirect } from "next/navigation";

export default async function postAction(formData) {
  const name = formData.get("name");
  console.log(name);
  redirect("/thanks");
}
