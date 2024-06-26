import Image from 'next/image';

const AccreditedBy = () => {
  return (
    <div className="w-1/4 flex flex-col items-center justify-center">
      <h3 className="font-semibold text-gray-800 mb-2 text-lg whitespace-nowrap">Accredited by</h3>
      <div className="relative w-full h-24 flex justify-center items-center">
        <Image
          src="/assets/AccreditedBy.jpg"
          alt="Accreditation Logo"
          layout="responsive"
          width={100}
          height={60}
        />
      </div>
    </div>
  );
};

export default AccreditedBy;