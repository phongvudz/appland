import "./App.css";

function App() {
  return (
    <div className="overflow-y-scroll overflow-x-hidden">
      <div className="container">
        {/*Header*/}
        <header className="sticky -top-6 bg-white h-20 flex w-full  ">
          {/*nav*/}
          <nav className="relative">
            <div className="flex justify-center items-center gap-16 -mt-5">
              {/*logo*/}
              <div>
                <img
                  className="w-48 absolute top-8 -left-4"
                  src="https://preview.uideck.com/items/appland/assets/images/logo.png"
                  alt="logo app"
                />
              </div>
              {/*list*/}
              <div className="">
                <ul className="invisible">
                  <li>Home</li>
                  <li>Why</li>
                  <li>Features</li>
                  <li>Screenshots</li>
                  <li>Pricing</li>
                  <li>Download</li>
                </ul>
              </div>
              <div className="absolute top-8 -right-4 translate-x-36">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-8 w-8"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </div>
            </div>
          </nav>
        </header>
        {/*Container1*/}
        <div>
          {/*Section1*/}
          <section className="mt-8">
            {/*(Content & image)1*/}
            <div>
              {/*Content*/}
              <div>
                <h1 className="text-2xl font-semibold mb-7"><span className=" text-blue-500">Launch Your App</span> With Confidence and Creativity.</h1>
                <p className="text">
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diamnon umy eirmomp or invidunt ut labore et dolore magna
                  aliquyam eratse diam voluptua. At vero eosaccusam.
                </p>
                {/*2 button and 1 image  */}
                <div className="flex">
                <div className="flex gap-10 mt-5  justify-start">  
                  <button class="btn">Download Now</button>
                  <button >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-14 w-14 text-blue-500"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z"
                        clip-rule="evenodd"
                      />
                    </svg>{" "}
                  </button>
                </div>
              </div>
              {/*image1*/}
              <div className="mt-12 my-20">
                <img
                  className="w-96"
                  src="https://preview.uideck.com/items/appland/assets/images/header-app.png"
                  alt=" mobile"
                />
              </div>
              </div>
            </div>
          </section>
        </div>
      </div>
      {/*Body*/}
      <div>
        <body>
          {/*Section2*/}
          <section className="container mb-32">
            {/*Content*/}
            <div className="">
              <h1 className="text-2xl font-semibold mb-5">Why You Should Choose AppLand</h1>
              <p class="text">
                Alii nusquam cu duo, vim eu consulatu percipitur, meis dolor
                comprehensam at vis. Vel ut percipitur dignissim signiferumque.
              </p>
            </div>
            {/*Card*/}
            <div className="flex flex-col">
              {/*Card1*/}
              <div class="card-section2" >
                {/*logo*/}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-20 w-20 text-white bg-yellow-500 rounded-3xl "
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                  />
                </svg>
                {/*Content*/}
                <h1 class="text-hover hover:text-yellow-500">Clean Design</h1>
                <p class="text">
                  Lorem ipsum dolor sitam etco snsetetur sadipscing elitr sed
                  diam nonumy.
                </p>
              </div>
              {/*Card2*/}
              
              <div class="card-section2">
                {/*logo*/}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-20 w-20 text-white bg-red-500 rounded-3xl"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
                  />
                </svg>
                {/*Content*/}
                <h1 class="text-hover hover:text-red-500">Easy to Use</h1>
                <p class="text">
                  Lorem ipsum dolor sitam etco snsetetur sadipscing elitr sed
                  diam nonumy.
                </p>
              </div>
              {/*Card3*/}
              <div class="card-section2">
                {/*logo*/}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-20 w-20 text-white bg-purple-600 rounded-3xl"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
                {/*Content*/}
                <h1 class="text-hover hover:text-purple-600">Fast Loading</h1>
                <p class="text">
                  Lorem ipsum dolor sitam etco snsetetur sadipscing elitr sed
                  diam nonumy.
                </p>
              </div>
              {/*Card4*/}
              <div class="card-section2">
                {/*logo*/}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-20 w-20 text-white bg-blue-500 rounded-3xl "
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  />
                </svg>
                {/*Content*/}
                <h1 class="text-hover hover:text-blue-400">All Elements</h1>
                <p class="text">
                  Lorem ipsum dolor sitam etco snsetetur sadipscing elitr sed
                  diam nonumy.
                </p>
              </div>
            </div>
          </section>
          {/*Section3*/}
          <section className="bg-cyan-200 mb-32">
            {/*Container*/}
            <div className=" py-32 relative">
              {/*image2*/}
              <div className=" w-80 h-80 rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 relative border-8 border-r border-purple-500 hover:scale-125 hover:transition-all hover:duration-500 hover:ease-in">

              </div>
              <img 
                className=" w-52 mb-12 -rotate-12 absolute top-20 left-12 " 
                src="https://preview.uideck.com/items/appland/assets/images/about-app.png"
                alt="mobile2"
              />
              {/*Content*/}
              <div className="mt-32 text-left px-4 ">
                <h1 className="text-xl font-semibold mb-4">Comes With All You Need.</h1>
                <p class="text-gray-400 mb-4">
                  Alii nusquam cu duo, vim eu consulatu percipitur, meis
                  doorcomprehen sam at vis. Vel ut dignissim signiferumq Alii
                  nusquam cuduo, vim eusde consulatu percipitur, meis dolor
                  comprehensam at vij. Alii nusquam cu duo, vim eu consulatu
                  percipitur, meis doorcomprehen sam at vis. Vel ut dignissim
                  signiferumq nusquam.
                </p>
                {/*Button*/}
                <div class="text-center border-2 border-transparent bg-blue-600 w-36 py-3 text-white rounded-lg mt-8" >
                  <button>Get the app</button>
                </div>
              </div>
            </div>
          </section>
          {/*Section4*/}
          <section className="container">
            <div className="">
              {/*Content*/}
              <div className=" text-center">
                <h1 className="text-xl font-semibold mb-5">Awesome Key Features.</h1>
                <p class="text text-lg mb-5">Alii nusquam cu duo, vim eu consulatu percipitur, meis dolor comprehensam at vis. Vel ut percipitur dignissim signiferumque.</p>
              </div>
              {/*Card*/}
              <div className="">
                {/*Card 1*/}
                <div class="card-section4">
                  {/*logo*/}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-20 w-20 text-white bg-blue-500 rounded-3xl"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                  {/*Content*/}
                  <h1 class="text-hover hover:text-blue-500">Fully Responsive</h1>
                  <p class="text">
                    Lorem ipsum dolor sit ametco snsetetur sadipscing elitr sed
                    diam nonumy eirmod.
                  </p>
                </div>
                {/*Card 2*/}
                <div class="card-section4">
                  {/*logo*/}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-20 w-20 text-white bg-purple-600 rounded-3xl"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  {/*Content*/}
                  <h1 class="text-hover hover:text-purple-600">Refreshing Design</h1>
                  <p class="text">
                    Lorem ipsum dolor sit ametco snsetetur sadipscing elitr sed
                    diam nonumy eirmod.
                  </p>
                </div>
                {/*Card 3*/}
                <div class="card-section4">
                  {/*logo*/}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-20 w-20 text-white bg-yellow-600 rounded-3xl"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M14 4l-2-1-2 1M4 7l2-1M4 7l2 1M4 7v2.5M12 21l-2-1m2 1l2-1m-2 1v-2.5M6 18l-2-1v-2.5M18 18l2-1v-2.5"
                    />
                  </svg>
                  {/*Content*/}
                  <h1 class="text-hover hover:text-yellow-600">Bootstrap 4</h1>
                  <p class="text">
                    Lorem ipsum dolor sit ametco snsetetur sadipscing elitr sed
                    diam nonumy eirmod.
                  </p>
                </div>
              </div>
              {/*Image 3*/}
              <div className="relavtive">
                <div className=" mt-28">
                <div className="w-52 h-52 bg-gradient-to-r from-yellow-500 to-cyan-400 rounded-full absolute left-36 -translate-y-14 "></div>
                <div className="w-80 h-80 bg-gradient-to-b from-sky-300 to-blue-800 rounded-full absolute left-54 translate-y-64 "></div>
                <img
                    className="w-72 relative"
                  src="https://preview.uideck.com/items/appland/assets/images/features-app.png"
                  alt="mobile3"
                />
              </div>
            </div>
            </div>
          </section>
          {/*Section 5*/}
          <section className="mt-32">
            <div className="">
              {/*Content*/}
              <div className="text-center">
                <h1 className="text-2xl font-semibold mb-5">App Screenshots.</h1>
                <p class="text-lg text-gray-400 mb-5">
                  Alii nusquam cu duo, vim eu consulatu percipitur, meis dolor
                  comprehensam at vis. Vel ut percipitur dignissim
                  signiferumque.
                </p>
              </div>
              <div className="relative ">
              {/*Image 4*/}
              <div className="flex  justify-around flex-row  my-32 px-20 ">
                <img className="invisible md:visible md:absolute  md:z-10 md:-top-2"
                  alt=" mobile4"
                  src="https://preview.uideck.com/items/appland/assets/images/app-frame.png"
                />
                <img className="absolute -top-10 -z-10 shadow-xl rounded-lg"
                  alt=" mobile4"
                  src="https://preview.uideck.com/items/appland/assets/images/screenshot-2.jpg"
                />
                <img  className="absolute w-72 -top-5 -z-20 left-2  shadow-2xl "
                  alt=" mobile4"
                  src="https://preview.uideck.com/items/appland/assets/images/screenshot-2.jpg"
                />
                <img  className="absolute w-72 -top-5 -z-20 right-2 shadow-2xl "
                  alt=" mobile4"
                  src="https://preview.uideck.com/items/appland/assets/images/screenshot-3.jpg"
                />
                <img className="absolute w-64 -top-0 -z-30 left-0 shadow-2xl"
                  alt=" mobile4"
                  src="https://preview.uideck.com/items/appland/assets/images/screenshot-4.jpg"
                />
                <img className=" absolute w-64 -top-0 -z-30 right-0 shadow-2xl"
                  alt=" mobile4"
                  src="https://preview.uideck.com/items/appland/assets/images/screenshot-3.jpg"
                />
              </div>
              </div>
            </div>
          </section>
          {/*Section 6*/}
          <section className=" bg-cyan-100 ">
            <div className="container py-52">
              {/*Content*/}
              <div className="text-center  ">
                <h1 className="text-2xl font-semibold  ">User Reviews.</h1>
                <p class="text ">
                  Alii nusquam cu duo, vim eu consulatu percipitur, meis dolor
                  comprehensam at vis. Vel ut percipitur dignissim
                  signiferumque.
                </p>
              </div>
              {/*Card*/}
              <div className="relative border-transparent border-2 bg-white shadow-2xl my-12 rounded-md ">
                {/*logo*/}
                <svg className="absolute h-16 w-16 -top-10 translate-x-48 text-blue-600"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
                {/*Content*/}
                <div className="text-center px-3 ">
                  <p class="text mt-8">
                    Lorem ipsum dolor situt amet, consetetur sadipscing elitr,
                    sed diam nonumy eirmod tempo invidunt labore et dolore magna
                    aliquyam erat, sed diam voluptua. At vero eoset accusam et
                    justo duo dolores et ea rebum. Stet clita kasd gubergren, no
                    sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem
                    ipsum dolor amet sadipscing elitr.
                  </p>
                  <h1 className="text-2xl font-semibold">Linda Sophia</h1>
                  <p class="text">Designer, SpaceX</p>
                </div>
              </div>
              {/*avatar*/}
              <div className="flex gap-8 justify-between">
                <img alt="avatar" className="rounded-full border-4 border-white"src="https://preview.uideck.com/items/appland/assets/images/author-4.jpg" />
                <img alt="avatar" className="rounded-full border-4 border-white"src="https://preview.uideck.com/items/appland/assets/images/author-3.jpg" />
                <img className="invisible"  alt="avatar" src="https://preview.uideck.com/items/appland/assets/images/author-2.jpg" />
                <img className="invisible"  alt="avatar" src="https://preview.uideck.com/items/appland/assets/images/author-5.jpg" />
                <img className="invisible"  alt="avatar" src="https://preview.uideck.com/items/appland/assets/images/author-6.jpg" />
              </div>
            </div>
          </section>
          {/*Section 7*/}
          <section className="mt-24 container">
            <div>
              {/*Content*/}
              <div className="text-center">
                <h1 className="text-2xl font-semibold">Choose a Plan.</h1>
                <p class="text mt-4">
                  Alii nusquam cu duo, vim eu consulatu percipitur, meis dolor
                  comprehensam at vis. Vel ut percipitur dignissim
                  signiferumque.
                </p>
              </div>
              {/*Card*/}
              <div className="mt-12">
                {/*Card 1*/}
                <div className="hover:duration-300 hover:ease-in hover:shadow-2xl border-transparent shadow-xl text-center space-y-4 py-4">
                  <h1 className="text-3xl font-semibold mb-2">Basic</h1>
                  <h1 className="text-4xl font-semibold mb-2">$49</h1>
                  <p className="text">Monthly</p>
                  <p className="text">Increase traffic 130%</p>
                  <p className="text">Backlink analysis</p>
                  <p className="text">Organic traffic 215%</p>
                  <p className="text">10 Free Optimization</p>
                  <p className="text">24/7 support</p>
                  {/*button*/}
                  <button className="border-2 border-black px-6 py-3 rounded-md text hover:bg-gray-500 hover:duration-500 hover:ease-in hover:text-white ">Purchase Now</button>
                </div>
                {/*Card 2*/}
                <div className="hover:duration-300 hover:ease-in hover:shadow-2xl border-transparent shadow-xl text-center space-y-4 py-4 mt-12">
                  <h1 className="text-3xl font-semibold mb-2" >Standard</h1>
                  <h1  className="text-4xl font-semibold mb-2" >$99</h1>
                  <p className="text">Monthly</p>
                  <p className="text">Increase traffic 130%</p>
                  <p className="text">Backlink analysis</p>
                  <p className="text">Organic traffic 215%</p>
                  <p className="text">10 Free Optimization</p>
                  <p className="text">24/7 support</p>
                  {/*button*/}
                  <button className="border-transparent bg-blue-500 px-6 py-4 rounded-lg text-white hover:bg-blue-400 hover:duration-500 hover:ease-in">Purchase Now</button>
                </div>
                {/*Card 3*/}
                <div className="hover:duration-300 hover:ease-in hover:shadow-2xl border-transparent shadow-xl text-center space-y-4 py-4 mt-12">
                  <h1 className="text-3xl font-semibold mb-2">Professional</h1>
                  <h1 className="text-4xl font-semibold mb-2">$199</h1>
                  <p className="text">Monthly</p>
                  <p className="text">Increase traffic 130%</p>
                  <p className="text">Backlink analysis</p>
                  <p className="text">Organic traffic 215%</p>
                  <p className="text">10 Free Optimization</p>
                  <p className="text">24/7 support</p>
                  {/*button*/}
                  <button className="border-2 border-black px-6 py-3 rounded-md text hover:bg-gray-500 hover:duration-500 hover:ease-in hover:text-white ">Purchase Now</button>
                </div>
              </div>
            </div>
          </section>
          {/*Section 8*/}
          <section className="container" >
            <div>
              {/*Image*/}
              <div className="relavtive">
                <div className=" mt-28">
                <div className="w-52 h-52 bg-gradient-to-r from-yellow-500 to-cyan-400 rounded-full absolute left-32 -translate-y-14 hover:scale-125 hover:duration-500 hover:ease-in"></div>
                <div className="w-80 h-80 bg-gradient-to-b from-sky-300 to-blue-800 rounded-full absolute left-60 translate-y-64  -translate-x-44 "></div>
                <img
                    className="w-96 relative"
                  src="https://preview.uideck.com/items/appland/assets/images/download-app.png"
                  alt=" mobile3"
                />
              </div>
            </div>
              {/*Content*/}
              <div className="mt-32">
                <div>
                <h1 className="text-2xl font-semibold mb-5">Download and Start Using!</h1>
                <p class="text-lg text-gray-600 mb-12">Alii nusquam cu duo, vim eu consulatu percipitur, meis doorcomprehen sam at vis. Vel ut dignissim signiferumq Alii nusquam cuduo, vim eusde consulatu percipitur, meis dolor comprehensam at vij. Alii nusquam cu duo, vim eu consulatu percipitur, meis doorcomprehen sam at vis. Vel ut dignissim signiferumq nusquam.</p>
                </div>
                {/*2 card*/}
                <div className="flex gap-4 ">
                  {/*Card1*/}
                  <div className="flex border-transparent bg-blue-500 text-white justify-center w-52 h-16 gap-4 rounded-lg items-center">
                    {/*logo*/}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-12 w-12"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M5 5a3 3 0 015-2.236A3 3 0 0114.83 6H16a2 2 0 110 4h-5V9a1 1 0 10-2 0v1H4a2 2 0 110-4h1.17C5.06 5.687 5 5.35 5 5zm4 1V5a1 1 0 10-1 1h1zm3 0a1 1 0 10-1-1v1h1z"
                        clip-rule="evenodd"
                      />
                      <path d="M9 11H3v5a2 2 0 002 2h4v-7zM11 18h4a2 2 0 002-2v-5h-6v7z" />
                    </svg>
                    <div>
                    <p className=" text-xs">Download On the</p>
                    <h1 className="text-xs">App Store</h1>
                    </div>
                  </div>
                  {/*Card2*/}
                  <div className="flex border-transparent bg-gray-800 text-white justify-center w-52 h-16 gap-4 rounded-lg items-center">
                    {/*logo*/}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-12 w-12"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                        clip-rule="evenodd"
                      />
                    </svg>
                    <div>
                    <p className="text-xs">Download On the</p>
                    <h1 className="text-xs">Google Play</h1>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/*Section 9*/}
          <section className="mt-32 container">
            {/*Container*/}
            <div>
              {/*Content 1*/}
              <div>
                {/*Logo*/}
                <img
                  className="w-48"
                  src="https://preview.uideck.com/items/appland/assets/images/logo.png"
                  alt="logo website"
                />
                <p class="text mt-12 max-w-sm ">
                  Lorem ipsum dolor sit amet consetetur sadipscing elitr,
                  sederfs diam nonumy eirmod tempor invidunt ut labore et dolore
                  magna aliquyam.
                </p>
                {/*Socical*/}
                <div className="flex gap-8 ">
                  <svg
                    class="w-6 h-6 text-blue-600 fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                  >
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                  <svg
                    class="w-6 h-6 text-blue-300 fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                  >
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                  </svg>
                  <svg
                    class="w-6 h-6 text-green-400 fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 448 512"
                  >
                    <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"></path>
                  </svg>
                  <svg
                    class="w-6 h-6 text-blue-500 fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 448 512"
                  >
                    <path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"></path>
                  </svg>
                </div>
              </div>
              {/*Content 2*/}
              <div className="grid grid-cols-2 mt-12">
              <div>
                <ul className="space-y-4">
                  <li className="text-2xl font-semibold">Quick Links</li>
                  <p class="text-li">Home</p>
                  <p class="text-li">Features</p>
                  <p class="text-li">Testimonial</p>
                  <p class="text-li">Pricing</p>
                  <p class="text-li">Contact</p>
                </ul>
              </div>
              {/*Content 3*/}
              <div>
                <ul className="space-y-4">
                  <li className="text-2xl font-semibold">Support</li>
                  <p class="text-li">FAQ</p>
                  <p class="text-li">Privacy Policy</p>
                  <p class="text-li">Terms Of Use</p>
                  <p class="text-li">Legal</p>
                  <p class="text-li">Site Map</p>
                </ul>
              </div>
              {/*Content 4*/}
              <div className="col-span-2 mt-12">
                <ul className="space-y-4">
                  <li className="text-2xl font-semibold">Quick Link</li>
                  <div className="flex gap-4 items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      stroke-width="2"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                    <p class="text-li">+809272561823</p>
                  </div>
                  <div className="flex gap-4 items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      stroke-width="2"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                    <p class="text-li">info@appland.com</p>
                  </div>
                  <div className="flex gap-4 items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      stroke-width="2"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4"
                      />
                    </svg>
                    <p class="text-li">
                      123 Stree New York City , United States Of America 750.
                    </p>
                  </div>
                </ul>
              </div>
            </div>
            </div>
            <div className="h-0.5 w-full items-center bg-gray-800 mt-12"></div>
          </section>
          {/*Footer*/}
          <footer className="container my-6">
            <div className="text-center space-y-4">
              <h1 className="text-xl text-gray-500">Crafted by <span className="text-blue-500 cursor-pointer hover:text-blue-900 hover:duration-500 hover:ease-in"> UIdeck</span> </h1>
              <h1 className="text-gray-500 text-xl">Report Issues</h1>
            </div>
          </footer>
        </body>
      </div>
    </div>
  );
}

export default App;
