declare enum Skills {
    REACT = "REACT",
    HTML = "HTML",
    JS = "JS",
    TS = "TS"
}
interface Interns {
    name: string;
    age: number;
    skills: Skills;
}
declare enum Domain {
    WEB = "WEB",
    CONNECT = "CONNECT",
    BACKEND = "BACKEND"
}
interface Juniors {
    name: string;
    age: number;
    skills: Skills;
    date_of_promotion: Date;
    domain: Domain;
}
export interface Company {
    interns: Interns;
    juniors: Juniors;
    country: string;
}
export {};
//# sourceMappingURL=types.d.ts.map