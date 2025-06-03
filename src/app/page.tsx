

export default function Home() {
  return (
    <div className="grid grid-rows-2 text-gray-400 md:grid-cols-2 md:grid-rows-1 items-center justify-items-center h-screen bg-gradient-to-r from-stone-900 to-gray-900 p-0 m-0 pb-0 gap-2 sm:p-5  font-[family-name:var(--font-geist-sans)]">
      <div className=" grid grid-rows-[auto_1fr_auto] h-full w-full    ">
        <div className="row-start-1  text-lg  md:text-2xl">
          lang
        </div>
        <div className="row-start-2  grid items-center justify-center h-full w-full ">
          <h1  >test</h1>
        </div>
        <footer className="row-start-3 items-center px-2  text-lg h-15 md:h-30 md:text-2xl flex  justify-between">

          <div className="flex gap-3 md:gap-15">
            <a
              className="flex items-center gap-2 hover:underline hover:underline-offset-4 hover:scale-95"
              href="#about"

            >
              About
            </a>
            <a
              className="flex items-center gap-2 hover:underline hover:underline-offset-4 hover:scale-95"
              href="#projects"

            >
              Projects
            </a>
            <a
              className="flex items-center gap-2 hover:underline hover:underline-offset-4 hover:scale-95"
              href="#contact"
            >
              Contact
            </a></div>
          <div className=" flex gap-5 ">
            <a href="https://www.linkedin.com/in/jesus-retana-artavia/" target="_blank" className=""><img className="h-10 hover:shadow-xl/50 hover:scale-95" src="https://dm7725hym1.ufs.sh/f/E22hCg5xRFzeTQQkraVqvwO8ZkpX2zW0yb3cu75g1RLlEGaI" alt="" /></a>
            <a href="https://github.com/jesusretana15" target="_blank"><img className="h-10 hover:scale-95" src="https://dm7725hym1.ufs.sh/f/E22hCg5xRFzeZe3zWLFGUVWF3BTqvIRP48G1MhfCwApztN76" alt="" /></a>
          </div>
        </footer>
      </div>
      <div className=" grid  items-center justify-center h-full w-full overflow-y-scroll p-5 ">
        <section id="about" className="p-5   rounded-lg ">
          <h2 className="text-4xl font-bold pb-10">About</h2>
          <p className="text-2xl pb-5 ">I’m a passionate <strong className="font-extrabold text-slate-400"> web developer</strong> specializing in building  responsive, accessible, and user-friendly websites and web apps using <strong className="font-extrabold text-slate-400"> React, Next.js, Tailwind CSS, and Strapi</strong>. With a strong foundation in <strong className="font-extrabold text-slate-400"> HTML, CSS, and JavaScript</strong> , I create clean, maintainable code tailored to client needs, including bilingual and niche market projects.</p>
          <p className="text-2xl">Beyond technical skills, I bring strong <strong className="font-extrabold text-slate-400"> problem-solving abilities, attention to detail, and clear communication </strong> to every project. I’m dedicated to continuous learning and delivering high-quality work that helps businesses grow online. My goal is to combine creativity and technology to build impactful digital experiences.</p>
        </section>

        <section id="projects" className="p-5">
          <h2 className="text-4xl font-bold pb-10">Projects</h2>
          <p className="text-2xl">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Error reiciendis incidunt culpa vero beatae, amet animi, porro quod ratione voluptate consequuntur perspiciatis, laborum eligendi aliquid sequi dignissimos odit at. Architecto.</p>
          <p className="text-2xl">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Error reiciendis incidunt culpa vero beatae, amet animi, porro quod ratione voluptate consequuntur perspiciatis, laborum eligendi aliquid sequi dignissimos odit at. Architecto.</p>
          <p className="text-2xl">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Error reiciendis incidunt culpa vero beatae, amet animi, porro quod ratione voluptate consequuntur perspiciatis, laborum eligendi aliquid sequi dignissimos odit at. Architecto.</p>
          <p className="text-2xl">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Error reiciendis incidunt culpa vero beatae, amet animi, porro quod ratione voluptate consequuntur perspiciatis, laborum eligendi aliquid sequi dignissimos odit at. Architecto.</p>
          <p className="text-2xl">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Error reiciendis incidunt culpa vero beatae, amet animi, porro quod ratione voluptate consequuntur perspiciatis, laborum eligendi aliquid sequi dignissimos odit at. Architecto.</p>
          <p className="text-2xl">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Error reiciendis incidunt culpa vero beatae, amet animi, porro quod ratione voluptate consequuntur perspiciatis, laborum eligendi aliquid sequi dignissimos odit at. Architecto.</p>
          <p className="text-2xl">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Error reiciendis incidunt culpa vero beatae, amet animi, porro quod ratione voluptate consequuntur perspiciatis, laborum eligendi aliquid sequi dignissimos odit at. Architecto.</p>
        </section>

        <section id="contact" className="p-5">
          <h2 className="text-4xl font-bold pb-10">Contact </h2>
          <p className="text-2xl">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Error reiciendis incidunt culpa vero beatae, amet animi, porro quod ratione voluptate consequuntur perspiciatis, laborum eligendi aliquid sequi dignissimos odit at. Architecto.</p>
          <p className="text-2xl">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Error reiciendis incidunt culpa vero beatae, amet animi, porro quod ratione voluptate consequuntur perspiciatis, laborum eligendi aliquid sequi dignissimos odit at. Architecto.</p>
          <p className="text-2xl">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Error reiciendis incidunt culpa vero beatae, amet animi, porro quod ratione voluptate consequuntur perspiciatis, laborum eligendi aliquid sequi dignissimos odit at. Architecto.</p>
        </section>
      </div>


    </div>
  );
}
