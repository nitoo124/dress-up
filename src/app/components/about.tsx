
import React from 'react'
import Image from 'next/image'
import about from '../../../public/images/about.jpg'
import Button from './button'







function About() {
    return (
        <div className='  lg:px-12 p-4 max-w-screen-2xl mx-auto mt-28 ' id='about'>
            <div className=' shadow-3xl rounded-xl'>
                <div className=' flex flex-col lg:flex-row md:flex-col justify-between items-center gap-10 p-10'>

                    <div className=' lg:text-left text-center lg:w-[50%] p-5'>
                        <h2 className=' text-3xl text-pink-600 font-bold mt-5  '>About us</h2>
                        <h5 className=' font-semibold mt-2'>Why Choose Us?</h5>
                        <p className=' mt-5 lg:line-clamp-none line-clamp-3 '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, expedita hic
                            facere voluptas esse, voluptatem saepe ut id sapiente, quibusdam commodi
                            aspernatur culpa quia dicta nisi voluptates illo inventore porro Lorem ipsum dolor
                            sit amet consectetur adipisicing elit. Quo nostrum voluptatibus fugiat possimus
                            rem recusandae ipsa a? Molestiae tempora perferendis ad eos minima! Doloribus
                            quae, numquam laudantium quasi tenetur saepe.</p>

                            <div className=' mt-5'>
                                <Button text = 'Order Now' />
                            </div>

                    </div>
                    {/*image  */}
                    <div
                    
                    >

                        <Image className=' rounded-2xl' src={about} alt='about pic'
                            height={600}
                            width={600}
                            loading='lazy'
                        />


                    </div>
                </div>
            </div>

        </div>
    )
}

export default About