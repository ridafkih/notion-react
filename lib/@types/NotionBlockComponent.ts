import { NotionBlock } from "@/@types/NotionBlock";
import { NotionAPIBlock } from "@/@types/NotionAPIBlock";

export type NotionBlockComponent<T extends NotionBlock, P = {}> = React.FC<
  NotionAPIBlock<`${T}`> & P
>;
