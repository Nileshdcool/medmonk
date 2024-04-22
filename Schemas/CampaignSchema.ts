import { ValidationErrors } from "@/Constants/Campaign/SchemaConstants";
import { CampaignCustomizationModel } from "@/Interfaces/Campaign/CampaignCustomizationModel";
import { MutableRefObject } from "react";
import { z } from "zod";
export const CampaignSchema = z.object({
  Name: z.string().min(1, ValidationErrors.NameRequired),
  CompanyName: z.string().min(1, ValidationErrors.CompanyNameRequired),
  ContactNumber: z
    .string()
    .length(10, ValidationErrors.ContactNumberRequired)
    .regex(/^\d+$/, ValidationErrors.ContactNumberAllowedCharacters),
  CompanyEmailId: z.string().email(ValidationErrors.InvalidCompanyEmailId),
  Comments: z.string().min(1, ValidationErrors.CommentsRequired),
});

export type CampaignFormData = z.infer<typeof CampaignSchema>;
export const ValidateForm = (
  formData: CampaignFormData,
  setErrors: React.Dispatch<React.SetStateAction<Partial<CampaignFormData>>>,
  customizations: CampaignCustomizationModel
) => {
  const result = CampaignSchema.safeParse(formData);
  if (!result.success) {
    const errorMap: Partial<CampaignFormData> = {};
    result.error.issues.forEach((issue) => {
      errorMap[issue.path[0] as keyof CampaignFormData] = issue.message;
    });
    if (
      !(
        (errorMap.Name && customizations.Name) ||
        (errorMap.CompanyName && customizations.CompanyName) ||
        (errorMap.ContactNumber && customizations.ContactNumber) ||
        (errorMap.CompanyEmailId && customizations.CompanyEmailId) ||
        (errorMap.Comments && customizations.Comments)
      )
    ) {
      return true;
    }
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
  setErrors: React.Dispatch<React.SetStateAction<Partial<CampaignFormData>>>
) => {
  clearTimeout(timerRef.current);

  timerRef.current = setTimeout(() => {
    const fieldSchema =
      CampaignSchema.shape[name as keyof typeof CampaignSchema.shape];
    const result = fieldSchema.safeParse(value);
    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: result.success ? undefined : result.error?.errors[0].message,
    }));
    timerRef.current = null;
  }, 500);
};
