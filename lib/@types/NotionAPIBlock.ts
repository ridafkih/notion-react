import { ListBlockChildrenResponse } from "@notionhq/client/build/src/api-endpoints";

type TypeWithGeneric<T> = T[];
type ExtractGeneric<Type> = Type extends TypeWithGeneric<infer X> ? X : never;

export type NotionAPIBlock<T = string> = Extract<
  ExtractGeneric<ListBlockChildrenResponse["results"]>,
  { type: T }
>;
