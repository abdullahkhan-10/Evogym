import logo from "../assets/Logo.png"

const Footer = () => {
  return (
    <footer className="bg-primary-100 py-16">
        <div className="md:flex justify-center mx-auto w-[83%] gap-16">
            {/* left side  */}
            <div className="mt-16 basis-[50%] md:mt-0">
                <img src={logo} alt="logo" />
                <p className="my-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab nesciunt itaque nobis delectus doloremque veniam incidunt est atque fugiat, tenetur quam praesentium ipsam accusamus. Excepturi?</p>
                <p>@  Evogym All Rights Reserved.</p>
            </div>
            {/* middle  */}
            <div className="mt-16 w-[25%] md:mt-0">
                <h4 className="font-bold">Links</h4>
                <p className="my-5">Masa orci senectus</p>
                <p className="my-5">Et gravide id et etime</p>
                <p className="my-5">Tempus metus</p>
                <p>Ullamcorper vivamus</p>
            </div>
            {/* Right side  */}
            <div className="mt-16 w-[25%] md:mt-0">
                <h4 className="font-bold">Contacts</h4>
                <p className="my-5">Instagram</p>
                <p className="my-5">Facebook</p>
                <p className="my-5">(111)430-8736</p>
            </div>
        </div>
    </footer>
  )
}

export default Footer