"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

import { cn, shortDate } from "@/lib/utils";
import { formatPhoneNumber, getWhatsAppLink } from "@/lib/whatsapp";

import { Button } from "./ui/button";
import {
  Form,
  FormControl,
  FormDescription,
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
  name: z
    .string({
      required_error: "Por favor ingrese su nombre completo.",
    })
    .min(1, "Por favor ingrese su nombre completo.")
    .trim(),
  dni: z
    .string({
      required_error: "Por favor ingrese su número de DNI.",
    })
    .min(7, "Por favor ingrese un DNI válido (sin puntos ni guiones).")
    .max(8, "Por favor ingrese un DNI válido (sin puntos ni guiones).")
    .trim(),
  cuil: z
    .string({
      required_error: "Por favor ingrese su número de CUIL.",
    })
    .length(11, "Por favor ingrese un CUIL válido (sin puntos ni guiones).")
    .trim(),
  birthdate: z
    .string({
      required_error: "Por favor ingrese su fecha de nacimiento.",
    })
    .date("Por favor ingrese su fecha de nacimiento."),
});

export function InscriptionForm({ className, salidaTitle, ...props }: Props) {
  const phone = +process.env.NEXT_PUBLIC_PHONE;

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      dni: "",
      cuil: "",
      birthdate: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    const link = getWhatsAppLink(
      phone,
      `Hola, quiero reservar un lugar en la próxima salida turística: *${salidaTitle}*
- Nombre: ${values.name}
- DNI: ${values.dni}
- CUIL: ${values.cuil}
- Fecha de nacimiento: ${shortDate.format(new Date(values.birthdate))}`,
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
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Nombre completo</FormLabel>
              <FormControl>
                <Input
                  placeholder="Carlos Perez"
                  autoComplete="name"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="dni"
          render={({ field }) => (
            <FormItem>
              <FormLabel>N° de DNI</FormLabel>
              <FormDescription>
                Tu número de DNI sin puntos ni guiones
              </FormDescription>
              <FormControl>
                <Input
                  type="number"
                  placeholder="12.345.678"
                  className="appearance-none"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="cuil"
          render={({ field }) => (
            <FormItem>
              <FormLabel>N° de CUIL</FormLabel>
              <FormDescription>
                Tu número de CUIL sin puntos ni guiones
              </FormDescription>
              <FormControl>
                <Input
                  type="number"
                  placeholder="20-12345678-9"
                  className="appearance-none"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="birthdate"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Fecha de nacimiento</FormLabel>
              <FormControl>
                <Input type="date" autoComplete="bday" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <p>
          Al enviar este formulario será redirigido a WhatsApp. Si tiene algún
          inconveniente puede comunicarse directamente a{" "}
          <a
            href={getWhatsAppLink(phone).toString()}
            className="text-primary underline"
          >
            {formatPhoneNumber(phone, 2, 1, 2)}
          </a>
          .
        </p>

        <Button type="submit" className="w-full">
          Inscribirse
        </Button>
      </form>
    </Form>
  );
}
