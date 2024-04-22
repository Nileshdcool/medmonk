import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Toaster, toast } from "sonner";
import {
  CampaignFormData,
  validateField,
  ValidateForm,
} from "../../Schemas/CampaignSchema";
import axios from "axios";
import { ApiUrls } from "@/Configurations/ApiUrls";
import {
  CampaignCustomizationModel,
  CampaignCustomizationsModel,
  defaultCampaignCustomizations,
} from "@/Models/CampaignModel";
import { MetaProps } from "@/Models/MetaProps";
import Meta from "../../components/Meta";
import CampaignSkelton from "@/components/CampaignSkelton";
const defaultFormData: CampaignFormData = {
  Name: "",
  CompanyName: "",
  ContactNumber: "",
  CompanyEmailId: "",
  Comments: "",
};
const metaData: MetaProps = {
  title: "Campaign Landing Page",
  description: "To Submit the Campaign Form Data",
  keywords: "medmonk, campaign",
};
const Campaign: React.FC = () => {
  const timerRef = useRef<any>(null);
  const [formData, setFormData] = useState<CampaignFormData>(defaultFormData);
  const [errors, setErrors] = useState<Partial<CampaignFormData>>({});
  const [customizations, SetCustomizations] =
    useState<CampaignCustomizationModel>(defaultCampaignCustomizations);
  const [submitting, setSubmitting] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  useEffect(() => {
    const headers = {
      "Content-Type": "application/json",
    };
    axios
      .get<CampaignCustomizationsModel>(
        `${ApiUrls.CampaignCustomizations}?populate=*`,
        { headers }
      )
      .then((response) => {
        setIsLoading(false);
        if (
          response.data &&
          response.data &&
          response.data.data &&
          response.data.data.length > 0
        ) {
          let customizationAttribute = response.data.data[0].attributes;
          if (customizationAttribute) {
            if (customizationAttribute.Banner.data.attributes.url) {
              customizationAttribute.Banner.data.attributes.url =
                ApiUrls.BaseAddress +
                customizationAttribute.Banner.data.attributes.url;
            }
            SetCustomizations(customizationAttribute);
          }
        }
      })
      .catch((error) => {
        setIsLoading(false);
        console.error("Error fetching posts:", error);
        toast.error("Failed to Fetch Customizations!");
      });
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      let isValid = ValidateForm(formData, setErrors, customizations);
      if (isValid) {
        const submitFormData = new FormData();
        const transformedFormData = Object.fromEntries(
          Object.entries(formData).map(([key, value]) => [
            key,
            value ? value : null,
          ])
        );
        submitFormData.append("data", JSON.stringify(transformedFormData));
        try {
          const response = await axios({
            method: "post",
            url: `${ApiUrls.Campaigns}`,
            data: submitFormData,
            headers: {
              "Content-Type": "multipart/form-data",
            },
          });
          console.log(response.data);
          toast.success("Form is submitted Successfully");
          setFormData(defaultFormData);
        } catch (error) {
          toast.error("Failed!");
          console.error("Error posting new data:", error);
        }
      }
    } catch (error) {
      toast.error("Failed!");
    } finally {
      setSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    validateField(name, value, timerRef, setErrors);
  };

  const getErrorMessage = (fieldName: string) => {
    const field = Object.keys(errors).find(
      (filedName) => filedName == fieldName
    ) as keyof CampaignFormData;
    return (
      errors && field && <p className="text-red-500 text-sm">{errors[field]}</p>
    );
  };
  const isAllRemoved = () => {
    return !(
      customizations.Name ||
      customizations.CompanyName ||
      customizations.CompanyEmailId ||
      customizations.ContactNumber ||
      customizations.Comments
    );
  };
  if (isLoading) {
    return <CampaignSkelton></CampaignSkelton>;
  }
  return (
    <>
      <Meta {...metaData} />
      <Toaster richColors expand={true} position="top-right" />
      <div className="flex flex-col items-center justify-center min-h-screen p-4 bg-white">
        <div className="bg-campaign-background shadow-lg rounded-lg overflow-hidden w-full md:max-w-4xl">
          <div className="pt-2 pl-10 pr-10 pb-4">
            <div className="pt-2 pl-10 pr-10 pb-4 relative h-56">
              <Image
                src={customizations.Banner.data.attributes.url}
                alt="Header Image"
                layout="fill"
                objectFit="cover"
                objectPosition="center"
                className="rounded-lg"
              />
            </div>
            <form
              onSubmit={handleSubmit}
              className="space-y-4 mt-4 text-gray-500 font-medium "
            >
              {customizations && customizations.Name && (
                <>
                  <input
                    type="text"
                    name="Name"
                    placeholder="Name"
                    onChange={handleChange}
                    value={formData.Name}
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                  />

                  {getErrorMessage("Name")}
                </>
              )}
              {customizations && customizations.CompanyName && (
                <>
                  <input
                    type="text"
                    name="CompanyName"
                    placeholder="Company Name"
                    onChange={handleChange}
                    value={formData.CompanyName}
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                  />
                  {getErrorMessage("CompanyName")}
                </>
              )}
              {customizations && customizations.ContactNumber && (
                <>
                  <input
                    type="text"
                    name="ContactNumber"
                    placeholder="Contact Number"
                    onChange={handleChange}
                    value={formData.ContactNumber}
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                  />
                  {getErrorMessage("ContactNumber")}
                </>
              )}
              {customizations && customizations.CompanyEmailId && (
                <>
                  <input
                    type="text"
                    name="CompanyEmailId"
                    placeholder="Company Email Id"
                    onChange={handleChange}
                    value={formData.CompanyEmailId}
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                  />
                  {getErrorMessage("CompanyEmailId")}
                </>
              )}
              {customizations && customizations.Comments && (
                <>
                  <input
                    type="text"
                    name="Comments"
                    placeholder="Comments"
                    onChange={handleChange}
                    value={formData.Comments}
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                  />
                  {getErrorMessage("Comments")}
                </>
              )}
              {!isAllRemoved() && (
                <div className="flex justify-center">
                  <button
                    type="submit"
                    className="w-1/3 bg-blue-600 text-white px-4 py-2 rounded hover:bg-purple-700 focus:outline-none transition duration-300"
                    disabled={submitting}
                  >
                    {customizations.CTA}
                  </button>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
export default Campaign;
