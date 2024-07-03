export default function Footer() {
  return (
    <div className="bg-[#21263d] w-full h-28 py-6">
      <div className="lg:w-3/5 w-[95vw] mx-auto flex items-center justify-center border-t-2 border-gray-700">
        <div className="text-gray-500 mt-4 font-bold flex items-center justify-center">
          &copy; {new Date().getFullYear()} Ankit Yadav
        </div>
      </div>
    </div>
  );
}
