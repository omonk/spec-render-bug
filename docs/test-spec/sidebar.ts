import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebar: SidebarsConfig = {
  apisidebar: [
    {
      type: "doc",
      id: "test-spec/test",
    },
    {
      type: "category",
      label: "Update",
      link: {
        type: "doc",
        id: "test-spec/update",
      },
      items: [
        {
          type: "doc",
          id: "test-spec/get-test",
          label: "get-test",
          className: "api-method get",
        },
      ],
    },
  ],
};

export default sidebar.apisidebar;
