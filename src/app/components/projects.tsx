import { useTranslations } from 'next-intl';

export default function Projects() {
    const t = useTranslations('HomePage');
    const project = [{
        id: 1,
        tittle: t('project1'),
        img: "https://dm7725hym1.ufs.sh/f/E22hCg5xRFzeKVHFXwbft2iwOnRjcuzy0asI4qJbECZVFhXT",
        description: t('project1description'),
        live: "https://www.patronaje101.com/",
        code: "https://github.com/jesusretana15/patternmaking101"
    }, {
        id: 2,
        tittle: t('project2'),
        img: "https://dm7725hym1.ufs.sh/f/E22hCg5xRFzerzKTsGehwoidr7QAReFzTVHE0XZckBfSmtxJ",
        description: t('project2description'),
        live: "https://card2bond.com/",
        code: "https://github.com/jesusretana15/cards2bond"
    },
    {
        id: 3,
        tittle: t('project3'),
        img: "https://dm7725hym1.ufs.sh/f/E22hCg5xRFzeKC7gdBbft2iwOnRjcuzy0asI4qJbECZVFhXT",
        description: t('project3description'),
        live: "https://jesusretana15.github.io/verve/homepage.html",
        code: "https://github.com/jesusretana15/verve"
    },
    {
        id: 4,
        tittle: t('project4'),
        img: "https://dm7725hym1.ufs.sh/f/E22hCg5xRFzevggTuzk1j5QZDO8kJINCVn6iGdemaF07oHby",
        description: t('project4description'),
        live: "https://jesusretana15.github.io/TattooStudio/",
        code: "https://github.com/jesusretana15/TattooStudio"
    },
    ]
    const projectsList = project.map((project) => (
        <div className="py-5" key={project.id}>
            <div className="flex flex-col items-center bg-gray-800 rounded-2xl shadow-sm md:flex-row md:max-w-5xl">
                <img className="object-cover w-full h-60 rounded-t-lg  md:w-48 md:rounded-none md:rounded-l-lg" src={project.img} alt={project.tittle} />
                <div className="flex flex-col justify-between p-4  md:p-7  leading-normal">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{project.tittle}</h5>
                    <p className="mb-3 font-normal text-base text-gray-700 dark:text-gray-400">{project.description}</p>
                    <div className='flex justify-start gap-3 items-center'>
                        <a className='hover:scale-105' href={project.live} target="_blank">
                            <button className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-r from-stone-900 to-gray-900  hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
                                <span className=" relative px-5 py-2.5 transition-all ease-in duration-75 bg-gray-900 rounded-md group-hover:bg-transparent group-hover:dark:bg-transparent">
                                    {t('projectOpenProject')}
                                </span>
                            </button>
                        </a>
                        <a className='hover:scale-105' href={project.code} target="_blank">
                            <button className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-r from-stone-900 to-gray-900  hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
                                <span className="flex items-center gap-3 relative px-5 py-2.5 transition-all ease-in duration-75 bg-gray-900 rounded-md group-hover:bg-transparent group-hover:dark:bg-transparent">
                                    {t('projectOpenCode')} <img className="h-5 md:h-5 hover:scale-95" src="https://dm7725hym1.ufs.sh/f/E22hCg5xRFzeZe3zWLFGUVWF3BTqvIRP48G1MhfCwApztN76" alt="" />
                                </span>
                            </button>
                        </a>

                    </div>
                </div>
            </div>
        </div>
    ));

    return (
        <section id="projects" className="p-5">
            <h2 className="text-2xl font-bold pb-5">{t('projects')}</h2>
            <div className=''>{projectsList}</div>
        </section>
    )
}