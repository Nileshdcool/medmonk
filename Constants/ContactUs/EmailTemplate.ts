
export const EmailTemplate = (request: ContactUsFormData) =>
    {
        return `<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>New Campaign Submission</title>
</head>
<body style="font-family: Arial, sans-serif; margin: 0; padding: 0;">
    <table align="center" border="0" cellpadding="0" cellspacing="0" width="600" style="border-collapse: collapse; background-color: #ffffff;">
        <tr>
            <td align="center" bgcolor="#111827" style="padding: 20px 0;">
                <h1 style="color: #ffffff; margin: 0;">New Campaign Submission</h1>
            </td>
        </tr>
        <tr>
            <td style="padding: 20px;">
                <h2 style="color: #333333;">Hello Medmonk Team,</h2>
                <p style="color: #666666; line-height: 1.5;">
                    A new campaign has been submitted. Please review the submission and take the necessary actions.
                </p>
                <table border="1" cellpadding="10" cellspacing="0" width="100%">
                    <tr>
                        <td><strong>First Name</strong></td>
                        <td>${request.FirstName}</td>
                    </tr>
                    <tr>
                        <td><strong>Last Name</strong></td>
                        <td>${request.LastName}</td>
                    </tr>
                    <tr>
                        <td><strong>Email</strong></td>
                        <td>${request.Email}</td>
                    </tr>
                    <tr>
                        <td><strong>Phone Number</strong></td>
                        <td>${request.PhoneNumber}</td>
                    </tr>
                    <tr>
                        <td><strong>Organization</strong></td>
                        <td>${request.Organization}</td>
                    </tr>
                    <tr>
                        <td><strong>Subject</strong></td>
                        <td>${request.Subject}</td>
                    </tr>
                    <tr>
                        <td><strong>Message</strong></td>
                        <td>${request.Message}</td>
                    </tr>
                </table>
                <p style="color: #666666; line-height: 1.5;">
                    If you have any questions, feel free to reply to this email.
                </p>
                <p style="color: #666666; line-height: 1.5;">
                    Best regards,<br>
                    The Campaign Submission System
                </p>
            </td>
        </tr>
        <tr>
            <td align="center" style="padding: 10px 0;" bgcolor="#111827">
                <p style="color: #ffffff; margin: 0;">&copy; 2024 Medmonk Campaign Inc. All rights reserved.</p>
            </td>
        </tr>
    </table>
</body>
</html>
`;
    }