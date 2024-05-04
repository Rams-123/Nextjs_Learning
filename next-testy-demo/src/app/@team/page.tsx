import { delay } from "@/lib/utils";

export default async function Team() {
  await delay(2000);

  return (
    <div className="h-96 flex-1 rounded-2xl bg-pink-500">
      <h1 className="text-xl font-semibold">Team</h1>
    </div>
  );
}
