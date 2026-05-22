import { IoShieldHalf } from "react-icons/io5";
import { HiLightningBolt } from "react-icons/hi";
import { LuSettings2 } from "react-icons/lu";
import { TbActivityHeartbeat } from "react-icons/tb";
import { FaAngleDown } from "react-icons/fa6";
import { useState } from "react";
import { IoMdRefresh } from "react-icons/io";

function App() {
  let amountLeft = 3764;
  const [enabled, setEnabled] = useState(false);
  return (
      <>
        <div className="bg-[#0d0d0d] h-screen flex justify-center items-center">
          <div className="w-[50%] bg-[#0d0d0d] h-[70%] flex p-4 gap-4">
              <div className="bg-gradient-to-b from-[#232323] to-[#181818] w-[40%] rounded-3xl shadow-[0_10px_30px_rgba(0,0,0,0.6)] border border-white/5">
                <div>
                  <div className="flex text-center items-center mt-6 mx-4 gap-2">
                    <LuSettings2 size={18} className="text-white" />
                    <p className="text-white text-[18px] font-roboto font-semibold">Fine Tune Model</p>
                  </div>
                  <p className="text-[10px] text-[#9F9F9F] ml-[42px] font-roboto">Roman empire was founded by romulus</p>
                </div>
                <div className=" flex flex-col gap-5">
                  <div className="flex mt-8 items-center">
                    <TbActivityHeartbeat size={18} className="text-white ml-4" />
                    <p className="text-white text-[12px] font-roboto font-semibold ml-4">The First Dropdown</p>
                  <div className="flex items-center gap-2 text-[12px] text-white ml-12 bg-[#575252] px-2 py-1 rounded-md">
                          <span>All</span>
                          <FaAngleDown />
                  </div>                              
                </div>
                  <div className="flex">
                    <TbActivityHeartbeat size={18} className="text-white ml-4" />
                    <p className="text-white text-[12px] font-roboto font-semibold ml-4">Input field also necessary</p>
                    <div className="flex items-center gap-2 text-[12px] text-white ml-8 bg-[#575252] px-2 py-1 rounded-md">
                          <span>987</span>
                    </div>
                  </div>
                  <div className="flex">
                    <TbActivityHeartbeat size={18} className="text-white ml-4" />
                    <p className="text-white text-[12px] font-roboto font-semibold ml-4">Another dropdown</p>
                    <div className="flex items-center gap-2 text-[12px] text-white ml-10 bg-[#575252] px-2 py-1 rounded-md">
                          <span>Strict</span>
                          <FaAngleDown />
                  </div>
                  </div>
                  <div className="flex">
                    <TbActivityHeartbeat size={18} className="text-white ml-4" />
                    <p className="text-white text-[12px] font-roboto font-semibold ml-4">Once more</p>
                    <div className="flex items-center gap-2 text-[12px] text-white ml-24 bg-[#575252] px-2 py-1 rounded-md">
                          <span>All</span>
                          <FaAngleDown />
                  </div>
                  </div>
                  <div className="flex">
                    <TbActivityHeartbeat size={18} className="text-white ml-4" />
                    <p className="text-white text-[12px] font-roboto font-semibold ml-4">Every UI needs a toggle</p>
                    <div className="flex justify-center items-center ml-11">
                        <button
                            onClick={() => setEnabled(!enabled)}
                            className={`w-8 h-5 flex items-center rounded-full p-1 transition-all duration-300 ${
                                enabled ? "bg-green-500" : "bg-[#575252]"
                            }`}>
                            <div
                                className={`bg-white w-3 h-3 rounded-full shadow-md transform transition-all duration-300 ${
                                    enabled ? "translate-x-3" : "translate-x-0"
                                }`}
                            />
                        </button>
                    </div>
                  </div>
                  <div className="flex">
                    <TbActivityHeartbeat size={18} className="text-white ml-4" />
                    <p className="text-white text-[12px] font-roboto font-semibold ml-4">The Last Dropdown</p>
                    <div className="flex items-center gap-2 text-[12px] text-white ml-12.5 bg-[#575252] px-2 py-1 rounded-md">
                          <span>All</span>
                          <FaAngleDown />
                    </div>
                  </div>
                  <div className="flex items-center justify-center mt-8">
                      <IoMdRefresh size={16} className="text-white mx-2" />
                      <p className="text-white text-[12px] font-roboto font-semibold">Reset Defaults</p>
                      <button className="bg-[#262626] text-white text-[10px] font-roboto font-semibold px-4 ml-5 py-2 rounded-2xl transition-colors duration-300 hover:cursor-pointer shadow-[2_16px_30px_rgba(0,0,0,0.6)] border border-white/5">
                        Apply Changes
                      </button>
                    </div>
                  </div>
              </div>
            <div className="w-[60%] flex flex-col gap-4">
                <div className="bg-gradient-to-b from-[#232323] to-[#181818] w-full h-[40%] rounded-3xl shadow-[0_10px_30px_rgba(0,0,0,0.6)] border border-white/5">
                    <p className="text-white text-[18px] font-roboto px-4 font-semibold mt-6 mb-2">Billing Account</p>
                    <div className="flex items-center">
                        <p className="text-[#9F9F9F] text-[12px] font-roboto px-4">Credit Limit: <span className="font-semibold">$10,000</span></p>
                        <p className="text-black text-[10px] font-roboto px-1 inline border-2 border-none bg-white rounded-md">Pro</p>
                    </div> 
                    <div className="border border-white/5 rounded-2xl bg-black w-[92%] h-[13%] mx-auto mt-4 shadow-[inset_1_1px_3px_rgba(255,255,255,0.18),inset_0_-1px_2px_rgba(0,0,0,0.6)] p-1">
                      <div className="h-full rounded-xl bg-[#2a2a2a] shadow-[inset_0_1px_3px_rgba(255,255,255,0.18),inset_0_-1px_2px_rgba(0,0,0,0.6)] p-1"
                      style={{ width: `${(amountLeft / 10000) * 100}%` }}>
                      </div>
                    </div>
                    <p className="font-sans font-extralight text-2xl text-white text-center mt-1">${amountLeft.toLocaleString()}</p>
                    <p className="text-[10px] text-[#9F9F9F] text-center">remaining of $10,000</p>
                </div>
                
                <div className="bg-gradient-to-b from-[#232323] to-[#181818] w-full h-[60%] flex flex-col gap-4 items-center p-4 rounded-3xl shadow-[0_10px_30px_rgba(0,0,0,0.6)]
                          border border-white/5">
                    <div className="h-[70%] w-full  flex gap-4">
                      <div className="flex-1 bg-[#262626] rounded-3xl shadow-[0_10px_30px_rgba(0,0,0,0.6)]
                          border border-white/5">
                            <IoShieldHalf size={60} className="text-[#527FE6] w-full m-4 ml-12"/>
                            <p className="text-white text-[18px] font-roboto px-4 font-semibold">Safe & Stable</p>
                            <p className="text-[10px] text-[#9F9F9F] px-4 font-roboto">Imagine some text here</p>

                      </div>
                      <div className="flex-1 bg-[#262626] rounded-3xl shadow-[0_10px_30px_rgba(0,0,0,0.6)]
                          border border-white/5">
                            <HiLightningBolt size={60} className=" text-[#FBE73F] w-full m-4 ml-12"/> 
                            <p className="text-white text-[18px] font-roboto px-4 font-semibold">Latest</p>
                            <p className="text-[10px] text-[#9F9F9F] px-4 font-roboto">Some more text here</p>
                      </div>
                  </div>
                    <div className="h-[30%] w-full bg-[#262626] rounded-4xl shadow-[0_10px_30px_rgba(0,0,0,0.6)]
                          border border-white/8 items-center flex justify-between px-6">
                      <p className="text-white text-center text-[12px] font-semibold">I can't believe You're reading this!</p>
                      <button className="border-2 bg-[#fefefe] text-[12px] p-1.5 w-[20%] rounded-3xl font-semibold hover:cursor-pointer">
                        Submit
                      </button>
                    </div> 
                </div>
            </div>
          </div>
        </div>
      </>
  );
}
export default App;