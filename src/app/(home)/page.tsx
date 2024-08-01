import Image from "next/image";
import { SpotlightPreview } from "./components/SpotlightPreview";
import { TabsDemo } from "./components/TabsDemo";
import { BackgroundBeamsDemo } from "./components/BackgroundBeamsDemo";

export default function Home() {
  return (
    <div>    
      <SpotlightPreview />
      <TabsDemo />
      <BackgroundBeamsDemo/>
    </div>

  );
}
