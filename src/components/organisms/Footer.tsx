import React from 'react';
import { Clock, MapPin, Mail, Users, FileText } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-gray-300">
      {/* Main Footer Content */}
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Column - Company Info */}
          <div className="space-y-6">
            <div>
              <h2 className="text-yellow-400 text-2xl font-bold mb-4">LANDAS</h2>
              <div className="space-y-3 text-sm">
                <div className="flex items-center gap-2">
                  <Users className="w-4 h-4 text-yellow-400" />
                  <span>대표이사 : 김철수</span>
                </div>
                <div className="flex items-center gap-2">
                  <FileText className="w-4 h-4 text-yellow-400" />
                  <span>사업자등록번호 : 201-86-16245</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-yellow-400" />
                  <span>서울특별시 종로구 다동길 139 (관련신축빌딩) 6층</span>
                </div>
                <div className="flex items-center gap-2">
                  <FileText className="w-4 h-4 text-yellow-400" />
                  <span>통신판매업신고 : 종구 제0575호</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-yellow-400" />
                  <span>개인정보보호책임자 : 김철수</span>
                </div>
              </div>
            </div>
            
            <div className="text-xs text-gray-500">
              <p>Copyright  www.landassign.com All rights reserved</p>
            </div>
          </div>

          {/* Right Column - Contact Info */}
          <div className="space-y-6">
            <div>
              <p className="text-sm mb-2">대부 업무 및 상담 문의</p>
              <h3 className="text-yellow-400 text-3xl font-bold mb-4">1661-6244</h3>
              
              <div className="space-y-3 text-sm">
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-yellow-400" />
                  <span>평일 : 09:00 ~ 18:00</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-yellow-400" />
                  <span>주말 : 휴무원칙</span>
                </div>
                <div className="flex items-center gap-2">
                  <FileText className="w-4 h-4 text-yellow-400" />
                  <span>신고번호 : 2-1-1117-0-04-008</span>
                </div>
                <div className="flex items-center gap-2">
                  <FileText className="w-4 h-4 text-yellow-400" />
                  <span>협회 : (사)한국대부금융협회</span>
                </div>
              </div>
            </div>

            {/* Social Media Icons */}
            <div className="flex gap-4 pt-4">
              <div className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center hover:bg-gray-600 transition-colors cursor-pointer">
                <span className="text-xs">IG</span>
              </div>
              <div className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center hover:bg-gray-600 transition-colors cursor-pointer">
                <span className="text-xs">F</span>
              </div>
              <div className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center hover:bg-gray-600 transition-colors cursor-pointer">
                <span className="text-xs">YT</span>
              </div>
            </div>
          </div>
        </div>
      </div>

    </footer>
  );
};

export default Footer;