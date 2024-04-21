import { CampaignCustomizationModel } from "@/Models/CampaignModel";
import { MutableRefObject } from "react";
import { z } from "zod";
export const CampaignSchema = z.object({
  Name: z.string().min(1, "Name is required"),
  CompanyName: z.string().min(1, "Company name is required"),
  ContactNumber: z.string().length(10, "Contact number must be 10 digits"),
  CompanyEmailId: z.string().email("Invalid email address"),
  Comments: z.string().min(1, "Comments are required!"),
});

export type CampaignFormData = z.infer<typeof CampaignSchema>;
export const ValidateForm = (
  formData: CampaignFormData,
  setErrors: React.Dispatch<React.SetStateAction<Partial<CampaignFormData>>>, customizations : CampaignCustomizationModel
) => {
  const result = CampaignSchema.safeParse(formData);
  if (!result.success) {
    const errorMap: Partial<CampaignFormData> = {};
    result.error.issues.forEach((issue) => {
      errorMap[issue.path[0] as keyof CampaignFormData] = issue.message;
    });
    if(!((errorMap.Name && customizations.Name) || 
    (errorMap.CompanyName && customizations.CompanyName) || 
    (errorMap.ContactNumber && customizations.ContactNumber) || 
    (errorMap.CompanyEmailId && customizations.CompanyEmailId) || 
    (errorMap.Comments && customizations.Comments)))
        {
          if(!errorMap.Name)
            {
              return true;
            }
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
