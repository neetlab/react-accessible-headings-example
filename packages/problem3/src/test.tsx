import { renderToStaticMarkup } from "react-dom/server";
import { Cms as CmsBad } from "./Cms.bad.js";
import { Cms as CmsGood } from "./Cms.good.js";
import { format } from "prettier";
import { ReactElement } from "react";

const print = (node: ReactElement) => {
  console.log(format(renderToStaticMarkup(node), { parser: "html" }));
};

print(<CmsBad />);
console.log("\n");
print(<CmsGood />);
