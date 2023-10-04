import Home from "@/components/Home";
import Error from "./error";

export const metadata = {
  title: "HomePage - BookIT",
};
// export const revalidate = 0;
// export const dynamic = "force-dynamic";

const getRooms = async (searchParams: string) => {

  const urlParams = new URLSearchParams(searchParams);
  const querySting = urlParams.toString();

  const res = await fetch(`${process.env.API_URL}/api/rooms?${querySting}`, {
    cache: "no-cache",
  });
  return res.json();
};

export default async function HomePage({
  searchParams,
}: {
  searchParams: string;
}) {
  const data = await getRooms(searchParams);

  if (data?.message) {
    return <Error error={data} />;
  }

  return (
    <div className="container">
      <Home data={data} />
    </div>
  );
}
