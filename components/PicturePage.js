import Image from 'next/image';
const PicturePage = () => {
    return (
      <section>
        <center>
        <div className="w-1/2 pt-5 h-auto lg:hidden ">
            <Image src={'/phone.png'} priority  width={1000} height={500} alt={'app'} /> 
        </div>
        <div className='hidden lg:block w-1/5 pt-2 h-auto'>
    <Image src={'/phone.png'} priority width={1000} height={500} alt={'app'} />
</div>

        </center>
      </section>
    );
  };
  
  export default PicturePage;