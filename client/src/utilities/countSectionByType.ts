import type { Section } from "@/store/interface/materials";

const countSectionByType = (sections: Section[], type: string) => {
    const count = sections.reduce((acc, section) => {
        if (section.type === type) {
            acc++;
        }
        return acc;
    }, 0);
    return count;
};

export default countSectionByType;