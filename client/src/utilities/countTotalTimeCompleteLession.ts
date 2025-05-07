import type { Section } from "@/store/interface/sections";

const countTotalTimeCompleteLession = (sections: Section[]) => {
     const time = sections.reduce((acc, section) => {
         return acc + section.time;
     }, 0);
     return time;
}

export default countTotalTimeCompleteLession;

