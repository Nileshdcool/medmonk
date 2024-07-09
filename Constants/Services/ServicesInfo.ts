const servicesInfo: ServiceType = {
    Hero: {
      Heading: 'Our Complete Patient Support Solution',
      Content: `At Medmonk, we are your partners in simplifying and streamlining the patient support process by providing comprehensive solutions to brands, healthcare providers, and patients nationwide. Our dedication stems from a deep comprehension of the critical importance of access to specialty medications, and we strive to ensure that it happens seamlessly.`,
      BackgroundImage: ''
    },
    PatientSupport: {
      Quote: `Everybody wins when patients get access to their medications... regardless of price.`,
      Types: [
        {
          Heading: "Assistance Programs",
          Description: `Medmonk's copay, voucher, and patient assistance programs improve patient access to medications. Delivered electronically and traditionally, our programs allow patients to stay on therapy and prevent disruptions to care regardless of the site of administration.`
        },
        {
          Heading: "Patient and Provider Support Services",
          Description: `Our Coordinated Care Management team assists prescribers, patients, and pharmacies in navigating all aspects of the prescription journey. From benefit verifications to prior authorizations, to technical and billing support, our Hub Services team is a one-stop shop for every stakeholder.`
        },
        {
          Heading: "Distribution and Adherence",
          Description: `Depending on the brand's strategy, we use a wide variety of electronic and traditional communication channels, specialized for prescribers, pharmacies, and patients. These keep the conversation flowing with continuous incoming feedback, while keeping programs top of mind.`
        },
        {
          Heading: "Analytics and Custom Reports",
          Description: `Depending on the brand's strategy, we use a wide variety of electronic and traditional communication channels, specialized for prescribers, pharmacies, and patients. These keep the conversation flowing with continuous incoming feedback while keeping programs top of mind.`
        }
      ]
    },
    Automation: {
      Heading: "eBV and ePA Automation",
      Content: `We take the hassle out of benefit verification and prior 
                authorization through our automated processes. This ensures 
                swift access to therapy, enhancing the patient experience. For 
                healthcare providers, we seamlessly connect patients to hub 
                services and copay support directly through their e-Rx 
                workflow.`,
      Cards: [
        {
          Image: '/assets/Home.png',
          Description: `Electronically receive enrollment form from provider's office`
        },
        {
          Image: "/assets/automation-ico2.png",
          Description: `Verify coverage of benefits with the patient's primary and secondary payers`
        },
        {
          Image: "/assets/automation-ico3.png",
          Description: `Initiate automated prior authorization request and obtain 
        approval for the treatment`
        },
        {
          Image: '/assets/automation-ico4.png',
          Description: `Verification and prior authorization completed`
        }
      ]
    }
  };
  
  export default servicesInfo;
  