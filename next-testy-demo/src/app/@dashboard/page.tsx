import { delay } from "@/lib/utils";

export default async function Dashboard() {
  await delay(2000);

  return (
    <div className="h-96 flex-1 rounded-2xl bg-gray-500">
      <h1 className="text-xl font-semibold">Dashboard Route</h1>
    </div>
  );
}
