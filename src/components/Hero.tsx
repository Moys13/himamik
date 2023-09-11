import heroImg from "../../public/assets/hero-images/hero-1.jpg";
import logoIrm from '../../public/assets/logos/irm.png';
import logoPiksi from '../../public/assets/logos/PIKSI.png';
import Image from "next/image";
// const heroImages = [
//   { src: "./img/hero-1.jpg", title: "Diesnatalis HIMA" },
//   { src: "./img/hero1.jpg", title: "Diesnatalis HIMA" },
//   { src: "./img/hero2.jpg", title: "Diesnatalis HIMA" },
// ]
const Hero = () => {

    return (
        <div className="md:flex max-w-screen-2xl m-auto w-full pt-20">
            <div className="md:mx-10">
                <Image src={heroImg} alt="" className="md:w-[657px] md:my-12 md:rounded-lg object-contain" />
            </div>
            <div className="my-4 md:my-auto md:m-auto">
                <div className="flex justify-center mb-2">
                    <Image src={logoIrm} alt="" className="w-10 md:w-24 mr-2" />
                    <Image src={logoPiksi} alt="" className="w-10 md:w-24" />
                </div>
                <div className="text-center -mt-1 mr-auto text-abu-tulisan">
                    <h1 className="text-[11px] md:text-2xl font-semibold">HIMPUNAN MAHASISWA</h1>
                    <h3 className="text-[11px] md:text-lg">INFORMATIKA REKAM MEDIS POLITEKNIK PIKSI GANESHA</h3>
                </div>
            </div>
        </div>
    );
};

export default Hero;
