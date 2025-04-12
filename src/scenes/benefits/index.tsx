import {
  HomeModernIcon,
  UserGroupIcon,
  AcademicCapIcon,
  SparklesIcon,
  HeartIcon,
  GlobeAltIcon,
} from "@heroicons/react/24/solid";
import { BenefitType, SelectedPage } from "@/shared/types";
import { motion } from "framer-motion";
import HText from "@/shared/h-text";
import Cart from "./cart";
import ActionButton from "@/shared/action-button";
// import BenefitsPageGraphic from "@/assets/BenefitsPageGraphic.png";
import BenefitsPageGraphic from "@/assets/benefits.png";

const benefits: Array<BenefitType> = [
  {
    icon: <SparklesIcon className="h-6 w-6" />,
    title: "Handcrafted with Love",
    description:
      "Each candle is carefully hand-poured using premium wax blends and natural ingredients, offering a unique and cozy experience every time.",
  },
  {
    icon: <GlobeAltIcon className="h-6 w-6" />,
    title: "Eco-Friendly & Clean Burn",
    description:
      "Our candles are made with eco-conscious materials and cotton wicks, ensuring a clean, toxin-free burn that’s safe for your home and family.",
  },
  {
    icon: <HeartIcon className="h-6 w-6" />,
    title: "Mood-Lifting Aromas",
    description:
      "From calming lavender to energizing citrus, our curated scents are designed to elevate mood, enhance ambiance, and make every moment special.",
  },
  // {
  //   icon: <HomeModernIcon className="h-6 w-6" />,
  //   title: "State of the Art Facilities",
  //   description:
  //     "Neque adipiscing amet amet enim. Feugiat dolor enim fermentum in a in lectus pellentesque. Ullamcorper et.",
  // },
  // {
  //   icon: <UserGroupIcon className="h-6 w-6" />,
  //   title: "100's of Diverse Classes",
  //   description:
  //     "Eu ipsum id egestas risus tempus enim semper felis quis. Nec consectetur ac venenatis facilisi est. Eget ac turpis id.",
  // },
  // {
  //   icon: <AcademicCapIcon className="h-6 w-6" />,
  //   title: "Expert and Pro Trainers",
  //   description:
  //     "Fusce vestibulum aliquam ut cras. Nisl lectus egestas sapien nisl. Lacus at mi sit pellentesque. Congue parturient.",
  // },
];

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.2 },
  },
};

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

export default function About({ setSelectedPage }: Props) {
  return (
    <section id="about" className="mx-auto min-h-full w-5/6 py-20">
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.About)}
      >
        {/* HEADER */}
        <motion.div
          className="md:my-5 md:w-3/5"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <HText>MORE THAN JUST A CANDLE.</HText>
          <p className="my-5 text-sm">
            We craft premium, hand-poured candles designed to elevate your space and soothe your soul. From natural ingredients to captivating scents, every candle is made with care, intention, and a touch of magic.
          </p>

          {/* <HText>MORE THAN JUST A GYM.</HText>
          <p className="my-5 text-sm">
            We provide world class fitness equipment, trainers and classes to
            get you to your ultimate fitness goals with ease. We provide true
            care into each and every member.
          </p> */}
        </motion.div>
        {/* BENEFITS */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={container}
          className="mt-5 items-center justify-between gap-8 md:flex"
        >
          {benefits.map((benefit: BenefitType) => (
            <Cart
              benefit={benefit}
              key={benefit.title}
              setSelectedPage={setSelectedPage}
            />
          ))}
        </motion.div>
        {/* GRAPHICS AND CONTENT */}
        <div className="mt-16 items-center justify-between gap-20 md:mt-28 md:flex">
          {/* GRAPHIC */}
          <img
            src={BenefitsPageGraphic}
            alt="BenefitsPageGraphic"
            className="mx-auto"
          />
          {/* CONTENT */}
          <div>
            {/* TITLE */}
            <div className="relative">
  <div className="before:absolute before:-top-20 before:-left-20 before:-z-[1] before:content-abstractwaves">
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.5 }}
      variants={{
        hidden: { opacity: 0, x: 50 },
        visible: { opacity: 1, x: 0 },
      }}
    >
      <HText>
        THOUSANDS OF HOMES ENCHANTED BY OUR
        <span className="text-primary-500"> CANDLES</span>
      </HText>
    </motion.div>
  </div>
</div>

{/* DESCRIPTION */}
<motion.div
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true, amount: 0.5 }}
  transition={{ delay: 0.3, duration: 0.5 }}
  variants={{
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0 },
  }}
>
<p className="my-5">
  Our candles are more than just fragrance—they're a way to unwind, set the mood, and bring warmth into any space. Handcrafted with care, they're the perfect blend of beauty, comfort, and intention.
</p>
<p className="mb-5">
  Loved for their rich scents and clean ingredients, our candles keep customers coming back for more. Thoughtfully made, beautifully designed, and always crafted with heart.
</p>
<ul className="list-none space-y-2 text-sm text-gray-500">
  <li>✨ Clean, toxin-free burn with natural wax and cotton wicks</li>
  <li>🕯️ Fragrances that linger without overwhelming</li>
  <li>🌿 Eco-friendly materials and mindful packaging</li>
  <li>🎁 Ideal for gifting or daily rituals</li>
  <li>❤️ Hand-poured in small batches with love</li>
</ul>

</motion.div>

            {/* <div className="relative">
              <div className="before:absolute before:-top-20 before:-left-20 before:-z-[1] before:content-abstractwaves">
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 0.5 }}
                  variants={{
                    hidden: { opacity: 0, x: 50 },
                    visible: { opacity: 1, x: 0 },
                  }}
                >
                  <HText>
                    MILLIONS OF HAPPY MEMBERS GETTING
                    <span className="text-primary-500"> FIT</span>
                  </HText>
                </motion.div>
              </div>
            </div>
            DESCRIPTION
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              variants={{
                hidden: { opacity: 0, x: 50 },
                visible: { opacity: 1, x: 0 },
              }}
            >
              <p className="my-5">
                Nascetur aenean massa auctor tincidunt. Iaculis potenti amet
                egestas ultrices consectetur adipiscing ultricies enim. Pulvinar
                fames vitae vitae quis. Quis amet vulputate tincidunt at in
                nulla nec. Consequat sed facilisis dui sit egestas ultrices
                tellus. Ullamcorper arcu id pretium sapien proin integer nisl.
                Felis orci diam odio.
              </p>
              <p className="mb-5">
                Fringilla a sed at suspendisse ut enim volutpat. Rhoncus vel est
                tellus quam porttitor. Mauris velit euismod elementum arcu neque
                facilisi. Amet semper tortor facilisis metus nibh. Rhoncus sit
                enim mattis odio in risus nunc.
              </p>
            </motion.div> */}
            {/* BUTTON */}
            <div className="relative mt-16">
              <div className="before:absolute before:-bottom-20 before:right-20 before:-z-[1] before:content-sparkles">
                {/* <ActionButton setSelectedPage={setSelectedPage}>
                  Join Now
                </ActionButton> */}
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
