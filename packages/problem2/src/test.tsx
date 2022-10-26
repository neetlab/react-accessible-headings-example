import { renderToStaticMarkup } from "react-dom/server";
import { format } from "prettier";
import { Profile as ProfileBad } from "./components.bad/Profile";
import { Profile as ProfileGood } from "./components.good/Profile";
import { ReactElement } from "react";

const print = (node: ReactElement) => {
  console.log(format(renderToStaticMarkup(node), { parser: "babel" }));
};

print(
  <ProfileBad
    currentLevel={1}
    username="@neet"
    bio="自己紹介文"
    articles={[
      { title: "記事１", excerpt: "抜粋文" },
      { title: "記事２", excerpt: "抜粋文" },
      { title: "記事３", excerpt: "抜粋文" },
    ]}
  />
);

print(
  <ProfileGood
    username="@neet"
    bio="自己紹介文"
    articles={[
      { title: "記事１", excerpt: "抜粋文" },
      { title: "記事２", excerpt: "抜粋文" },
      { title: "記事３", excerpt: "抜粋文" },
    ]}
  />
);
