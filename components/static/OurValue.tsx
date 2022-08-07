import Image from "next/image"

const OurValue = ({coreValues}:any) => {
  return (
    <div className="lg:max-w-5xl w-full mx-auto flex flex-col px-6 md:px-20 xl:px-0 relative">
        <h2 className="font-semibold text-gray-100 lg:text-3xl text-2xl capitalize lg:max-w-5xl w-full">Our core values</h2>
        <div className="mt-10 flex flex-wrap gap-10 z-10 lg:max-w-5xl w-full">
            {coreValues.map((item:any, index:any)=>{
                return(
                    <div key={index} className="w-96 p-5 rounded-lg bg-values">
                        <h4 className="text-gray-100 tracking-wide font-medium">{index+1}. {item.fields.title}</h4>
                        <p className="text-gray-100 mt-3">{item.fields.content}</p>
                    </div>
                )
            })}
        </div>
            <img src="/assets/images/chain-box.png" className="md:mix-blend-normal mix-blend-soft-light absolute z-0 right-chain w-96 top-32" alt="Chain Box" />
        <div className="mt-20 mb-10">
            
            <a  href={`https://twitter.com/Apeinpaperdotcm?s=20&t=C2EjohMNEp5Ga_i0ERHuyQ`}  target='_blank' className="text-active tracking-widest text-xl font-bold">Get A Free 40 Minute Consultation Call</a>
        </div>
    </div>
  )
}

export default OurValue