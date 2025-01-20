export interface ProjectItem {
  icon?: string | { svg: string };
  title: string;
  desc?: string;
  link: string;
}
export const projectsInfo: ProjectItem[] = [
  {
    title: "vitepress",
    link: "https://vitepress.dev",
    desc: "用于博客搭建",
    icon: "https://vitepress.dev/vitepress-logo-mini.svg",
  },
];
