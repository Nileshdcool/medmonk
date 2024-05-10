export interface CookiesPolicyType {
    Title: string;
    Introduction: string;
    WhatAreCookies: string;
    HowWeUseCookies: string;
    TypesOfCookies: {
        Essential: CookiesType;
        Analytics: CookiesType;
        Personalization: CookiesType;
    };
    ManagingCookies: string;
    ChangesToPolicy: string;
    ContactInfo: string;
    ContactEmail: string;
};
export interface CookiesType
{
    Name: string;
    Description: string;
}