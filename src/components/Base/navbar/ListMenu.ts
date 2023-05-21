export type ListMenuType = {
  id: string;
  name: string;
  title: string;
  url: string;
};

const LIST_MENU: ListMenuType[] = [
  {
    id: "01",
    name: "about me",
    title: "01 about me",
    url: "/about",
  },
  {
    id: "02",
    name: "stories",
    title: "02 stories",
    url: "/stories",
  },
  {
    id: "03",
    name: "contact",
    title: "03 contact",
    url: "/contact",
  },
];

export default LIST_MENU;
