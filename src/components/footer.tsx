import Brand from "./brand";

export default function Footer() {
  return (
    <footer className="dark bg-black text-foreground">
      <div className="mx-auto max-w-4xl space-y-12 px-4 py-8">
        <Brand />
        <div className="flex flex-wrap justify-between gap-4">
          <p>Aire Puro Aventura &copy; {new Date().getFullYear()}</p>
          <p>
            Página web diseñada por{" "}
            <a
              href="mailto:staniciomartin@gmail.com"
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
