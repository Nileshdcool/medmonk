import { ValidationErrors } from "@/Constants/ContactUs/SchemaConstants";
import { MutableRefObject } from "react";
import { z } from "zod";

export const ContactUsSchema = z.object({
  FirstName: z.string().min(1, ValidationErrors.FirstNameRequired),
  LastName: z.string().min(1, ValidationErrors.LastNameRequired),
  Email: z.string().email(ValidationErrors.InvalidEmail),
  PhoneNumber: z
    .string()
    .length(10, ValidationErrors.PhoneNumberRequired)
    .regex(/^\d+$/, ValidationErrors.ContactNumberAllowedCharacters),
  Organization: z.string().min(1, ValidationErrors.OrganizationRequired),
  Subject: z.string().min(1, ValidationErrors.SubjectRequired),
  Message: z.string().min(1, ValidationErrors.MessageRequired),
});

type ContactUsFormData = z.infer<typeof ContactUsSchema>;

export const ValidateForm = (
  formData: ContactUsFormData,
  setErrors: React.Dispatch<React.SetStateAction<Partial<ContactUsFormData>>>
) => {
  const result = ContactUsSchema.safeParse(formData);
  if (!result.success) {
    const errorMap: Partial<ContactUsFormData> = {};
    result.error.issues.forEach((issue) => {
      errorMap[issue.path[0] as keyof ContactUsFormData] = issue.message;
    });
    setErrors(errorMap);
  } else {
    console.log("Form data is valid:", result.data);
    setErrors({});
  }
  return result.success;
};

export const validateField = (
  name: string,
  value: string,
  timerRef: MutableRefObject<any>,
  setErrors: React.Dispatch<React.SetStateAction<Partial<ContactUsFormData>>>
) => {
  clearTimeout(timerRef.current);

  timerRef.current = setTimeout(() => {
    const fieldSchema = (ContactUsSchema.shape as any)[name];
    if (!fieldSchema) {
      console.error(`No schema found for field: ${name}`);
      return;
    }
    const result = fieldSchema.safeParse(value);
    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: result.success ? undefined : result.error?.errors[0].message,
    }));
    timerRef.current = null;
  }, 500);
};
