import { format } from "prettier";
import { renderToStaticMarkup } from "react-dom/server";
import { Profile as ProfileGood } from "./Profile.good";
import { Profile as ProfileBad } from "./Profile.bad";
import { ReactElement } from "react";

const print = (node: ReactElement) => {
  console.log(format(renderToStaticMarkup(node), { parser: "html" }));
};

print(
  <>
    <h2>プロフィールページ</h2>
    <p>このページでは、プロフィールが閲覧できます</p>
    <ProfileBad username="@neet" bio="私のプロフィール" />
  </>
);

print(
  <>
    <h1>プロフィールページ</h1>
    <p>このページでは、プロフィールが閲覧できます</p>
    <ProfileBad username="@neet" bio="私のプロフィール" />
  </>
);

print(
  <>
    <h1>見出しレベル1</h1>
    <ProfileGood currentLevel={1} username="@neet" bio="私のプロフィール" />
  </>
);

print(
  <>
    <h2>見出しレベル2</h2>
    <ProfileGood currentLevel={2} username="@neet" bio="私のプロフィール" />
  </>
);
