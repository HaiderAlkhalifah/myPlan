import RightPage from "./pages/rightPage";
import LeftPage from "./pages/leftPage";

export default function App() {
  return (
    <div className="w-full h-screen bg-zinc-300 flex flex-col justify-between">
      <div className="grid-cols-2 flex">
        <LeftPage />
        <RightPage />
      </div>
    </div>
  );
}
