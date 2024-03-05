"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

import { cn } from "@/lib/utils";

import { Button } from "./ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form";
import { Input } from "./ui/input";

export type Props = React.HTMLAttributes<HTMLFormElement> & {
  salidaTitle: string;
};

const formSchema = z.object({
  firstName: z
    .string({
      required_error: "Por favor ingrese su nombre.",
    })
    .min(1, "Por favor ingrese su nombre.")
    .trim(),
  lastName: z
    .string({
      required_error: "Por favor ingrese su apellido.",
    })
    .min(1, "Por favor ingrese su apellido.")
    .trim(),
});

export function CheckoutForm({ className, salidaTitle, ...props }: Props) {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    if (typeof process.env.NEXT_PUBLIC_PHONE === "undefined") {
      throw new Error("NEXT_PUBLIC_PHONE can't be undefined");
    }

    const phone = process.env.NEXT_PUBLIC_PHONE;

    const link = new URL("https://api.whatsapp.com/send");
    link.searchParams.append("phone", phone);
    link.searchParams.append(
      "text",
      `Hola, soy ${values.lastName}, ${values.firstName}. Quiero reservar un lugar en la próxima salida turística: "${salidaTitle}".`,
    );

    if (typeof window !== "undefined") window.open(link, "_blank");
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className={cn("space-y-4", className)}
        {...props}
      >
        <FormField
          control={form.control}
          name="firstName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Nombre</FormLabel>
              <FormControl>
                <Input placeholder="Carlos" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="lastName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Apellido</FormLabel>
              <FormControl>
                <Input placeholder="García" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit" className="w-full">
          Reservar
        </Button>
      </form>
    </Form>
  );
}
