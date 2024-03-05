import Banner from "@/components/Banner";
import Body from "@/components/Body";
import Title from "@/components/Title";
import Image from "next/image";

export default function Home() {
  const Card = () => {
    return (
      <div
        className="flex flex-col items-center min-w-[283px] gap-[28px] bg-white p-[10px]"
        style={{ borderRadius: 4 }}
      >
        <Image width={251} height={137} src="/ex.png" alt="ex" />
        <div>Misubishi Xpander</div>
        <button style={{ background: "#FFF4E0", padding: 10, borderRadius: 4 }}>
          Binh chon ngay
        </button>
      </div>
    );
  };
  return (
    <main className="flex min-h-screen w-full flex-col items-center justify-between">
      <Banner />
      <Body>
        <Title>title</Title>
        <div className="flex flex-col px-[29px] py-[32px] bg-gray-400">
          <div>Truong ban gia toc</div>
          <div className="flex w-full overflow-y-auto gap-[10px]">
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
          </div>
        </div>
        <div className="flex flex-col px-[29px] py-[32px] bg-gray-400">
          <div>Truong ban gia toc</div>
          <div className="flex w-full overflow-y-auto gap-[10px]">
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
          </div>
        </div>
      </Body>
    </main>
  );
}
