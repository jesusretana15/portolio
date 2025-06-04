import { useTranslations } from 'next-intl';
import Projects from './projects';
import * as motion from "motion/react-client"
import { ContactUs } from './contactForm';


export default function RightSide() {

    const t = useTranslations('HomePage');

    return (
        <div className=" grid  items-center justify-center h-full w-full overflow-y-scroll ">
            <motion.section
                className="hero bg-[url('https://dm7725hym1.ufs.sh/f/E22hCg5xRFzeQK6R0rfiRgLoENCsDtph82liuc1rnWYbJxVH')] bg-cover bg-center bg-no-repeat"
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
                <section id="about" className="p-5   rounded-lg ">
                    <h2 className="text-2xl font-bold pb-5">{t('about')}</h2>
                    <p className="text-base pb-2 "> {t('about1')}  <strong className="font-extrabold text-slate-400"> {t('about2')} </strong> {t('about3')}  <strong className="font-extrabold text-slate-400"> {t('about4')} </strong> {t('about5')}  </p>
                    <p className="text-base">{t('about6')}  <strong className="font-extrabold text-slate-400"> {t('about7')} </strong> {t('about8')}</p>
                </section>
            </motion.section>
            <motion.section
                className="hero bg-[url('https://dm7725hym1.ufs.sh/f/E22hCg5xRFzeQK6R0rfiRgLoENCsDtph82liuc1rnWYbJxVH')] bg-cover bg-center bg-no-repeat"
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
                <Projects />
            </motion.section>
            <motion.section
                className="hero bg-[url('https://dm7725hym1.ufs.sh/f/E22hCg5xRFzeQK6R0rfiRgLoENCsDtph82liuc1rnWYbJxVH')] bg-cover bg-center bg-no-repeat"
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
                <section id="contact" className="p-5">
                    <h2 className="text-2xl font-bold pb-5">{t('contact')} </h2>
                    <ContactUs />
                </section>
            </motion.section>





        </div>
    )
}




