import React from "react";
import { FaInstagram, FaEnvelope, FaPhone } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa6";
import Button from "./Button";   // kalau nama file Button.js (huruf besar B)




export default function Footer() {
  return (
    <footer className="bg-red-900 text-white py-8">
  {/* Button di area kosong */}
<section className="flex flex-col items-center relative mt-[32px] sm:mt-[88px]">
        <Button
          className="text-[22px] -mt-[100px]" 
          preset="filled"
          href="https://api.whatsapp.com/send?phone=6281285234904&text=Hallo%20kak%2C%20saya%20Desi.%20Ada%20yang%20bisa%20saya%20bantu%3F"
          target="_blank"
          rel="noopener"
        ><b>DAFTAR SEKARANG!</b></Button>
        <nav className="flex justify-center mt-[24px]">
          <ul className="grid grid-cols-2 sm:flex flex-wrap gap-x-[8px] gap-y-[16px]">

          </ul>
        </nav>

      </section>

      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-10 text-left">
        
        {/* Google Maps */}
        <div>
          <h2 className="font-bold text-lg mb-2">Google Maps</h2>
          <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d93202.73508226!2d106.596274!3d-6.254003!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69fc44e133dbff%3A0xd0cb68b5e6cf4055!2sAreta%20Informatics%20College!5e1!3m2!1sen!2sus!4v1756447513753!5m2!1sen!2sus" 
          width="220" 
          height="190" 
           style={{ border: 0 }}
          allowfullscreen="" 
          loading="lazy" 
          referrerpolicy="no-referrer-when-downgrade">
          </iframe>
        </div>

        {/* Alamat Kampus */}
        <div>
          <h2 className="font-bold text-lg mb-2">Alamat Kampus</h2>
          <p>
            Dasana Indah Blok CD No.68 
            <br />Kel.Bojong Nangka<br />
            Kec. Kelapa Dua Kab. Tangerang 
            <br />Provinsi Banten Kode Pos 15833<br />
          </p>
        </div>

        {/* Connect with us */}
        <div>
          <h2 className="font-bold text-lg mb-2">Connect with us</h2>
          <p className="flex items-center gap-2 text-white">
            <FaEnvelope /> aretanetcd68@gmail.com
          </p>
          <p className="flex items-center gap-2 text-white">
            <FaPhone /> +62 852 1950 7377
          </p>
        </div>

        {/* Social Media */}
        <div>
          <h2 className="font-bold text-lg mb-2">Social Media</h2>
          <div className="flex gap-4">
            <a
              href="https://instagram.com/Kerja_Jepang_aic"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-pink-400"
            >
              <FaInstagram size={24} />
            </a>
            <a
              href="https://tiktok.com/@Kerja_Jepang_aic"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-300"
            >
              <FaTiktok size={24} />
            </a>
          </div>
        </div>
      </div>

      <div className="text-center mt-6 text-sm border-t border-white/40 pt-4">
        Copyright © Areta Informatics College
      </div>
    </footer>
  );
}
