import Image from 'next/image';

interface Props {
  description: string;
  image?: string;
}

const EmptyData = ({ description, image }: Props) => {
  return (
    <div className='flex flex-col items-center justify-center'>
      <Image
        src={image ?? '/assets/nodata.svg'}
        alt='empty'
        height={300}
        width={300}
      />
      <h1 className='md:text-2xl text-lg text-gray-500 mt-10 mb-16 font-bold text-center'>
        {description}
      </h1>
    </div>
  );
};

export default EmptyData;
