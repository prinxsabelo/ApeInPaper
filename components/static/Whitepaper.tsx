import styled from 'styled-components';

const Bgimage = styled.div`
  @media screen and (max-width: 640px) {
    background-color: rgba(31, 22, 0, 0.9);
    background-image: url('/assets/images/bitcoin.png');
    background-position: top center;
    background-size: contain;
    background-blend-mode: soft-light;
    background-repeat: no-repeat;
  }
`
const Whitepaper = ({whitePaperSection}:any) => {
  return (
    <div className="flex pb-4 lg:py-20 w-full px-6 md:px-20 xl:px-0" id="whitepaper">
        <div className="mx-auto lg:max-w-5xl w-full flex flex-col">
        <div className='lg:h-16 '> </div>

            <Bgimage className="w-full">
                {whitePaperSection.map((item:any, index:any)=>{
                  return (
                    <div key={index} className='flex justify-between'>
                      <div className="lg:w-[32rem] w-full flex flex-col sm:gap-10 gap-16 mt-7 lg:mt-0">
                        {/* Content Ssection */}
                        {item.fields.whitePaper.map((items:any, index:any)=>{
                          return (
                            <div key={index}>
                                <h2 className="font-semibold text-gray-100 lg:text-3xl text-2xl capitalize">{items.title}</h2>
                                <p className="text-gray-100 mt-3">{items.content}</p> 
                            </div>
                          )
                        })}
                      </div>
                      {/* Image Map */}
                      <img src={item.fields.whitePaperImage.fields.file.url} className="sm:inline-flex md:w-80 w-52 xl:w-96 h-fit mt-7 lg:mt-0 hidden" alt={item.fields.whitePaperImage.fields.title}/>
                    </div>
                  )
                })}
                {/* Lets Talk Section */}
                <div className='sm:mt-10 mt-10'>
                    <h2 className="font-semibold text-gray-100 text-xl capitalize">Let's Talk</h2>
                    <div className="flex mt-2 w-full">
                        <input type="text" placeholder="Your Email" className="px-3 py-2 outline-none bg-gray-100 font-medium rounded-none" />
                        <button className="bg-active px-3 outline-none text-gray-100   hover:bg-yellow-700 hover:font-bold">Send</button>
                    </div>
                </div>
            </Bgimage>
        </div>
    </div>
  )
}

export default Whitepaper