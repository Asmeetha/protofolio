import AboutImg from '../assets/about.png';

export default function About () {
    const config  = {
        line1: ' Hi, My Name is ASMEETHA BEGAM A , I am pursuving My BE Electronics And Communication Engineering in Kongu Engineering College,Erode . I finding my Jobs for Career Growth .Ibuilt beautiful websites and some Hardware Projects + Bootstrap',
        line2: 'I Know HTML,CSS ,C,PYTHON,JAVA,MYSQL Node.js',
        line3: 'In backend I know Node.js, Express.js, MongoDB, and Mongoose'
    }

    return <section className='flex flex-col md:flex-row bg-secondary px-5' id='about'>
        <div className='py-5 md:w-1/2'>
            <img src={AboutImg} />
        </div>
        <div className='md:w-1/2 flex justify-center'>
            <div className='flex flex-col justify-center text-white'>
                <h1 className='text-4xl border-b-4 border-primary mb-5 w-[170px] font-bold'>About Me</h1>
                <p className='pb-5'>{config.line1}</p>
                <p className='pb-5'>{config.line2}</p>
                <p className='pb-5'>{config.line3}</p>
            </div>
        </div>
    </section>
}