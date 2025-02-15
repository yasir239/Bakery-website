import React from 'react';
import { Cake, Croissant, Coffee, Clock, Phone, MapPin } from 'lucide-react';
import Products from './Products';

function App() {
  const [showProducts, setShowProducts] = React.useState(false);

  if (showProducts) {
    return <Products onBack={() => setShowProducts(false)} />;
  }

  return (
    <div className="min-h-screen bg-[#FDF7F2]" dir="rtl">
      {/* Hero Section */}
      <header className="relative h-[600px]">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1517433670267-08bbd4be890f?auto=format&fit=crop&q=80&w=2048"
            alt="مخبوزات طازجة"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 h-full flex flex-col justify-center items-center text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            مخبز سليمان
          </h1>
          <p className="text-xl text-white mb-8 max-w-2xl">
            نقدم لكم أشهى المخبوزات الطازجة يومياً
          </p>
          <button 
            onClick={() => setShowProducts(true)}
            className="bg-[#E8A87C] text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-[#D89267] transition-colors"
          >
            عرض المنتجات
          </button>
        </div>
      </header>

      {/* Features */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="w-16 h-16 mx-auto mb-4 bg-[#FDF7F2] rounded-full flex items-center justify-center">
              <Cake className="w-8 h-8 text-[#E8A87C]" />
            </div>
            <h3 className="text-xl font-semibold mb-2">طازج يومياً</h3>
            <p className="text-gray-600">نخبز منتجاتنا يومياً باستخدام أجود المكونات</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 mx-auto mb-4 bg-[#FDF7F2] rounded-full flex items-center justify-center">
              <Croissant className="w-8 h-8 text-[#E8A87C]" />
            </div>
            <h3 className="text-xl font-semibold mb-2">جودة حرفية</h3>
            <p className="text-gray-600">مخبوزات تقليدية مصنوعة بحب وعناية</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 mx-auto mb-4 bg-[#FDF7F2] rounded-full flex items-center justify-center">
              <Coffee className="w-8 h-8 text-[#E8A87C]" />
            </div>
            <h3 className="text-xl font-semibold mb-2">نكهة مميزة</h3>
            <p className="text-gray-600">مذاق فريد يجمع بين الأصالة والحداثة</p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">زورونا</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <Clock className="w-8 h-8 mx-auto mb-4 text-[#E8A87C]" />
              <h3 className="text-xl font-semibold mb-2">ساعات العمل</h3>
              <p className="text-gray-600">السبت - الخميس: 7 ص - 11 م</p>
              <p className="text-gray-600">الجمعة: مغلق</p>
            </div>
            <div className="text-center">
              <Phone className="w-8 h-8 mx-auto mb-4 text-[#E8A87C]" />
              <h3 className="text-xl font-semibold mb-2">اتصل بنا</h3>
              <p className="text-gray-600"></p>
            </div>
            <div className="text-center">
              <MapPin className="w-8 h-8 mx-auto mb-4 text-[#E8A87C]" />
              <h3 className="text-xl font-semibold mb-2">موقعنا</h3>
              <p className="text-gray-600"></p>
              <p className="text-gray-600"></p>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="w-full h-[400px] rounded-lg overflow-hidden">
            <iframe
              src=""
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#2C1810] text-white py-8">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="mb-4">© </p>
        </div>
      </footer>
    </div>
  );
}

export default App;