import { NotionAPIBlock } from "@/@types/NotionAPIBlock";
import { NotionAPIBlockList } from "@/@types/NotionAPIBlockList";
import { NotionBlock } from "@/@types/NotionBlock";
import { NotionBlockName } from "@/@types/NotionBlockName";
import { NotionBlockComponent } from "@/@types/NotionBlockComponent";
import { NotionBlockMap } from "@/@types/NotionBlockMap";

import { makeNotionRenderer } from "@/util/notion";

export {
  NotionAPIBlock,
  NotionAPIBlockList,
  NotionBlock,
  NotionBlockName,
  NotionBlockComponent,
  NotionBlockMap,
};

export default makeNotionRenderer;
