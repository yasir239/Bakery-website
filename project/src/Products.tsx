import React from 'react';
import { ArrowRight } from 'lucide-react';

interface NutritionalInfo {
  calories?: string;
  fat?: string;
  protein?: string;
  carbs?: string;
  sugar?: string;
  sodium?: string;
  fiber?: string;
  iron?: string;
  calcium?: string;
  type?: string;
  weight?: string;
  description?: string;
}

interface Product {
  name: string;
  price: number;
  image: string;
  nutritionalInfo: NutritionalInfo;
}

const products: Product[] = [
  {
    name: "كروسون ميني شيدر",
    price: 9,
    image: "https://i.imgur.com/Dx7Nyyh.jpg",
    nutritionalInfo: {
      calories: "410 سعرة حرارية",
      fat: "23 غرام",
      protein: "8 غرام",
      carbs: "40 غرام",
      sugar: "5 غرام",
      sodium: "250 ملغ"
    }
  },
  {
    name: "كروسون ميني زعتر",
    price: 9,
    image: "https://i.imgur.com/5YpAXLs.jpeg",
    nutritionalInfo: {
      calories: "405 سعرة حرارية",
      fat: "22 غرام",
      protein: "7 غرام",
      carbs: "39 غرام",
      sugar: "3 غرام",
      sodium: "240 ملغ"
    }
  },
  {
    name: "شابورة كيك",
    price: 26,
    image: "https://i.imgur.com/GxNvCgH.jpeg",
    nutritionalInfo: {
      calories: "380 سعرة حرارية",
      fat: "12 غرام",
      protein: "5 غرام",
      carbs: "65 غرام",
      sugar: "20 غرام",
      sodium: "130 ملغ"
    }
  },
  {
    name: "شابورة توست",
    price: 18,
    image: "https://i.imgur.com/mqu3nZr.jpeg",
    nutritionalInfo: {
      calories: "300-400 سعرة حرارية",
      fat: "5-10 غرام",
      protein: "7-10 غرام",
      carbs: "50-60 غرام",
      fiber: "2-4 غرام"
    }
  },
  {
    name: "شابورة أصابع",
    price: 10,
    image: "https://i.imgur.com/zDTZ5iN.jpeg",
    nutritionalInfo: {
      calories: "400-500 سعرة حرارية",
      fat: "15-20 غرام",
      protein: "6-8 غرام",
      carbs: "60-70 غرام",
      fiber: "2-3 غرام",
      sugar: "5-10 غرام"
    }
  },
  {
    name: "شابورة اصابع بر",
    price: 10,
    image: "https://i.imgur.com/GwrQBHy.jpeg",
    nutritionalInfo: {
      calories: "360 سعرة حرارية",
      fat: "8 غرام",
      protein: "7 غرام",
      carbs: "63 غرام",
      fiber: "5 غرام",
      sodium: "120 ملغ"
    }
  },
  {
    name: "شابوره حليب",
    price: 18,
    image: "https://i.imgur.com/gsaCrTR.jpeg",
    nutritionalInfo: {
      calories: "370 سعرة حرارية",
      fat: "11 غرام",
      protein: "6 غرام",
      carbs: "62 غرام",
      sugar: "25 غرام",
      sodium: "140 ملغ"
    }
  },
  {
    name: "كليجا",
    price: 19,
    image: "https://i.imgur.com/YXjjUJ4.jpeg",
    nutritionalInfo: {
      calories: "350-400 سعرة حرارية",
      fat: "15-20 غرام",
      protein: "6-8 غرام",
      carbs: "60-70 غرام",
      fiber: "2-3 غرام",
      sugar: "15-20 غرام",
      calcium: "2% من الاحتياج اليومي",
      iron: "5% من الاحتياج اليومي"
    }
  },
  {
    name: "قهوة السلفادور من محمصة كفة",
    price: 47,
    image: "https://i.imgur.com/0llIcN9.jpeg",
    nutritionalInfo: {
      type: "حبوب قهوة كاملة",
      weight: "250 جرام",
      description: "شوكولاتة بالحليب، كراميل"
    }
  },
  {
    name: "قهوة هاماشو من محمصة كفة",
    price: 54,
    image: "https://i.imgur.com/oLjk07i.jpeg",
    nutritionalInfo: {
      type: "حبوب قهوة كاملة",
      weight: "250 جرام",
      description: "فواكه"
    }
  }
];

interface ProductsProps {
  onBack: () => void;
}

function Products({ onBack }: ProductsProps) {
  return (
    <div className="min-h-screen bg-[#FDF7F2] py-12 px-4" dir="rtl">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center mb-8">
          <button
            onClick={onBack}
            className="flex items-center text-[#2C1810] hover:text-[#E8A87C] transition-colors"
          >
            <ArrowRight className="ml-2" />
            العودة للرئيسية
          </button>
        </div>
        <h1 className="text-4xl font-bold text-center mb-12 text-[#2C1810]">منتجاتنا</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h2 className="text-2xl font-bold mb-2 text-[#2C1810]">{product.name}</h2>
                <p className="text-xl text-[#E8A87C] font-bold mb-4">
                  {product.price} ريال
                </p>
                <div className="space-y-2 text-gray-600">
                  {product.nutritionalInfo.type && (
                    <p>النوع: {product.nutritionalInfo.type}</p>
                  )}
                  {product.nutritionalInfo.weight && (
                    <p>الوزن: {product.nutritionalInfo.weight}</p>
                  )}
                  {product.nutritionalInfo.description && (
                    <p>النكهة: {product.nutritionalInfo.description}</p>
                  )}
                  {product.nutritionalInfo.calories && (
                    <p>السعرات الحرارية: {product.nutritionalInfo.calories}</p>
                  )}
                  {product.nutritionalInfo.fat && (
                    <p>الدهون: {product.nutritionalInfo.fat}</p>
                  )}
                  {product.nutritionalInfo.protein && (
                    <p>البروتين: {product.nutritionalInfo.protein}</p>
                  )}
                  {product.nutritionalInfo.carbs && (
                    <p>الكربوهيدرات: {product.nutritionalInfo.carbs}</p>
                  )}
                  {product.nutritionalInfo.sugar && (
                    <p>السكر: {product.nutritionalInfo.sugar}</p>
                  )}
                  {product.nutritionalInfo.sodium && (
                    <p>الصوديوم: {product.nutritionalInfo.sodium}</p>
                  )}
                  {product.nutritionalInfo.fiber && (
                    <p>الألياف: {product.nutritionalInfo.fiber}</p>
                  )}
                  {product.nutritionalInfo.calcium && (
                    <p>الكالسيوم: {product.nutritionalInfo.calcium}</p>
                  )}
                  {product.nutritionalInfo.iron && (
                    <p>الحديد: {product.nutritionalInfo.iron}</p>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Products;