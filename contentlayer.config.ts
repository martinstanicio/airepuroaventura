import { defineDocumentType, makeSource } from "contentlayer/source-files";
import type { LocalDocument } from "contentlayer/source-files";

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
      options: ["easy", "medium", "hard"],
      required: true,
    },
    tags: { type: "list", of: { type: "string" }, required: true },
    gallery: { type: "list", of: { type: "string" } },
  },
  computedFields: {
    slug: {
      type: "string",
      resolve: (s: LocalDocument) => s._raw.flattenedPath,
    },
    url: {
      type: "string",
      resolve: (s: LocalDocument) => `/salidas/${s._raw.flattenedPath}`,
    },
  },
}));

export default makeSource({
  disableImportAliasWarning: true,
  contentDirPath: "content",
  documentTypes: [Salida],
});
