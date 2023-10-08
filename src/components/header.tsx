import Brand from "./brand";
import Navbar from "./navbar";

export default function Header() {
  return (
    <header className="flex items-center justify-between p-4">
      <Brand />
      <Navbar />
    </header>
  );
}
