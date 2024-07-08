import Image from 'next/image';

const AccreditedBy = () => {
  return (
    <div className="flex flex-col items-center md:justify-start justify-center">
      <h3 className="font-semibold text-gray-800 mb-1 text-lg whitespace-nowrap w-full">Accredited by</h3>
      <div className="relative w-full h-24 flex items-center md:justify-start justify-center">
        <Image
          src="/assets/AccreditedBy-New.png"
          alt="Accreditation Logo"
          layout="responsive"
          className='max-w-16'
          width={50}
          height={50}
        />
      </div>
    </div>
  );
};

export default AccreditedBy;