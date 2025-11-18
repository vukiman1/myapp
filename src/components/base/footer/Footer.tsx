"use client";

import React from "react";
import {
  FacebookOutlined,
  InstagramOutlined,
  YoutubeOutlined,
  EnvironmentOutlined,
  PhoneOutlined,
  MailOutlined,
} from "@ant-design/icons";

const Footer: React.FC = () => {
  return (
    <footer className=" text-black">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo và Giới thiệu */}
          <div className="col-span-1">
            <div className="mb-4">
              <h3 className="text-2xl font-bold ">Gear</h3>
            </div>
            <p className=" mb-4 leading-relaxed">
              Hơn 15 năm kinh nghiệm trong ngành thiết bị, công ty chúng tôi tự
              hào là đối tác tin cậy của hàng nghìn khách hàng và doanh nghiệp.
            </p>
            <div className="flex space-x-4">
              <a href="#" className=" hover: transition-colors">
                <FacebookOutlined className="text-xl" />
              </a>
              <a href="#" className=" hover:text-pink-400 transition-colors">
                <InstagramOutlined className="text-xl" />
              </a>
              <a href="#" className=" hover:text-red-600 transition-colors">
                <YoutubeOutlined className="text-xl" />
              </a>
            </div>
          </div>

          {/* Chính sách */}
          <div className="col-span-1">
            <h4 className="text-lg font-semibold mb-4">Chính sách</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className=" hover:text-white transition-colors">
                  Chính sách bảo hành
                </a>
              </li>
              <li>
                <a href="#" className=" hover:text-white transition-colors">
                  Chính sách đổi trả
                </a>
              </li>
              <li>
                <a href="#" className=" hover:text-white transition-colors">
                  Chính sách vận chuyển
                </a>
              </li>
              <li>
                <a href="#" className=" hover:text-white transition-colors">
                  Chính sách thanh toán
                </a>
              </li>
              <li>
                <a href="#" className=" hover:text-white transition-colors">
                  Chính sách bảo mật
                </a>
              </li>
              <li>
                <a href="#" className=" hover:text-white transition-colors">
                  Chính sách_membership
                </a>
              </li>
            </ul>
          </div>

          {/* Dịch vụ */}
          <div className="col-span-1">
            <h4 className="text-lg font-semibold mb-4 ">Dịch vụ</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className=" hover:text-white transition-colors">
                  Khách hàng doanh nghiệp
                </a>
              </li>
              <li>
                <a href="#" className=" hover:text-white transition-colors">
                  Giao hàng tận nơi
                </a>
              </li>
              <li>
                <a href="#" className=" hover:text-white transition-colors">
                  Bán hàng quốc tế
                </a>
              </li>
              <li>
                <a href="#" className=" hover:text-white transition-colors">
                  Hệ thống cửa hàng
                </a>
              </li>
              <li>
                <a href="#" className=" hover:text-white transition-colors">
                  Ưu đãi đặc biệt
                </a>
              </li>
              <li>
                <a href="#" className=" hover:text-white transition-colors">
                  Tuyển dụng
                </a>
              </li>
            </ul>
          </div>

          {/* Hỗ trợ */}
          <div className="col-span-1">
            <h4 className="text-lg font-semibold mb-4 ">Hỗ trợ</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className=" hover:text-white transition-colors">
                  Hướng dẫn mua hàng
                </a>
              </li>
              <li>
                <a href="#" className=" hover:text-white transition-colors">
                  Hướng dẫn thanh toán
                </a>
              </li>
              <li>
                <a href="#" className=" hover:text-white transition-colors">
                  Trung tâm bảo hành
                </a>
              </li>
              <li>
                <a href="#" className=" hover:text-white transition-colors">
                  Kiểm tra bảo hành
                </a>
              </li>
              <li>
                <a href="#" className=" hover:text-white transition-colors">
                  Kiểm tra hóa đơn điện tử
                </a>
              </li>
              <li>
                <a href="#" className=" hover:text-white transition-colors">
                  Liên hệ & Góp ý
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
