"use client";

import Image from "next/image";
import { Tabs } from "@/components/ui/tabs";
import Link from "next/link";

export function TabsDemo() {
  const tabs = [
    {
      title: "Y-Social",
      value: "Y-Social",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
          <p>Y-Social</p>
          <ImageContainer src="/images/ys.png" href=""/>
        </div>
      ),
    },
    {
      title: "Melos Music Player",
      value: "Melos Music Player",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
          <p>Melos Music Player</p>
          <ImageContainer src="/images/mls.png" href=""/>
        </div>
      ),
    },
    {
      title: "Youtube Clone",
      value: "Youtube Clone",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
          <p>Youtube Clone</p>
          <ImageContainer src="/images/yt.png" href=""/>
        </div>
      ),
    }
  ];

  return (
    <div className="h-[20rem] md:h-[40rem] [perspective:1000px] relative b flex flex-col max-w-5xl mx-auto w-full  items-start justify-start my-40 gap-10">
      <h2 className="font-bold text-4xl text-white">Projects</h2>
      <Tabs tabs={tabs} />
    </div>
  );
}

function ImageContainer ({src, href}: {src: string, href: string}) {
  return (
    <Link href={href ?? ""} target="_blank">
    <Image
      src={src}
      alt="dummy image"
      width="1000"
      height="1000"
      className="object-cover object-left-top h-[60%]  md:h-[90%] absolute -bottom-10 inset-x-0 w-[90%] rounded-xl mx-auto"
    />
    </Link>
  );
};
