import * as prismic from "@prismicio/client";

// Fill in your repository name
export const repositoryName = "ARIZ";

export const client = prismic.createClient(repositoryName, {});
