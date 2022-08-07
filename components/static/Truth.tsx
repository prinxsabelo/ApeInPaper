const Truth = ({trustedByNftSection}:any) => {
  return (
    <div className="flex py-10 w-full px-6 md:px-20 xl:px-0 relative">
        <div className="mx-auto lg:max-w-5xl w-full flex flex-col">
            <h2 className="font-semibold lg:text-center text-left text-gray-100 mt-4 lg:max-w-2xl z-10 sm:mx-auto w-full lg:text-3xl text-2xl">Trusted by the Top Crypto, NFT, and FinTech brands</h2>
            <p className="lg:text-center text-left text-gray-100 mt-4 text-lg lg:max-w-2xl z-10 sm:mx-auto w-full">The power of ApeInPaper has been successfully tested, and felt in the field by 30+ crypto, NFT, and fintech related businesses.</p>
            <div className="w-full flex justify-center flex-wrap lg:gap-16 md:gap-8 gap-3 mt-16 z-10">
              {trustedByNftSection.map((items:any,index:any)=>{
                return (
                  <img key={index} src={items.fields.nftImage.fields.file.url} alt={items.fields.nftImage.fields.title} className="lg:w-32 lg:h-32 w-24 h-24"/>
                )
              })}
            </div>

            <h2 className="text-center text-lg text-gray-100 font-semibold mt-10 tracking-wide">Your project could be the next.</h2>
            <a  href={`https://twitter.com/Apeinpaperdotcm?s=20&t=C2EjohMNEp5Ga_i0ERHuyQ`}  target='_blank' className="text-active text-center text-lg font-semibold tracking-wide mt-5">Get-In-Touch Now!</a>
            <img src="/assets/images/chain-box.png" className="absolute w-80 lg:inline-flex hidden left-cube top-0" alt="Chain Box" />
            <img src="/assets/images/chain-box.png" className="absolute w-80 lg:hidden md:mix-blend-normal mix-blend-soft-light inline-flex right-chain top-0 z-0" alt="Chain Box" />
        </div>
    </div>
  )
}

export default Truth