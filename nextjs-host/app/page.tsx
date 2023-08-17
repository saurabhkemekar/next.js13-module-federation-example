import dynamic from "next/dynamic";

const Button = dynamic(() => import("remote/RemoteButtonApp"));
export default function Home() {
  return (
    <div>
      <h5>Hello From Host APP!!!!</h5>
      <Button/>
    </div>
  );
}
