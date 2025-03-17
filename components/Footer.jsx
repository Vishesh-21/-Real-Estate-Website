const Footer = () => {
  return (
    <footer className="bg-blue-100 md:mt-8 text-gray-700 text-sm p-6 md:p-10">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-center md:text-left">
          <div>
            <h2 className="font-bold text-lg">KRYSTELLE ROMY GROUP</h2>
            <p className="mt-2">KRYSTELLE ROMY</p>
            <p className="mt-1">DRE#01987447</p>
          </div>
          <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-3 md:gap-4 gap-0">
            <div>
              <h3 className="font-semibold">EMAIL</h3>
              <p className="mt-1 break-words">krystelle@gmail.com</p>
            </div>
            <div>
              <h3 className="font-semibold">PHONE</h3>
              <p className="mt-1">(123)-456-7890</p>
            </div>
            <div>
              <h3 className="font-semibold">ADDRESS</h3>
              <p className="mt-1">123 HERMOSA AVENUE, SUITE #110</p>
              <p>HERMOSA BEACH, CA 90200</p>
            </div>
          </div>
        </div>
        <p className="text-xs mt-6 text-left md:text-left">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
          obcaecati nemo perferendis, quia corrupti tenetur sed quod eius quasi
          atque aut officia nobis in nisi repellendus itaque, accusantium
          asperiores rerum iure magnam possimus veniam necessitatibus laborum.
          Iste recusandae nobis facere eaque incidunt voluptates, amet, libero
          possimus consequuntur asperiores inventore aperiam blanditiis saepe?
          Consectetur delectus dolore cupiditate vitae corrupti atque mollitia
          veritatis incidunt perferendis voluptatem iure ratione impedit,
          suscipit totam numquam sed consequatur ex maiores adipisci excepturi
          deleniti nam fuga assumenda dignissimos? Blanditiis, voluptatibus
          libero accusamus sed eum, consequuntur neque illum quis qui.
        </p>
        <div className="border-t border-gray-300 mt-6 pt-4 flex flex-col md:flex-row justify-between text-xs text-center md:text-left">
          <p className="font-bold">
            &copy; 2023, KRYSTELLE POWERED BY{" "}
            <span className="text-blue-500">ROUNDTECHSQUARE</span>
          </p>
          <div className="flex justify-evenly md:flex-row font-bold space-y-2 md:space-y-0 md:space-x-4 mt-2 md:mt-0">
            <a href="#" className="hover:underline">
              TERMS OF USE
            </a>
            <a href="#" className="hover:underline">
              PRIVACY POLICY
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
