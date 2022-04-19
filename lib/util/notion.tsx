import React from "react";

import { NotionAPIBlock } from "@/@types/NotionAPIBlock";
import { NotionBlockMap } from "@/@types/NotionBlockMap";

interface NotionRendererProps {
  blocks: NotionAPIBlock<string>[];
}

type NotionRendererFactory = (map: NotionBlockMap) => {
  NotionRenderer: React.FC<NotionRendererProps>;
};

/**
 * Create a notion renderer object.
 * @param map The Notion-local component map.
 * @returns A renderer JSX element.
 */
export const makeNotionRenderer: NotionRendererFactory = (map) => {
  const NotionRenderer = ({ blocks }: NotionRendererProps) => {
    const response: NotionAPIBlock<keyof typeof map>[] = blocks;

    return (
      <>
        {response.map((props) => {
          const { type } = props;
          const Block = map[type] as React.FC<NotionAPIBlock>;
          if (!Block) return void 0;
          return <Block key={props.id} {...props} />;
        })}
      </>
    );
  };

  return { NotionRenderer };
};
