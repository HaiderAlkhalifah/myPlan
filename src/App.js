import RightPage from "./pages/rightPage";
import LeftPage from "./pages/leftPage";

export default function App() {
  return (
    <div className="w-full h-screen bg-zinc-900 flex flex-col justify-between">
      <div className="flex justify-items-center">
        <LeftPage />
        <RightPage className="justify-self-end" />
      </div>
    </div>
  );
}
