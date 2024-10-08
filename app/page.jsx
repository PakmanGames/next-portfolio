import Image from "next/image";
import gradPhoto from "@/public/images/grad-photo-1.png";

function Page() {
  return (
    <div className="flex flex-grow justify-center items-center">
      <div className="flex justify-center items-center flex-wrap border-solid rounded-2xl border-8 border-blue-900 p-11 gap-10 m-10 bg-slate-100">
        <div>
          <Image src={gradPhoto} alt="Picture of Andy Pak" className="w-72 h-auto border-solid rounded-2xl border-8 border-black"></Image>
        </div>
        <div className="text-center flex flex-col gap-11 items-center justify-center">
          <div className="text-7xl">Andy Pak</div>
          <div id="bio" className="text-xl max-w-xl flex flex-col gap-3">
            <div>Software Engineer at McMaster University</div>
            <div className="text-base">I am passionate about web development, digital solutions, challenges, and opportunities. Feel free to reach out!</div>
          </div>
          <div className="max-w-80 flex flex-col gap-5">
            <p className="font-extrabold text-xl"><strong>Skills:</strong></p>
            <p className="text-left"><strong>Languages:</strong> JavaScript, HTML, CSS, Java, Python, Ruby, C, Bash, Verilog, LaTeX</p>
            <p className="text-left"><strong>Frameworks:</strong> React, Next.js, Tailwind CSS, Bootstrap</p>
            <p className="text-left"><strong>Technologies: </strong> Git, GitHub, Apache Maven, Linux, MongoDB, Node.js, Arduino</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page