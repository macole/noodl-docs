---
title: Noodl SDK 入力と出力のタイプ
hide_title: true
---

# Noodl SDK 入力と出力のタイプ

将来的には、これらのタイプはSDKに直接含まれる予定ですが、ここではすべてのタイプを補完するためのTypescriptの型定義があります。

入力または出力にタイプを設定する方法は2つあります。1つはこのようなショートカットを使用する方法です：

```ts
{
  // ...
  inputs: {
    myInput: "string",
    displayName: "My Input",
    group: "My Group",
    default: "My default input value",
  },
  // ...
}
```

もう1つは、より多くのオプションを適用できる完全なタイプを使用する方法です：

```ts
{
  // ...
  inputs: {
    myInput: {
      name: "string",
      codeeditor: "plaintext",
      allowEditOnly: true
    },
    displayName: "My Input",
    group: "My Group",
    default: "My default input value",
  }
  // ...
}
```

## タイプ

タイプは `*`（星）も使用でき、エディター内のすべての接続タイプの制限を取り除く任意のタイプになります。

```ts
type TypeEditor = "javascript" | "plaintext" | "graphql" | "css" | "html";

interface BuiltInType {
  name: string;
  codeeditor?: TypeEditor;
  /** プロパティパネルを介してのみ入力を編集できるようにする */
  allowEditOnly?: boolean;
}

export interface ObjectType extends BuiltInType {
  name: "object";
}

export interface ArrayType extends BuiltInType {
  name: "array";
}

export interface StringType extends BuiltInType {
  name: "string";
}

export interface StringListType extends BuiltInType {
  name: "stringlist";
}

export interface NumberType extends BuiltInType {
  name: "number";
  units?: string[];
  defaultUnit?: string;
  marginPaddingComp?: string;
}

export interface BooleanType extends BuiltInType {
  name: "boolean";
}

export interface SignalType extends BuiltInType {
  name: "signal";
}

export declare type EnumListItem = {
  label: string;
  value: string;
};

export interface EnumType extends BuiltInType {
  name: "enum";
  enums: EnumListItem[];
}

export interface ColorType extends BuiltInType {
  name: "color";
}

export interface ImageType extends BuiltInType {
  name: "image";
}

export interface IconType extends BuiltInType {
  name: "icon";
}

export interface FontType extends BuiltInType {
  name: "font";
}

export interface TextStyleType extends BuiltInType {
  name: "textStyle";
}

export interface ComponentType extends BuiltInType {
  name: "component";
}

export interface DimensionType extends BuiltInType {
  name: "dimension";
}

export interface SourceType extends BuiltInType {
  name: "source";
}

export interface ResizingType extends BuiltInType {
  name: "resizing";
}

export interface VariableType extends BuiltInType {
  name: "variable";
}

export interface CurveType extends BuiltInType {
  name: "curve";
}

export interface QueryFilterType extends BuiltInType {
  name: "query-filter";
}

export interface QuerySortingType extends BuiltInType {
  name: "query-sorting";
}

export interface PagesType extends BuiltInType {
  name: "pages";
}

export interface ProplistType extends BuiltInType {
  name: "proplist";
}
```