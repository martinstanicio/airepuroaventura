import Brand from "./brand";
import SocialIcons from "./social-icons";

export default function Footer() {
  return (
    <footer className="dark bg-black text-foreground">
      <div className="mx-auto max-w-4xl space-y-12 px-4 py-8">
        <div className="flex flex-col justify-between gap-x-4 gap-y-12 sm:flex-row sm:items-center">
          <Brand className="mx-auto sm:mx-0" />
          <SocialIcons />
        </div>
        <div className="flex flex-col justify-between gap-4 text-center sm:flex-row">
          <p>
            Aire Puro: Trekking y Aventura &copy; {new Date().getFullYear()}
          </p>
          <p>
            Página web diseñada por{" "}
            <a
              href="https://www.linkedin.com/in/martinstanicio/"
              target="_blank"
              className="font-bold text-primary hover:underline focus:underline"
            >
              Martín Stanicio
            </a>
            .
          </p>
        </div>
      </div>
    </footer>
  );
}
