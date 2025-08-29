import React from "react";
import { FaInstagram } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="bg-red-900 text-white py-8">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
        
        {/* Google Maps */}
        <div className="">
          <h2 className="font-bold text-lg mb-2">Google Maps</h2>
          <iframe
            src="https://www.google.com/maps/embed?pb=..."
            width="100%"
            height="200"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>

        {/* Alamat Kampus */}
        <div className="">
          <h2 className="font-bold text-lg mb-2">Alamat Kampus</h2>
          <p>
            Dasana Indah Blok CD No.68 
            <br />Kel.Bojong Nangka<br />
            Kec. Kelapa Dua Kab. Tangerang 
            <br />Provinsi Banten Kode Pos 15833<br />
            
          </p>
        </div>

        {/* Connect with us */}
        <div className="">
          <h2 className="font-bold text-lg mb-2">Connect with us</h2>
          <p>📧 aretanetcd68@gmail.com</p>
          <p>📞 +62 852 1950 7377</p>
        </div>
      </div>
 {/* 🔗 Sosial Media */}
          <div className="flex gap-3 mt-3">
            <a
              href="https://instagram.com/Kerja_Jepang_aic"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-pink-500 text-white hover:bg-pink-600 transition"
            >
              <FaInstagram size={20} />
            </a>

            <a
              href="https://tiktok.com/@Kerja_Jepang_aic"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-black text-white hover:bg-gray-800 transition"
            >
              <FaTiktok size={20} />
            </a>
          </div>
      <div className="text-center mt-6 text-sm border-t border-white/40 pt-4">
        Copyright © Areta Informatics College
      </div>
    </footer>
  );
}
