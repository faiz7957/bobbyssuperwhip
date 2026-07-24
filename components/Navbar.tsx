export default function Navbar() {
  return (
    <nav className="flex items-center justify-between p-6 bg-white shadow">
      <h1 className="text-2xl font-bold text-blue-700">Bobby&apos;s Super Whip</h1>
      <div className="flex gap-6">
        <a href="#">Home</a>
        <a href="#">Gallery</a>
        <a href="#">Book Us</a>
        <a href="#">Contact</a>
      </div>
    </nav>
  );
}
