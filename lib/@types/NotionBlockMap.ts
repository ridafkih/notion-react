import { NotionBlockName } from "@/@types/NotionBlockName";
import { NotionAPIBlock } from "@/@types/NotionAPIBlock";

export type NotionBlockMap = {
  [K in NotionBlockName]?: React.FC<NotionAPIBlock<K>>;
};
