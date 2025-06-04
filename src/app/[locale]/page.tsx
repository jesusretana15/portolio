
import LeftSide from '../components/leftside';
import RightSide from '../components/rightside';


export default function Home() {

  return (
    <div className="grid grid-rows-2 text-gray-400 md:grid-cols-2 md:grid-rows-1 items-center justify-items-center h-screen bg-gradient-to-r from-stone-900 to-gray-900 p-0 m-0 pb-0 gap-2 sm:p-5  font-[family-name:var(--font-geist-sans)]">
      <LeftSide />
      <RightSide />

    </div>
  );
}
