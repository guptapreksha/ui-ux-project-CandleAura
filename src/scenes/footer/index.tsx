import Logo from "@/assets/Logo.png";

export default function Footer() {
  return (
    <footer className="bg-primary-100 py-16">
      <div className="justify-content mx-auto w-5/6 gap-16 md:flex">
        <div className="mt-16 basis-1/2 md:mt-0">
          <img alt="logo" src={Logo} />
          <p className="my-5">
            At CandleAura, we believe in creating the perfect ambiance for every moment. From handcrafted jar candles to elegant sculptural designs, we provide quality and care in every burn.
          </p>
          <p>© CandleAura All Rights Reserved.</p>

        </div>
        {/* <div className="mt-16 basis-1/4 md:mt-0">
          <h4 className="font-bold">Links</h4>
          <p className="my-5">Massa orci senectus</p>
          <p className="my-5">Et gravida id et etiam</p>
          <p>Ullamcorper vivamus</p>
        </div> */}
        <div className="mt-16 basis-1/4 md:mt-0">
          <h4 className="font-bold">Contact Us</h4>
          <p className="my-5">candleaura@gmail.com</p>
          <p>+91 9876543210</p>
        </div>
      </div>
    </footer>
  );
}
