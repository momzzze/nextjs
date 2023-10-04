import Home from "@/components/Home";
import Error from "@/app/error";
import RoomDetails from "@/components/room/RoomDetails";

const getRoom = async (id: string) => {
  const res = await fetch(`${process.env.API_URL}/api/rooms/${id}`);
  return res.json();
};

interface Props {
  params: { id: string };
}

export default async function RoomDetailsPage({ params }: Props) {
  const data = await getRoom(params?.id);

  if (data?.message) {
    return <Error error={data} />;
  }

  
  return (
    <div className="container">
     <RoomDetails data={data}/>
    </div>
  );
}

export async function generateMetadata({params}:Props){
    const data=await getRoom(params?.id);

    return {
        title:data?.room?.name
    }
}
