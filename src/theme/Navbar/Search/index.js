import React from "react";
import { DocSearch } from "@docsearch/react";

export default function SearchBar() {
  return (
    <DocSearch
      appId="FNT2FF5Z1N"
      apiKey="858103ff345e1d20a487ee99ea8fa03a"
      indexName="reown"
      transformItems={(items) =>
        items.map((item) => ({
          ...item,
          title: `${item.hierarchy.lvl1} (${item.framework || "General"})`, // Append framework
        }))
      }
    />
  );
}
