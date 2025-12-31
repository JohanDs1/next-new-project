import Image from "next/image";

async function getAkatsuki() {
  try {
    const response = await fetch(
      "https://naruto-api.p.rapidapi.com/akatsuki_members",
      {
        method: "GET",
        headers: {
          "x-rapidapi-key":
            "82248f6c27mshba5aa4bc76376acp11e565jsn855d50ba793f",
          "x-rapidapi-host": "naruto-api.p.rapidapi.com",
        },
      }
    );
    const data = response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
}

const Dashboard = async () => {
  const akatsuki = await getAkatsuki();

  return (
    <div className="flex gap-4 flex-wrap m-4">
      {akatsuki.map((member: any) => (
        <div
          key={member.id}
          className="border flex flex-col gap-4 border-blue-300 p-4"
        >
          <Image
            src="https://images7.alphacoders.com/129/1299888.png"
            alt="akatsuki"
            width={200}
            height={200}
          />
          <span>{member.name}</span>
          <span>Clan {member.clan}</span>
          <span>Estado {member.status}</span>
        </div>
      ))}
    </div>
  );
};
export default Dashboard;
