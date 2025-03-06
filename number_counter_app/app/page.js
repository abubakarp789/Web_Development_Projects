import Image from "next/image";
import Counter from "@/components/Counter";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <main className="flex flex-col items-center justify-center">
        <h1 className="text-4xl font-bold">Number Counter</h1>
        <Counter />
      </main>
    </div>
  );
}
