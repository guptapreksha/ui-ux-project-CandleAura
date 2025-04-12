import { ClassType, SelectedPage } from "@/shared/types";
import image1 from "@/assets/1.jpg";
import image2 from "@/assets/2.jpg";
import image3 from "@/assets/3.jpg";
import image4 from "@/assets/4.jpg";
import image5 from "@/assets/5.jpg"
import image6 from "@/assets/7.jpg";
import { motion } from "framer-motion";
import HText from "@/shared/h-text";
import Class from "./class";

const classes: Array<ClassType> = [
  {
    name: "Jar Candles",
    description:
      "Classic and cozy, our jar candles are hand-poured into elegant glass containers for a clean, safe, and long-lasting burn—perfect for any room and any vibe.",
    image: image1,
  },
  {
    name: "Tealight Candles",
    description:
      "Small but mighty, these versatile candles are ideal for creating ambient lighting or using with wax warmers and diffusers. Subtle, elegant, and essential.",
    image: image2,
  },
  {
    name: "Pillar Candles",
    description:
      "Bold and decorative, our pillar candles make a statement while delivering hours of fragrance and style. Great for centerpieces and mood-setting moments.",
    image: image3,
  },
  {
    name: "Sculptural Candles",
    description:
      "Art meets aroma—our sculptural candles are designed to be admired as much as they’re enjoyed. Eye-catching shapes and luxurious scents all in one.",
    image: image4,
  },
  {
    name: "Taper Candles",
    description:
      "Slim and sophisticated, taper candles bring elegance to any dining table or event. Designed to burn cleanly while adding timeless charm.",
    image: image5,
  },
  {
    name: "Molded Candles",
    description:
      "Uniquely crafted in custom molds, these candles are as playful as they are beautiful. Perfect for gifting or adding personality to your space.",
    image: image6,
  }

];

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

export default function OurProducts({ setSelectedPage }: Props) {
  return (
    <section id="ourproducts" className="w-full bg-primary-100 py-40">
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.OurProducts)}
      >
        <motion.div
          className="mx-auto w-5/6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <div className="md:w-3/5">
            <HText>OUR PRODUCTS</HText>
            <p className="py-5">
              Explore our wide range of handcrafted candles—each designed to bring warmth, style, and scent into your space. From classic jar candles to artistic sculptural pieces, we offer something for every mood, moment, and home aesthetic.
            </p>
          </div>
        </motion.div>
        <div className="mt-10 h-[353px] w-full overflow-x-auto overflow-y-hidden">
          <ul className="w-[2800px] whitespace-nowrap">
            {classes.map((item: ClassType, idx) => (
              <Class item={item} key={`${item.name}-${idx}`} />
            ))}
          </ul>
        </div>
      </motion.div>
    </section>
  );
}
