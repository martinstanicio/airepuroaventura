import Link from "next/link";

import { Badge } from "@/components/ui/badge";

export type Props = { value: string };

export default function Tag({ value }: Props) {
  return (
    <Link href={`/salidas?categoria=${value}`}>
      <Badge variant="secondary">{value}</Badge>
    </Link>
  );
}
