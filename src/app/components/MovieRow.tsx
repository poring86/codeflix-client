import Image from 'next/image';

type MovieRowProps = {
  sectionTitle: string;
};

export function MovieRow({ sectionTitle }: MovieRowProps) {
  return <div className='flex-col space-y-4'>
    <div className='flex'>
      <h2 className='-ml-1 inline-flex text-2xl items-center font-bold'>Featured</h2>
    </div>
    <div className='-ml-7 flex space-x-4 overflow-x-scroll p-6 scrollbar-hide'>
      {[1, 2, 3, 4, 5].map((index) => (
        <div key={index} className='group relative h-28 min-w-[200px] cursor-pointer rounded bg-gradient-to-t from-transparent to-black transition-transform duration-200 ease-out hover:opacity-100 md:h-36 md:min-w-[260px] md:hover:scale-110'>
          <Image
            src={`/item_${index}.png`}
            fill={true}
            alt='MAID'
            className='rounded' />
        </div>
      ))}
    </div>
  </div>;
}
