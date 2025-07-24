import { ProjectCategory, CodeLink } from "./utils/projects";

export type ProjectType = {
  title: string;
  cover: string;
  tags: string[];
  desc: string;
  code_links?: CodeLink[];
  deploy_link: string;
  categories?: ProjectCategory[];
};