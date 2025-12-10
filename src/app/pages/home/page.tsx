export default function Home() {
  return (
    <>
    <div className="bg-[rgba(240,253,244,0.5)] relative w-full" data-name="Section">
  <div className="w-full">
    <div className="box-border flex flex-col items-start px-4 md:px-20 py-0 relative w-full max-w-[1280px] mx-auto">
      <div className="absolute inset-0 overflow-hidden opacity-10" data-name="Image">
        <img
          src="/assets/img/b16d150fcce52c68270d1908e5da785b356eaa48.png"
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
        />
      </div>
      <div className="relative w-full min-h-[600px] md:min-h-[820px] flex flex-col items-center justify-center">
        <div className="flex flex-col items-center justify-center px-4 py-32 md:py-64 w-full text-center">
          <h1
            className="font-arima font-bold text-4xl sm:text-5xl md:text-[60px] leading-tight text-gray-800 whitespace-nowrap"
            style={{ fontFamily: "Arima, sans-serif" }}
          >
            Thiru Kailainaadhar Siddha Clinic
          </h1>
          <p
            className="font-arima font-normal text-xl sm:text-2xl md:text-[36px] leading-snug text-gray-800 mt-2 whitespace-nowrap"
            style={{ fontFamily: "Arima, sans-serif" }}
          >
            Govt. Reg. No: C.Ε. 36314
          </p>
          <div className="mt-4">
            <p className="font-poppins font-semibold text-[#2e7d32] text-base sm:text-lg md:text-[20px] whitespace-nowrap">
              15 Years of Trusted Siddha Care
            </p>
          </div>
          <div className="max-w-xl mx-auto mt-6 px-4">
            <p className="font-poppins font-light text-gray-600 text-base sm:text-lg md:text-[20px] leading-7 whitespace-pre-line">
              Holistic healing through traditional Pulse Diagnosis & Herbal Medicines.
              <br />
              We also offer premium Siddha medicine products.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-4 mt-8">
            <button
              className="bg-[#2e7d32] px-8 py-3 rounded-full shadow-md hover:bg-[#256629] hover:shadow-lg transition-transform active:scale-95 text-white font-poppins font-bold text-base"
              data-name="Component 1"
            >
              Book Appointment
            </button>
            <button
              className="bg-white border-2 border-[#2e7d32] px-8 py-3 rounded-full shadow-md hover:bg-[#f0fdf4] hover:shadow-lg transition-transform active:scale-95 text-[#2e7d32] font-poppins font-bold text-base"
            >
              Shop Now
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

<section className="bg-white py-16 md:py-20 px-4 md:px-20">
  <div className="max-w-[1280px] mx-auto">
    <div className="flex flex-col items-center gap-2 mb-12">
      <h2 className="font-poppins font-bold text-3xl md:text-4xl text-gray-800 text-center leading-tight">
        Our Siddha Essentials
      </h2>
      <p className="font-poppins font-semibold text-[#2e7d32] text-base md:text-lg text-center">
        Premium quality Siddha medicine products
      </p>
      <div className="bg-green-500 h-1.5 rounded w-24"></div>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-12">
      {[
        {
          imgSrc:
            "https://images.unsplash.com/photo-1662058595162-10e024b1a907?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=1080",
          title: "Neelibringadi Kera Thailam",
          desc: "Traditional hair oil for healthy hair growth",
          price: "₹450",
          label: "Herbal Oils",
        },
        {
          imgSrc:
            "https://images.unsplash.com/photo-1699415513957-b39988293583?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=1080",
          title: "Triphala Choornam",
          desc: "Triple fruit powder for digestive health",
          price: "₹180",
          label: "Powders",
        },
        {
          imgSrc:
            "https://images.unsplash.com/photo-1734607402840-902613545974?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=1080",
          title: "Ashwagandha Tablets",
          desc: "Stress relief and energy booster",
          price: "₹320",
          label: "Medicines",
        },
      ].map(({ imgSrc, title, desc, price, label }) => (
        <div
          key={title}
          className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-xl transition-shadow duration-300 group flex flex-col"
        >
          <div className="relative h-64 bg-gray-50 overflow-hidden">
            <img
              src={imgSrc}
              alt={title}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
              loading="lazy"
            />
            <div className="absolute top-3 right-3 bg-[#2e7d32] text-white px-3 py-1 rounded-full font-poppins text-sm">
              {label}
            </div>
          </div>
          <div className="p-6 flex flex-col flex-grow">
            <h3 className="text-gray-800 mb-2 font-poppins font-medium text-lg">{title}</h3>
            <p className="text-gray-600 font-poppins text-sm mb-4 line-clamp-2">{desc}</p>
            <div className="mb-4">
              <span className="font-poppins font-bold text-[#2e7d32]">{price}</span>
            </div>
            <button className="mt-auto w-full bg-[#2e7d32] text-white py-3 rounded-lg font-poppins font-medium hover:bg-[#256629] transition-colors duration-200 active:scale-95">
              View Details
            </button>
          </div>
        </div>
      ))}
    </div>
    <div className="text-center">
      <button className="bg-white border-2 border-[#2e7d32] text-[#2e7d32] px-6 py-3 rounded-full font-poppins font-medium hover:bg-[#f0fdf4] transition-colors duration-200 active:scale-95 shadow-md hover:shadow-lg">
        View All Products
      </button>
    </div>
  </div>
</section>

<div id="about" className="bg-white w-full">
  <div className="max-w-[1280px] mx-auto px-4 md:px-20 py-20 flex flex-col md:flex-row gap-12 md:gap-20 items-center">
    <div className="relative w-full md:w-[584px] rounded-lg shadow-lg">
      <img
        src="/assets/img/d579a952d4098e8bc1dabb2baa16607f5b3976ac.png"
        alt="Siddha herbs"
        className="rounded-lg object-cover w-full h-auto"
        loading="lazy"
      />
      <div className="absolute bottom-[-16px] right-[-16px] bg-[#2e7d32] p-6 rounded-lg shadow-md text-white w-[192px] flex flex-col gap-2 items-center">
        <svg
          className="w-12 h-12"
          fill="none"
          viewBox="0 0 48 48"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <path
            d="M34 16C16 20 11.8 32.34 7.64 42.68L11.42 44C15.88 33.62 24 24 34 16Z"
            fill="white"
            fillOpacity="0.8"
          />
          <path
            d="M34 16C34 11.58 30.42 8 26 8C21.58 8 18 11.58 18 16C18 17.48 18.42 18.84 19.14 20.06C22.46 22.4 26.12 20 34 16Z"
            fill="white"
            fillOpacity="0.8"
          />
        </svg>
        <div className="font-poppins font-bold text-sm text-center leading-tight">
          <p>Pulse Diagnosis</p>
          <p>& Herbal</p>
          <p>Medicines</p>
        </div>
      </div>
    </div>
    <div className="flex flex-col gap-6 w-full md:w-[584px] text-gray-600 font-poppins font-light text-base leading-relaxed">
      <p>Welcome to Thiru Kailainaadhar Siddha Clinic, a sanctuary of traditional healing. We are dedicated to providing authentic Siddha treatment, rooted in ancient wisdom and tailored to modern lifestyles.</p>
      <p>Our primary diagnostic method is "Nadi Parikshanai" (Pulse Diagnosis), an accurate, non-invasive technique to understand the root cause of ailments. Based on this, we provide personalized treatments with pure herbal medicines.</p>
      <p>Our mission is to restore health and harmony, helping you lead a balanced and vibrant life.</p>
    </div>
  </div>
</div>

<div id="treatments" className="bg-white w-full">
  <div className="max-w-[1280px] mx-auto px-4 md:px-20 py-20 flex flex-col items-center">
    <h2 className="font-poppins font-bold text-3xl md:text-4xl text-gray-800 text-center leading-tight mb-4">
      Our Treatments
    </h2>
    <p className="font-poppins font-light text-lg text-gray-600 text-center max-w-[672px] mb-6">
      We provide specialized treatment for the following conditions:
    </p>
    <div className="bg-green-500 h-1.5 rounded w-24 mb-12"></div>
    <div className="flex flex-col md:flex-row gap-8 max-w-[896px] w-full justify-center">
      <div className="flex flex-col gap-4 w-full md:w-1/2 text-gray-700 font-poppins text-lg">
        {[
          "Asthma",
          "Piles",
          "Kidney Stones",
          "Sinus Allergy",
          "Fistula",
          "Kidney Diseases",
          "Migraine",
          "Jaundice",
        ].map((item) => (
          <div key={item} className="flex items-center gap-3">
            <svg
              className="w-5 h-5 flex-shrink-0 text-green-700"
              fill="currentColor"
              viewBox="0 0 20 20"
              aria-hidden="true"
            >
              <path d="M14.1667 6.66667C6.66667 8.33333 4.91667 13.475 3.18333 17.7833L4.75833 18.3333C6.61667 14.0083 10 10 14.1667 6.66667Z" />
              <path d="M14.1667 6.66667C14.1667 4.825 12.675 3.33333 10.8333 3.33333C8.99167 3.33333 7.5 4.825 7.5 6.66667C7.5 7.28333 7.675 7.85 7.975 8.35833C9.35833 9.33333 10.8833 8.33333 14.1667 6.66667Z" />
            </svg>
            <span className="whitespace-nowrap">{item}</span>
          </div>
        ))}
      </div>
      <div className="flex flex-col gap-4 w-full md:w-1/2 text-gray-700 font-poppins text-lg">
        {[
          "Shoulder Pain",
          "Obesity",
          "Skin Diseases",
          "Back Pain",
          "Insomnia",
          "Menstrual Problems",
          "Knee Pain",
          "Depression",
          "Heel Pain",
          "Itching/Allergies",
          "Infertility (Male & Female)",
        ].map((item) => (
          <div key={item} className="flex items-center gap-3">
            <svg
              className="w-5 h-5 flex-shrink-0 text-green-700"
              fill="currentColor"
              viewBox="0 0 20 20"
              aria-hidden="true"
            >
              <path d="M14.1667 6.66667C6.66667 8.33333 4.91667 13.475 3.18333 17.7833L4.75833 18.3333C6.61667 14.0083 10 10 14.1667 6.66667Z" />
              <path d="M14.1667 6.66667C14.1667 4.825 12.675 3.33333 10.8333 3.33333C8.99167 3.33333 7.5 4.825 7.5 6.66667C7.5 7.28333 7.675 7.85 7.975 8.35833C9.35833 9.33333 10.8833 8.33333 14.1667 6.66667Z" />
            </svg>
            <span className="whitespace-nowrap">{item}</span>
          </div>
        ))}
      </div>
    </div>
  </div>
</div>

<div id="therapies" className="bg-[rgba(240,253,244,0.5)] w-full">
  <div className="max-w-[1280px] mx-auto px-4 md:px-20 py-20 flex flex-col items-center">
    <h2 className="font-poppins font-bold text-3xl md:text-4xl text-gray-800 text-center leading-tight mb-4">
      Special Therapies
    </h2>
    <p className="font-poppins font-light text-lg text-gray-600 text-center max-w-[672px] mb-6">
      In addition to medicines, we offer traditional therapeutic procedures.
    </p>
    <div className="bg-green-500 h-1.5 rounded w-24 mb-12"></div>
    <div className="relative w-full max-w-[1152px] h-auto grid grid-cols-1 md:grid-cols-3 gap-6">
      {[
        {
          title: "Varmam",
          desc: [
            "A traditional art of vital points",
            "stimulation for healing chronic pain",
            "and blockages.",
          ],
        },
        {
          title: "Thokkanam",
          desc: [
            "A specialized Siddha massage",
            "therapy to rejuvenate muscles and",
            "joints.",
          ],
        },
        {
          title: "Uterus Problems",
          desc: [
            "Holistic care for various uterine and",
            "gynecological issues.",
          ],
        },
        {
          title: "Gallbladder Stones",
          desc: [
            "Non-surgical management and",
            "treatment for gallbladder stones.",
          ],
          topOffset: "48",
        },
        {
          title: "Infertility",
          desc: [
            "Specialized care for both male and",
            "female infertility issues, aiming to",
            "restore natural fertility.",
          ],
          topOffset: "48",
        },
      ].map(({ title, desc, topOffset }, i) => (
        <div
          key={title}
          className={`bg-white rounded-lg p-6 shadow-md transition-transform duration-300 hover:scale-105 cursor-pointer relative ${
            i >= 3 ? "md:absolute md:top-[188px]" : ""
          } ${
            i === 0
              ? "md:left-0 md:right-auto"
              : i === 1
              ? "md:left-1/3 md:right-1/3"
              : i === 2
              ? "md:right-0 md:left-auto"
              : i === 3
              ? "md:left-0 md:right-auto"
              : "md:right-0 md:left-auto"
          }`}
          style={topOffset ? { top: `${topOffset}px` } : {}}
          data-name="Background+VerticalBorder+Shadow"
        >
          <h3 className="font-poppins font-bold text-lg text-gray-800 mb-2">{title}</h3>
          <div className="font-poppins font-light text-sm text-gray-600 leading-6 whitespace-pre-line">
            {desc.map((line, idx) => (
              <p key={idx} className={idx === desc.length - 1 ? "" : "mb-0"}>
                {line}
              </p>
            ))}
          </div>
          <div
            aria-hidden="true"
            className="absolute inset-0 rounded-lg border-4 border-[#2e7d32] pointer-events-none shadow-md"
          ></div>
        </div>
      ))}
    </div>
    <div className="bg-white rounded-lg shadow-lg mt-12 max-w-[768px] w-full p-8 relative">
      <h3 className="font-poppins font-bold text-xl text-center text-gray-800 mb-6">
        Monthly Special Procedures
      </h3>
      <div className="space-y-4 font-poppins font-light text-gray-700 text-center text-base leading-7">
        <p>
          On the 1st &amp; 3rd Sunday of every month, Kalikkam (medicated eye drops) will be administered.
        </p>
        <p>
          On the 2nd &amp; 4th Sunday of every month, Nasyam (nasal therapy) will be administered.
        </p>
      </div>
      <div
        aria-hidden="true"
        className="absolute inset-0 rounded-lg border-t-4 border-[#d4af37] pointer-events-none shadow-md"
      ></div>
    </div>
  </div>
</div>

<div id="doctors" className="bg-[rgba(240,253,244,0.5)] w-full">
  <div className="max-w-[1280px] mx-auto px-4 md:px-20 py-20 flex flex-col items-center">
    <h2 className="font-poppins font-bold text-3xl md:text-4xl text-gray-800 text-center leading-tight mb-4">
      Our Expert Doctors
    </h2>
    <div className="bg-green-500 h-1.5 rounded w-24 mb-12"></div>
    <div className="flex flex-col md:flex-row gap-12 max-w-[896px] w-full justify-center">
      {[
        {
          name: "Dr. P. Gowrishankar",
          qualification: "MD (AM), MA (ASTRO)",
          imgSrc: "/assets/img/11cd2cbb94470c59336bbf30fc83322c5492002b.png",
          imgHeightPercent: "165.79%",
          imgTopPercent: "-32.89%",
        },
        {
          name: "Dr. J. Kalaivani",
          qualification: "B.S.M.S., Govt. Reg. No: 4705",
          imgSrc: "/assets/img/864265a52c294cbe998807a5dbd719aa563a7c37.png",
          imgHeightPercent: "132.5%",
          imgTopPercent: "-16.25%",
        },
      ].map(({ name, qualification, imgSrc, imgHeightPercent, imgTopPercent }) => (
        <div
          key={name}
          className="bg-white rounded-lg shadow-md overflow-hidden w-full md:w-[424px] flex flex-col"
        >
          <div className="relative h-[320px] w-full overflow-hidden">
            <img
              src={imgSrc}
              alt={name}
              className="absolute left-0 w-full max-w-none"
              style={{ height: imgHeightPercent, top: imgTopPercent }}
              loading="lazy"
            />
          </div>
          <div className="p-6 flex flex-col items-center">
            <h3 className="font-poppins font-bold text-xl text-gray-800 text-center">{name}</h3>
            <p className="font-poppins font-semibold text-[#2e7d32] text-center mt-1">{qualification}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
</div>

<div className="bg-white w-full">
  <div className="max-w-[1280px] mx-auto px-4 md:px-20 py-16 md:py-20">
    <div className="flex flex-col items-center gap-8 max-w-[672px] mx-auto text-center">
      <h2 className="font-poppins font-bold text-3xl md:text-4xl text-gray-800 leading-tight">
        Book an Appointment
      </h2>
      <p className="font-poppins font-light text-lg text-gray-600 leading-relaxed">
        Take the first step towards better health. Fill out the form or call us directly.
      </p>
    </div>
    <div className="bg-white rounded-xl shadow-lg max-w-[576px] mx-auto mt-8 p-8">
      <form className="flex flex-col gap-6">
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          required
          className="w-full px-4 py-3 border border-gray-300 rounded-md font-poppins text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-600"
        />
        <input
          type="tel"
          name="phone"
          placeholder="Your Phone Number"
          required
          className="w-full px-4 py-3 border border-gray-300 rounded-md font-poppins text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-600"
        />
        <button
          type="submit"
          className="w-full bg-[#2e7d32] hover:bg-[#25622a] text-white py-3 rounded-md font-poppins font-medium transition-colors active:scale-95"
        >
          Request Appointment
        </button>
      </form>
    </div>
  </div>
</div>

<div id="contact" className="bg-[rgba(240,253,244,0.5)] w-full">
  <div className="max-w-[1280px] mx-auto px-4 md:px-20 py-20 flex flex-col items-center">
    <h2 className="font-poppins font-bold text-3xl md:text-4xl text-gray-800 text-center leading-tight mb-4">
      Contact Us
    </h2>
    <p className="font-poppins font-light text-lg text-gray-600 text-center mb-6">Get In Touch</p>
    <div className="bg-green-500 h-1.5 rounded w-24 mb-12"></div>
    <div className="flex flex-col md:flex-row gap-12 w-full max-w-[1200px]">
      <div className="bg-white rounded-lg p-8 shadow-md w-full md:w-[592px] flex flex-col gap-8">
        <div className="flex items-start gap-4">
          <svg
            className="w-8 h-8 text-green-700 flex-shrink-0"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            viewBox="0 0 32 32"
            aria-hidden="true"
          >
            <path d="M26.6667 11.3333C26.6667 18.6667 16 27.3333 16 27.3333C16 27.3333 5.33333 18.6667 5.33333 11.3333C5.33333 8.50812 6.45714 5.79851 8.45753 3.79812C10.4579 1.79772 13.1675 0.666664 16 0.666664C18.8325 0.666664 21.5421 1.79772 23.5425 3.79812C25.5429 5.79851 26.6667 8.50812 26.6667 11.3333Z" />
            <path d="M16 14.6667C17.841 14.6667 19.3333 13.1743 19.3333 11.3333C19.3333 9.49238 17.841 8 16 8C14.159 8 12.6667 9.49238 12.6667 11.3333C12.6667 13.1743 14.159 14.6667 16 14.6667Z" />
          </svg>
          <div>
            <h3 className="font-poppins font-bold text-xl text-gray-800 mb-2">Our Address</h3>
            <p className="font-poppins font-light text-gray-600 whitespace-pre-line">
              1/77, Velappa Complex,
              <br />
              Kottaimedu Bypass,
              <br />
              Kumarapalayam - 638 183, Tamil Nadu.
            </p>
          </div>
        </div>
        <div className="flex items-start gap-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-8 h-8 text-green-700 flex-shrink-0"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384" />
          </svg>
          <div>
            <h3 className="font-poppins font-bold text-xl text-gray-800 mb-2">Phone</h3>
            <p className="font-poppins font-light text-gray-600">90926 68989, 90928 98966</p>
          </div>
        </div>
        <div className="flex items-start gap-4">
          <svg
            className="w-8 h-8 text-green-700 flex-shrink-0"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            viewBox="0 0 32 32"
            aria-hidden="true"
          >
            <path d="M28 10.6667V21.3333C28 22.3942 27.5786 23.4116 26.8284 24.1618C26.0783 24.9119 25.0609 25.3333 24 25.3333H8C6.93913 25.3333 5.92172 24.9119 5.17157 24.1618C4.42143 23.4116 4 22.3942 4 21.3333V10.6667M28 10.6667C28 9.60581 27.5786 8.5884 26.8284 7.83826C26.0783 7.08811 25.0609 6.66667 24 6.66667H8C6.93913 6.66667 5.92172 7.08811 5.17157 7.83826C4.42143 8.5884 4 9.60581 4 10.6667M28 10.6667L17.8133 17.48C17.2704 17.8567 16.6428 18.0577 16 18.0577C15.3572 18.0577 14.7296 17.8567 14.1867 17.48L4 10.6667" />
          </svg>
          <div>
            <p className="font-poppins font-light text-gray-600">Sun: 10:00 AM - 12:30 PM</p>
          </div>
        </div>
      </div>
      <div className="w-full md:w-[592px] rounded-lg overflow-hidden shadow-md">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3910.7267944985746!2d77.4897!3d11.4397!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTHCsDI2JzIzLjAiTiA3N8KwMjknMjMuMCJF!5e0!3m2!1sen!2sin!4v1234567890"
          width="100%"
          height="450"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Clinic Location"
          className="border-0"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  </div>
</div>
      {/* <div id="testimonials">
          <div className="bg-white relative size-full" data-name="Section">
              <div className="size-full">
                  <div className="max-w-[1280px] relative shrink-0 w-full" data-name="Container">
                      <div className="max-w-inherit size-full">
                          <div className="box-border content-stretch flex flex-col gap-[8px] items-center pb-[6.4px] pt-0 px-0 relative shrink-0 w-full"
                              data-name="Container"></div>
                          <div className="content-stretch flex gap-[32px] items-start justify-center relative shrink-0 w-full"
                              data-name="Container"></div>
                      </div>
                  </div>
              </div>
          </div>
      </div> */}
    </>
  );
}
