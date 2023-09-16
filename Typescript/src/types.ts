enum Skills {
    REACT = "REACT",
    HTML = "HTML",
    JS = "JS",
    TS = "TS"
}

interface Interns {
    name: string;
    age: number;
    skills:Skills
}

enum Domain {
    WEB = "WEB",
    CONNECT = "CONNECT",
    BACKEND = "BACKEND",
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

// npx -p typescript tsc