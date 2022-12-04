export interface IExperience {
    designation?: string;
    duration: string;
    jobDescription?: string;
    jobLocation?: string;
}

export interface ICompany {
    experiences: IExperience[],
    companyName: string;
    companyLogo: string;
}