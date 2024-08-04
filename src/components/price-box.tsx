import { ARS, cn } from "@/lib/utils";

export type Props = React.HTMLAttributes<HTMLDivElement> & { price: number };

export default function PriceBox({ price, className, ...props }: Props) {
  return (
    <section
      className={cn("overflow-hidden rounded-md border text-center", className)}
      {...props}
    >
      <p className="bg-amber-400 p-4 text-xl font-bold">{ARS.format(price)}</p>
      <p className="bg-secondary p-2">Precio por persona</p>
    </section>
  );
}
