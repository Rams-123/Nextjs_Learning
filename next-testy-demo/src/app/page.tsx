import { delay } from "@/lib/utils";

const Home = async () => {
  await delay(1000);
  return (
    <div className="h-60 my-5 rounded-xl p-10 bg-gray-500 text-white">
      <h1 className="text-3xl font-bold"> Parallel Route</h1>
    </div>
  );
};

export default Home;

// import { Badge } from "@/components/ui/badge";
// import { Button } from "@/components/ui/button";
// import { Card } from "@/components/ui/card";
// import Header from "@/components/ui/header";

// export default function Home() {
//   return (
//     <main className="">
//       <Header />
//       {/* <Button className="bg-gray-900">Click me</Button>
//       <Badge>Hii thERE</Badge>
//       <Card>MY HOUSE</Card> */}
//     </main>
//   );
// }
