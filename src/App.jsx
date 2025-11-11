import { Pause } from "lucide-react";
import { useEffect, useState } from "react";

const App = () => {
  const [advice, setAdvice] = useState(null);

  async function getAdvice() {
    const res = await fetch("https://api.adviceslip.com/advice");
    const data = await res.json();
    setAdvice(data.slip);
  }

  useEffect(() => {
    getAdvice();
  }, []);

  return (
    <div className="h-screen flex items-center justify-center bg-[#1f2632] px-4">
      <div className="relative w-full max-w-[500px] bg-[#323a49] rounded-2xl p-6 pb-12 text-white shadow-lg">
        {advice ? (
          <>
            <h3 className="text-center text-[12px] sm:text-[14px] text-green-400 tracking-[3px] font-semibold">
              ADVICE #{advice.id}
            </h3>

            <h1 className="text-center mt-4 text-[20px] sm:text-[24px] md:text-[28px] font-bold leading-relaxed">
              “{advice.advice}”
            </h1>

            <div className="flex items-center justify-center mt-6 gap-2">
              <span className="flex-1 h-px bg-gray-400 opacity-30"></span>
              <Pause className="text-white opacity-80" size={18} />
              <span className="flex-1 h-px bg-gray-400 opacity-30"></span>
            </div>

            <button
              onClick={getAdvice}
              className="absolute cursor-pointer left-1/2 -bottom-7 -translate-x-1/2 bg-green-400 hover:bg-green-300 transition p-4 rounded-full shadow-[0_0_15px_rgba(0,255,150,0.5)] hover:shadow-[0_0_20px_rgba(0,255,150,0.8)]"
            >
              <img src="/images/icon-dice.svg" alt="icon-dice" className="w-5 sm:w-6" />
            </button>
          </>
        ) : (
          <div className="flex items-center justify-center w-full h-full text-green-400 text-[17px]">
            Loading...
          </div>
        )}
      </div>
    </div>
  );
};

export default App;
