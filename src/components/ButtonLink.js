import React from 'react'

const ButtonLink = ({ to, children, className = '' }) => {
    return (
        <div className='pt-3'>
            {to &&
                <a href={to} className={`px-6 py-3 bg-brand text-yellow-50
                        rounded-full  font-semibold tracking-wide text-xl
                        hover:outline outline-offset-1 hover:outline-1 hover:font-bold outline-bg
                                hover:outline-brand hover:cursor-pointer capitalize 
                                ${className}
                 `}>{children}</a>
            }
        </div>

    )
}

export default ButtonLink