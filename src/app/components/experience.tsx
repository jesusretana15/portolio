import { Html, Float, useGLTF, Environment, PresentationControls, ContactShadows } from '@react-three/drei';
import { useTranslations } from 'next-intl';


export default function Experience() {

    const t = useTranslations('HomePage');
    const computer = useGLTF('https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/macbook/model.gltf');
    return <>
        <Environment preset='city' />
        <PresentationControls global rotation={[0.1, 0.1, 0]} polar={[0.1, 0.1]} azimuth={[-0.1, 0.1]} damping={0.1} snap>
            <Float scale={0.9} rotationIntensity={0.2}>
                <rectAreaLight
                    width={2.5}
                    height={1.65}
                    intensity={65}
                    color={'#6b8c12'}
                    rotation={[0.1, Math.PI, 0]}
                    position={[0, 0.5, -1.5]}
                />
                <primitive object={computer.scene} position-y={-1} />
                <Html transform distanceFactor={9.7} position={[0.85, 0.15, -2.6]} rotation-x={-0.27}>
                    <div className="bg-[url('https://dm7725hym1.ufs.sh/f/E22hCg5xRFze6ZKKg07NyQ0SfuXEIvZsitwAlU425oGTRm7x')]  bg-contain bg-center bg-no-repeat ">
                        <div className="  grid grid-cols-6 grid-rows-4  h-25 w-38">
                            <div className="items col-span-5 col-start-1">
                                <button className="h-4 mt-2 w-[150px] relative inline-flex items-center justify-center p-0.5 mb-1 overflow-hidden text-sm   text-gray-400 rounded-lg group bg-gray-900/80 focus:ring-1 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
                                    <span className="relative  transition-all ease-in duration-75 rounded-md group-hover:bg-transparent group-hover:dark:bg-transparent">
                                        Jesus Artavia
                                    </span>
                                </button></div>
                            <div className="col-span-2 col-start-3 row-start-2">
                                <button className="h-4 w-25  relative inline-flex items-center justify-center p-0.5 mb-1 overflow-hidden text-sm   text-gray-400 rounded-lg group bg-gray-900/80 focus:ring-1 focus:outline-none hover:scale-95">
                                    <span className="relative px-4 py-2.5 transition-all ease-in duration-75 rounded-md group-hover:bg-transparent group-hover:dark:bg-transparent">
                                        <a className='text-xs' href="#about">{t('about')}</a>
                                    </span>
                                </button>
                                <button className="h-4 w-25  relative inline-flex items-center justify-center p-0.5 mb-1 overflow-hidden text-sm   text-gray-400 rounded-lg group bg-gray-900/80 focus:ring-1 focus:outline-none hover:scale-95">
                                    <span className="relative px-4 py-2.5 transition-all ease-in duration-75 rounded-md group-hover:bg-transparent group-hover:dark:bg-transparent">
                                        <a className='text-xs' href="#projects">{t('projects')}</a>
                                    </span>
                                </button>
                                <button className="h-4 w-25  relative inline-flex items-center justify-center p-0.5 mb-1 overflow-hidden text-sm   text-gray-400 rounded-lg group bg-gray-900/80 focus:ring-1 focus:outline-none hover:scale-95">
                                    <span className="relative px-4 py-2.5 transition-all ease-in duration-75 rounded-md group-hover:bg-transparent group-hover:dark:bg-transparent">
                                        <a className='text-xs' href="#contact">{t('contact')}</a>
                                    </span>
                                </button>
                            </div>

                        </div>
                    </div>
                </Html>

            </Float>
        </PresentationControls>
        <ContactShadows position-y={-1}></ContactShadows>
    </>
}