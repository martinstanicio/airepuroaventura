import { defineDocumentType, makeSource } from "contentlayer/source-files";
import type { LocalDocument } from "contentlayer/source-files";

import difficulties from "./src/lib/difficulties";

export const Salida = defineDocumentType(() => ({
  name: "Salida",
  filePathPattern: `salidas/**/*.md`,
  fields: {
    title: { type: "string", required: true },
    date: { type: "date", required: true },
    price: { type: "number", required: true },
    img: { type: "string", required: true },
    difficulty: {
      type: "enum",
      options: difficulties.map(({ value }) => value),
      required: true,
    },
    tags: { type: "list", of: { type: "string" }, required: true },
    gallery: { type: "list", of: { type: "string" } },
  },
  computedFields: {
    slug: {
      type: "string",
      resolve: (s: LocalDocument) => s._raw.sourceFileName.slice(0, -3),
    },
    url: {
      type: "string",
      resolve: (s: LocalDocument) => s._raw.flattenedPath,
    },
  },
}));

export default makeSource({
  disableImportAliasWarning: true,
  contentDirPath: "content",
  documentTypes: [Salida],
});
