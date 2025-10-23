export default function SearchBar({ value, onChange }) {
  return (
    <input
  type="text"
  value={value}
  onChange={(e) => onChange(e.target.value)}
  placeholder="Search movies..."
  className="
    w-full 
    p-3 
    mb-4 
    rounded-xl 
    bg-slate-800 
    text-white 
    placeholder-gray-400 
    shadow-md 
    focus:outline-none 
    focus:ring-2 
    focus:ring-accent 
    transition 
    duration-300 
    ease-in-out
    hover:bg-slate-700
  "
/>

  );
}
