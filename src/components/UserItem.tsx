'use client';
export default function UserItem() {
  return <div className="flex items-center justify-between gap-2 border rounded-[8px] p-2">
    <div className="avatar rounded-full min-h-10 min-w-10 bg-black text-white font-[700] flex items-center justify-center">
      <p>MS</p>
    </div>
    <div className="grow">
      <p className="text-[16px] font-bold">Muhammed Suhaib</p>
      <p className="text-[12px] text-neutral-500">mdsuhaib.25it@licet.ac.in</p>
    </div>
  </div>;
}