import { useTranslations } from 'next-intl';
import LanguageSwitcher from './langSwitch';
import * as motion from "motion/react-client"

export default function LeftSide() {
    const t = useTranslations('HomePage');

    return (

        <motion.section
            className='h-full w-full  '
            initial={{ opacity: 0 }}
            whileInView={{
                opacity: 1,
                transition: {
                    duration: 3
                }
            }}
            viewport={{
                once: true,
                amount: 0.1
            }}
        >
            <div className=" grid grid-rows-[auto_1fr_auto] h-full w-full    ">
                <div className="row-start-1  text-base  md:text-base">
                    <LanguageSwitcher />
                </div>
                <div className="row-start-2  grid items-center justify-center h-full w-full ">
                    <h1  >test</h1>
                </div>
                <footer className="row-start-3 items-center px-2  text-base h-15 md:h-30 md:text-base flex  justify-between">

                    <div className="flex gap-3 md:gap-15">
                        <a
                            className="flex items-center gap-2 hover:underline hover:underline-offset-4 hover:scale-95"
                            href="#about"

                        >
                            {t('about')}
                        </a>
                        <a
                            className="flex items-center gap-2 hover:underline hover:underline-offset-4 hover:scale-95"
                            href="#projects"

                        >
                            {t('projects')}
                        </a>
                        <a
                            className="flex items-center gap-2 hover:underline hover:underline-offset-4 hover:scale-95"
                            href="#contact"
                        >
                            {t('contact')}
                        </a></div>
                    <div className=" flex gap-5 items-center justify-center ">
                        <a href="https://www.linkedin.com/in/jesus-retana-artavia/" target="_blank" className=""><img className="h-7 hover:shadow-xl/50 hover:scale-95" src="https://dm7725hym1.ufs.sh/f/E22hCg5xRFzeTQQkraVqvwO8ZkpX2zW0yb3cu75g1RLlEGaI" alt="" /></a>
                        <a href="https://github.com/jesusretana15" target="_blank"><img className="h-7 hover:scale-95" src="https://dm7725hym1.ufs.sh/f/E22hCg5xRFzeZe3zWLFGUVWF3BTqvIRP48G1MhfCwApztN76" alt="" /></a>
                    </div>
                </footer>
            </div>
        </motion.section>


    )
}