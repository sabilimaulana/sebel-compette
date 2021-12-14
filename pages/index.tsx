import type { NextPage } from "next";
import Image from "next/image";
import Navbar from "../components/Navbar";

const Home: NextPage = () => {
  return (
    <div className="home md:pb-32">
      <Navbar />

      <section className="w-full flex flex-col items-center mt-36 mb-24 md:mb-36">
        <h1 className="text-4xl md:text-6xl font-bold text-slate-700 sm:text-white md:text-white">
          Build Your Career.
        </h1>
        <h1 className="text-center text-4xl md:text-6xl font-bold text-slate-700 sm:text-white md:text-white mb-8 md:mb-16">
          Grow Together & Faster.
        </h1>
        <button className="text-center px-8 py-3 rounded-full bg-brown-50 text-brown-100 mb-12 md:mb-28">
          Explore Mine
        </button>

        <figure className="h-[150px] w-[217.5px] md:h-[500px] md:w-[725px] relative mb-16">
          <Image src="/img/illustration.png" alt="Illustration" layout="fill" />
        </figure>

        <section className="grid grid-cols-2 gap-6 md:grid-cols-4 md:gap-16">
          <figure className="h-[30px] w-[151px] md:h-[40px] md:w-[202px] relative">
            <Image src="/img/facebook.png" alt="facebook" layout="fill" />
          </figure>

          <figure className="h-[30px] w-[134px] md:h-[40px] md:w-[187px] relative">
            <Image src="/img/microsoft.png" alt="microsoft" layout="fill" />
          </figure>

          <figure className="h-[30px] w-[91px] md:h-[40px] md:w-[122px] relative">
            <Image src="/img/google.png" alt="google" layout="fill" />
          </figure>

          <figure className="h-[30px] w-[98px] md:h-[40px] md:w-[133px] relative">
            <Image src="/img/spotify.png" alt="spotify" layout="fill" />
          </figure>
        </section>
      </section>

      <section className="md:px-24 flex flex-col md:flex-row justify-between items-center">
        <figure className="h-[200px] w-[281px] mb-8 md:mb-0 md:h-[400px] md:w-[563px] relative">
          <Image src="/img/gallery.png" alt="Gallery" layout="fill" />
        </figure>

        <section>
          <section className="pb-4 md:pb-12">
            <h1 className="text-2xl md:text-5xl">We help best people</h1>
            <h1 className="text-2xl md:text-5xl">like you across the world</h1>
          </section>

          <section className="flex flex-col gap-8 mb-36">
            <section className="flex items-center gap-4">
              <figure className="relative w-[28px] h-[28px]">
                <Image src="/img/blue-dot.png" alt="dot" layout="fill" />
              </figure>
              <p className="text-lg">Mastering work-life-balance</p>
            </section>

            <section className="flex items-center gap-4">
              <figure className="relative w-[28px] h-[28px]">
                <Image src="/img/orange-dot.png" alt="dot" layout="fill" />
              </figure>
              <p className="text-lg">Find the job based on your skills</p>
            </section>

            <section className="flex items-center gap-4">
              <figure className="relative w-[28px] h-[28px]">
                <Image src="/img/blue-dot.png" alt="dot" layout="fill" />
              </figure>
              <p className="text-lg">Helping preparing the paperwork</p>
            </section>

            <section className="flex items-center gap-4">
              <figure className="relative w-[28px] h-[28px]">
                <Image src="/img/orange-dot.png" alt="dot" layout="fill" />
              </figure>
              <p className="text-lg">24/7 Best worker support</p>
            </section>

            <section className="flex items-center gap-4">
              <figure className="relative w-[28px] h-[28px]">
                <Image src="/img/blue-dot.png" alt="dot" layout="fill" />
              </figure>
              <p className="text-lg">Trusted payment protection</p>
            </section>

            <p className="capitalize underline">LEARN MORE ABOUT OUR BENEFIT</p>
          </section>
        </section>
      </section>

      <section className="px-4 md:px-24 flex flex-col items-center">
        <h1 className="text-2xl w-10/12 md:text-5xl font-semibold md:w-[443px] text-center mb-16">
          Our Feature Jobs That Might You Need
        </h1>

        <section className="grid grid-cols-1 md:grid-cols-4 gap-5 mb-8 md:mb-20">
          <section className="w-full bg-white p-8 flex flex-col rounded-xl shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer">
            <section className="flex items-center gap-4 mb-16">
              <figure className="w-[55px] h-[55px] relative">
                <Image
                  src="/img/rounded-twitter.png"
                  alt="Twitter"
                  layout="fill"
                />
              </figure>

              <section className="h-full flex flex-col justify-between">
                <p>Twitter</p>
                <p className="text-gray-400">Parahyangan, Bandung</p>
              </section>
            </section>

            <p className="text-xl mb-16">
              <span className="text-4xl">$190K /</span> year
            </p>

            <p className="text-2xl">User-Experience Designer</p>

            <section className="flex">
              <p className="bg-teal-100 px-2 py-1 rounded-md text-teal-400 text-sm mt-2">
                FULL-TIME
              </p>
            </section>
          </section>

          <section className="w-full bg-white p-8 flex flex-col rounded-xl shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer">
            <section className="flex items-center gap-4 mb-16">
              <figure className="w-[55px] h-[55px] relative">
                <Image
                  src="/img/rounded-google.png"
                  alt="Google"
                  layout="fill"
                />
              </figure>

              <section className="h-full flex flex-col justify-between">
                <p>Google</p>
                <p className="text-gray-400">Cimahi, Bandung</p>
              </section>
            </section>

            <p className="text-xl mb-16">
              <span className="text-4xl">$563K /</span> year
            </p>

            <p className="text-2xl">Expert Software Developer</p>

            <section className="flex">
              <p className="bg-teal-100 px-2 py-1 rounded-md text-teal-400 text-sm mt-2">
                FULL-TIME
              </p>
            </section>
          </section>

          <section className="w-full bg-white p-8 flex flex-col rounded-xl shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer">
            <section className="flex items-center gap-4 mb-16">
              <figure className="w-[55px] h-[55px] relative">
                <Image src="/img/amazon-icon.png" alt="Amazon" layout="fill" />
              </figure>

              <section className="h-full flex flex-col justify-between">
                <p>Amazon</p>
                <p className="text-gray-400">Ciputat, Jakarta</p>
              </section>
            </section>

            <p className="text-xl mb-16">
              <span className="text-4xl">$921K /</span> year
            </p>

            <p className="text-2xl">User-Interface Designer</p>

            <section className="flex">
              <p className="bg-teal-100 px-2 py-1 rounded-md text-teal-400 text-sm mt-2">
                FULL-TIME
              </p>
            </section>
          </section>

          <section className="w-full bg-white p-8 flex flex-col rounded-xl shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer">
            <section className="flex items-center gap-4 mb-16">
              <figure className="w-[55px] h-[55px] relative">
                <Image
                  src="/img/linkedin-icon.png"
                  alt="Linkedin"
                  layout="fill"
                />
              </figure>

              <section className="h-full flex flex-col justify-between">
                <p>Linkedin</p>
                <p className="text-gray-400">Parung, Bogor</p>
              </section>
            </section>

            <p className="text-xl mb-16">
              <span className="text-4xl">$21K /</span> year
            </p>

            <p className="text-2xl">Human Resource Development</p>

            <section className="flex">
              <p className="bg-teal-100 px-2 py-1 rounded-md text-teal-400 text-sm mt-2">
                FULL-TIME
              </p>
            </section>
          </section>
        </section>

        <p className="capitalize underline mb-36">VIEW MORE INCOMING JOBS</p>
      </section>

      <section className="md:px-24 flex justify-center">
        <section className="subscribe-card flex flex-col items-center self-center w-full md:h-[250px] md:w-[750px] py-4 md:py-10 pb-10">
          <h1 className="text-3xl text-white font-medium mb-2">
            Subscribe New Job
          </h1>
          <p className="font-normal text-white mb-8 md:mb-12">
            We promise never send you a spam
          </p>

          <form
            action=""
            className="w-full flex flex-col gap-4 md:gap-0 items-center md:flex-row md:justify-center"
          >
            <input
              type="email"
              required
              className="h-11 w-8/12 rounded-lg md:w-6/12 px-4 outline-none border text-slate-500 focus:border-slate-500"
              placeholder="Type your email address"
            />
            <button
              type="submit"
              className="h-11 w-8/12 md:w-auto rounded-lg bg-brown-50 text-brown-100 md:rounded-full px-10 md:-ml-8"
            >
              Count Me In
            </button>
          </form>
        </section>
      </section>
    </div>
  );
};

export default Home;
