import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Toaster, toast } from "sonner";
import {
  CampaignFormData,
  validateField,
  ValidateForm,
} from "../../Schemas/CampaignSchema";
import { CampaignCustomizationModel } from "@/Interfaces/Campaign/CampaignCustomizationModel";
import { defaultCampaignCustomizations } from "@/Constants/Campaign/defaultCampaignCustomizations";
import { MetaProps } from "@/Models/MetaProps";
import Meta from "../../components/Meta";
import CampaignSkelton from "@/components/CampaignSkelton";
import { addCampaign, getCampaignCustomizations } from "@/services/campaign";
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
    let data = getCampaignCustomizations();
    data
      .then((response) => {
        setIsLoading(false);
        if (response && response.length > 0) {
          let customizationAttribute = response[0];
          if (customizationAttribute) {
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
          const docRef = await addCampaign(transformedFormData);
          console.log("Document written with ID: ", docRef);
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
      (errors && field && errors[field] && (
        <p className="text-red-500 text-sm">{errors[field]}</p>
      )) ||
      null
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

      <section className="h-screen bg-center flex bg-no-repeat bg-home-hero bg-cover py-20">
        <div className="container mx-auto justify-between items-center flex px-4">
          <div className="flex -mt-7">
            <div className="w-1/1 lg:w-1/2 pr-4">
            <div className="bg-campaign-background bg-white shadow-lg rounded-lg overflow-hidden w-full md:max-w-4xl">
              <div className="pt-8 pl-10 pr-10 pb-10">
                {/* <div className="pt-2 pl-10 pr-10 pb-4 relative h-56">
                  <Image
                    src={customizations.Banner.data.attributes.url}
                    alt="Header Image"
                    layout="fill"
                    objectFit="cover"
                    objectPosition="center"
                    className="rounded-lg"
                  />
                </div> */}
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
                        className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-1 bg-slate-100 focus:ring-brownCust"
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
                        className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-1 bg-slate-100 focus:ring-brownCust"
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
                        className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-1 bg-slate-100 focus:ring-brownCust"
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
                        className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-1 bg-slate-100 focus:ring-brownCust"
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
                        className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-1 bg-slate-100 focus:ring-brownCust"
                      />
                      {getErrorMessage("Comments")}
                    </>
                  )}
                  {!isAllRemoved() && (
                    <div className="flex">
                      {/* <button
                        type="submit"
                        className="w-1/3 bg-blue-600 text-white px-4 py-2 rounded hover:bg-purple-700 focus:outline-none transition duration-300"
                        disabled={submitting}
                      > */}
                      <button
                        type="submit"
                        className="text-white bg-gradient-to-b from-brownCust to-orangeCust hover:bg-gradient-to-br focus:outline-none font-medium text-md px-5 py-2.5 text-center me-2 rounded-full"
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
          </div>
        </div>
      </section>

    </>
  );
};
export default Campaign;
