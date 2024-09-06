import { TiTick } from "react-icons/ti";

const Options = () => {
  return (
    <div className='flex justify-center items-center py-4'>
      <div className='flex items-center space-x-8'>
        <div className='flex items-center space-x-2'>
          <div className='bg-[#3FBB7D] rounded-full w-6 h-6 flex items-center justify-center'>
            <TiTick color='white' size={16} />
          </div>
          <p className='text-white font-medium text-sm'>Choose currencies</p>
        </div>
        <div className='flex items-center space-x-2'>
          <div className='bg-[#252C44] rounded-full w-6 h-6 flex items-center justify-center'>
            <p className='text-white text-sm'>2</p>
          </div>
          <p className='text-white font-medium text-sm'>Enter the address</p>
        </div>
      </div>
    </div>
  );
};

export default Options;
