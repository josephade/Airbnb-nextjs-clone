import Image from "next/image";

function LargeCard({
  img,
  title,
  description,
  buttonText,
}: {
  img: string;
  title: string;
  description: string;
  buttonText: string;
}) {
  return (
    <section className="relative py-16 cursor-pointer">
      <div className="relative h-96 min-w-[300px]">
        <Image
          alt="large card"
          src={img}
          layout="fill"
          className="rounded-2xl"
          objectFit="cover"
        />
      </div>
      <div className="absolute top-32 left-12">
        <h3 className="text-4xl mb-3 w-64 text-black">{title}</h3>
        <p className="text-black">{description}</p>

        <button className="text-sm text-white bg-gray-900 rounded-lg px-4 py-2 mt-5">
          {buttonText}
        </button>
      </div>
    </section>
  );
}

export default LargeCard;