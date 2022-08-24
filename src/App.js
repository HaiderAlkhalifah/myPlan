import RightPage from "./pages/rightPage";
import LeftPage from "./pages/leftPage";

export default function App() {
  return (
    <div className="w-full h-screen bg-zinc-300 flex flex-col justify-between">
      <div className="flex justify-items-stretch">
        <LeftPage />
        <RightPage className="justify-self-end" />
      </div>
    </div>
  );
}
