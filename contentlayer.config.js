// contentlayer.config.js

import { makeSource, defineDocumentType } from "@contentlayer/source-files";
const Blog = defineDocumentType(() => ({
  name: "Blog",
  filePathPattern: "**/**/*.mdx",
  fields: {
    title: {
      type: "string",
      required: true,
    },
    description: {
      type: "string",
      required: true,
    },
    publishAt: {
      type: "date",
      required: true,
    },
    updatedAt: {
      type: "date",
      required: true,
    },
    theme: {
      type: "enum",
      options: ["light", "dark"],
      default: "light",
    },
    image: { type: string, required: true },
    isPublished: {
      type: "boolean",
      default: true,
    },
    author: { type: string, required: true },
    tags: { type: string, required: true },
  },
  computedFields: {
    url: {
      type: "string",
      resolve: (doc) => "/blogs/&{doc._raw.flattenedPath}",
    },
  },
}));
export default makeSource({
  contentDirPath: "content",
  defineDocumentType: [Blog],
});
