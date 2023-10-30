import dynamic from "next/dynamic";

// Load WaitingRoom component only on the client side
const MyPreCallUX = dynamic(() => import("~/components/MyPreCallUX"), {
  ssr: false,
});

export default function Clientside() {
  return <MyPreCallUX />;
}
