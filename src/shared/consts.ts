import {RuleSet} from "styled-components/dist/types";

export const USER_ID: number = 1;

const size = {
    mobile: "320px",
    tablet: "768px",
    laptop: "1024px",
    desktop: "2560px",
}

export const tablet = (styles: RuleSet<object>) => `
    @media (min-width: ${size.tablet}) {
        ${styles};
    }
`;
export const desktop = (styles: RuleSet<object>) => `
    @media (min-width: ${size.desktop}) {
        ${styles};
    }
`;
export const laptop = (styles: RuleSet<object>) => `
    @media (min-width: ${size.laptop}) {
        ${styles};
    }
`;