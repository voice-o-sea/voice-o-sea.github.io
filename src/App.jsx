import { useRef, useState } from 'react';
import { projects } from './assets/projects.js';

export default function App() {
    const [projectsList] = useState(projects || []);

    const aboutRef = useRef(null);
    const projectsRef = useRef(null);

    const scrollToSection = (ref) => {
        ref.current?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <div className='min-h-screen font-black bg-green-100'>
            {/* Navbar */}
            <nav className='fixed left-1/2 transform -translate-x-1/2 md:left-auto md:transform-none md:translate-none md:right-8 xl:right-16 bg-green-950 z-50 w-fit px-1 pb-1 md:px-2 md:pb-2 rounded-b-2xl'>
                <div className='flex flex-row px-4 py-2 space-x-4 border-2 border-t-0 border-dashed border-green-50 rounded-b-2xl divide-x-2 divide-dashed divide-green-50'>
                    <button
                        className='text-green-50 hover:text-green-700 text-xs md:text-sm xl:text-base pr-4 xl:py-1'
                        onClick={() => scrollToSection(aboutRef)}
                    >
                        About
                    </button>
                    <button
                        className='text-green-50 hover:text-green-700 text-xs md:text-sm xl:text-base xl:py-1'
                        onClick={() => scrollToSection(projectsRef)}
                    >
                        Projects
                    </button>
                </div>
            </nav>

            {/* Hero / About Section */}
            <section
                ref={aboutRef}
                className='min-h-screen flex flex-col items-center max-w-7xl 2xl:max-w-full mx-auto 2xl:mx-2xl px-4'
            >
                <div className='w-full h-screen flex flex-col items-center justify-center pb-2 gap-16 md:gap-0'>
                    <h1 className='flex items-center justify-end text-3xl md:text-4xl lg:text-4xl xl:text-5xl font-bold text-green-950 md:mb-4 2xl:mb-6 text-center'>
                        Hi, I'm Polina
                    </h1>
                    <div className='p-2 md:p-3 text-green-950 text-center text-base lg:text-lg xl:text-xl max-w-xl md:max-w-8/12 lg:max-w-4xl xl:max-w-5xl bg-white/90 rounded-xl '>
                        <p className='h-full items-center justify-center p-2 xl:p-4 rounded-xl border-2 border-dashed border-green-950'>
                            Front-end developer focused on building responsive,
                            accessible, visually polished applications with{' '}
                            <span className=' text-green-700'>React</span>,{' '}
                            <span className=' text-green-700'>
                                Tailwind CSS
                            </span>
                            , and modern{' '}
                            <span className=' text-green-700'>JavaScript</span>.
                            I deliver clean, maintainable code, optimized
                            performance, and reliable API integrations.
                        </p>
                    </div>
                </div>
            </section>

            {/* Projects Section */}
            <section
                ref={projectsRef}
                className='min-h-screen w-full flex flex-col items-center justify-center px-2 sm:px-4 lg:px-8 xl:px-16 pt-12 md:pt-8 pb-2 md:pb-8'
            >
                <div className='min-h-full max-w-5xl xl:max-w-10/12'>
                    <h2 className='text-xl sm:text-2xl lg:text-3xl xl:text-4xl text-green-950 mb-2 sm:mb-8 text-center'>
                        Projects
                    </h2>
                    <div className='flex flex-col gap-4 md:gap-8'>
                        {projectsList.map((pr, idx) => (
                            <div
                                key={idx}
                                className='w-full bg-white/90 rounded-xl p-2 md:p-3'
                            >
                                <div className='p-2 lg:p-4 rounded-xl border-2 border-dashed border-green-950 flex flex-col-reverse md:flex-row'>
                                    {/* Image and Links */}
                                    <div className='flex flex-col items-center justify-between w-full md:w-1/3 md:mr-8 mt-2 md:mt-0'>
                                        <div className='flex-1 flex flex-col items-center justify-center'>
                                            <div className='w-full aspect-video max-w-xs sm:max-w-sm md:max-w-full'>
                                                <img
                                                    src={`/${pr.image}`}
                                                    alt='Project Screenshot'
                                                    className='w-full h-full rounded-lg object-cover border-2 border-white'
                                                />
                                            </div>
                                        </div>
                                        <div className='flex flex-wrap justify-center space-x-4 mt-2 md:mt-4'>
                                            <a
                                                href={pr.demoLink}
                                                target='_blank'
                                                rel='noopener noreferrer'
                                                className='text-green-950 underline hover:text-green-700 text-sm md:text-base'
                                            >
                                                Live Demo
                                            </a>
                                            <a
                                                href={pr.gitLink}
                                                target='_blank'
                                                rel='noopener noreferrer'
                                                className='text-green-950 underline hover:text-green-700 text-sm md:text-base'
                                            >
                                                GitHub
                                            </a>
                                        </div>
                                    </div>
                                    {/* Description */}
                                    <aside className='flex-1 flex flex-col justify-between items-center md:items-start text-center md:text-start'>
                                        <h3 className='text-lg sm:text-2xl text-green-950 mt-1 md:mt-2 mb-1 md:mb-2'>
                                            {pr.title}
                                        </h3>
                                        <p className='text-green-950 font-quantico text-sm md:text-base mb-2'>
                                            {pr.description}
                                        </p>
                                        <ul className='text-green-950 space-y-2'>
                                            <li>
                                                <span className='text-sm md:text-base'>
                                                    Features:
                                                </span>
                                                <ul className='list-disc list-inside ml-4 mt-0 font-quantico text-sm md:text-base text-start'>
                                                    {pr.features.map(
                                                        (ft, jdx) => (
                                                            <li key={jdx}>
                                                                {ft}
                                                            </li>
                                                        )
                                                    )}
                                                </ul>
                                            </li>
                                            <li>
                                                <span className='text-sm md:text-base'>
                                                    Stack:
                                                </span>{' '}
                                                <span className='font-quantico text-sm md:text-base'>
                                                    {pr.stack.join(', ')}
                                                </span>
                                            </li>
                                        </ul>
                                    </aside>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
