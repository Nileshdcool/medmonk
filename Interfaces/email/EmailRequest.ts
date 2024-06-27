export interface EmailRequest
{
    From:string;
    To:string | undefined;
    Subject:string;
    Body:string;
}