# Notion React

Notion React allows you to easily map Notion components to your React projects, while completely maintaining customizability to make the components look and behave however you want.

## Installation

Use the following command in the root directory of your React project to install the dependency.

```bash
npm i notion-react
```

## Important Notes

This library is based around the data structure of the [@notionhq/client](https://www.npmjs.com/package/@notionhq/client) package, the block list response structure from this library should be used to map components.

## Usage

To create a `NotionRenderer`, which is what we use to map React components to Notion blocks, we can use the `makeNotionRenderer` function.

You can do this outside the body of the component that will be containing the Notion content.

Then, you can simply pass the components you'd like to map into the convenient, type-safe `makeNotionRenderer` function.

```ts
// Example.tsx

import NotionHeading from "@/components/NotionHeading";
import makeNotionRenderer, { NotionAPIBlockList } from "notion-react";

const { NotionRenderer } = makeNotionRenderer({
  heading_1: NotionHeading,
});

interface ExampleProps {
  blocks: NotionAPIBlockList;
}

const Example: React.FC<ExampleProps> = ({ blocks }) => {
  return <NotionRenderer blocks={blocks} />;
};

export default Example;
```

We will also need to create our type-safe NotionHeading component, which is what we mapped the `heading_1` component to.

```ts
// NotionHeading.tsx

import { NotionBlockComponent, NotionBlock } from "notion-react";

const NotionHeading: NotionBlockComponent<NotionBlock.HEADING_1> = (
	props
) => {
  const [text] = props.heading_1.rich_text;
  const { plain_text } = text;
  return <h1>{plain_text}</h1>;
};

export default NotionHeading;
```

___

✨ Bam! Just like that, we have an easy-to-use, type-safe Notion renderer that is FULLY customizable, no default style-overriding shenanigans.

Now every time a `heading_1` block appears on the Notion page that the block is originating from, it will appear on our page as the `NotionHeading` component we created. 