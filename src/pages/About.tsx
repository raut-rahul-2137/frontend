import React from "react";

const About: React.FC = () => (
  <div className="max-w-6xl mx-auto py-10 px-4">
    <h1 className="text-3xl md:text-4xl font-bold text-brand mb-8 text-center animate-fade-in">
      About egde-fx
    </h1>
    
    {/* Main About Section */}
    <div className="bg-card rounded-xl shadow-lg p-6 md:p-10 mb-8 transform transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl animate-fade-in" style={{ animationDelay: "0.1s" }}>
      <div className="relative">
        <div className="absolute -top-4 -left-4 w-8 h-8 bg-brand rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute -bottom-4 -right-4 w-6 h-6 bg-brand rounded-full opacity-30 animate-pulse" style={{ animationDelay: "0.5s" }}></div>
        
        <p className="text-lg leading-relaxed mb-6 relative z-10">
          At <span className="font-bold text-brand bg-gradient-to-r from-brand to-blue-400 bg-clip-text text-transparent">egde-fx LLC</span>, we are dedicated to helping individuals and businesses achieve their financial goals through our cutting-edge algorithmic trading services. Our algorithms are developed in Python and deployed on some of the world's most secure Amazon web servers, ensuring high-frequency trades with very low latency. This technology provides 100% automation compatibility with every broker worldwide.
        </p>
        
        <p className="text-lg leading-relaxed mb-6">
          Our team of experienced financial consultants possesses a wealth of knowledge and expertise in various financial areas, including investment management, Forex, and Comex. We understand that each client is unique, which is why we take the time to thoroughly understand your specific financial situation. This enables us to tailor our services to meet your individual needs and provide you with a comprehensive financial plan that aligns with your short-term and long-term objectives.
        </p>
        
        <p className="text-lg leading-relaxed mb-6">
          At <span className="font-bold text-brand bg-gradient-to-r from-brand to-blue-400 bg-clip-text text-transparent">egde-fx LLC</span>, we pride ourselves on our commitment to transparency and unbiased advice. Our consultants are not tied to any specific financial products or services, allowing us to offer you a wide range of options that best suit your needs. In addition to financial consulting, we also offer services such as financial coaching, education, and reviews.
        </p>
        
        <p className="text-lg leading-relaxed">
          We believe that building strong and trust-based relationships with our clients is crucial to achieving their financial goals. Our dedicated team of financial experts is here to guide you on your journey to financial success. If you're ready to take control of your financial future, don't hesitate to contact us. Let us help you turn your financial aspirations into reality.
        </p>
      </div>
    </div>

    {/* Mission Section */}
    <div className="bg-card rounded-xl shadow-lg p-6 md:p-10 mb-8 transform transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl animate-fade-in" style={{ animationDelay: "0.2s" }}>
      <div className="relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-brand to-blue-400 transform -translate-x-full animate-slide-in"></div>
        <h2 className="text-2xl md:text-3xl font-bold text-brand mb-4 flex items-center">
          <span className="mr-3 text-3xl">🎯</span>
          Mission
        </h2>
        <p className="text-lg leading-relaxed">
          At <span className="font-bold text-brand bg-gradient-to-r from-brand to-blue-400 bg-clip-text text-transparent">egde-fx LLC</span>, our mission is to empower individuals and businesses to achieve their financial goals through expert advice and cutting-edge algorithmic trading technology. We strive to provide personalized solutions and unparalleled customer service, helping clients make informed decisions and build a strong financial foundation. With transparent and unbiased guidance, we aim to guide clients towards their short and long-term objectives, ensuring maximum efficiency and accuracy in their financial endeavors. Join us on your journey to financial success.
        </p>
      </div>
    </div>

    {/* Vision Section */}
    <div className="bg-card rounded-xl shadow-lg p-6 md:p-10 mb-8 transform transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl animate-fade-in" style={{ animationDelay: "0.3s" }}>
      <div className="relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-brand to-blue-400 transform -translate-x-full animate-slide-in" style={{ animationDelay: "0.3s" }}></div>
        <h2 className="text-2xl md:text-3xl font-bold text-brand mb-4 flex items-center">
          <span className="mr-3 text-3xl">🔮</span>
          Vision
        </h2>
        <p className="text-lg leading-relaxed">
          Our vision is to be a leading financial consulting firm that is recognized for our integrity, expertise, and commitment to helping our clients achieve their financial objectives. We aim to foster long-term relationships with our clients built on trust, transparency, and mutual understanding. We will continue to innovate, educate and adapt to the ever-changing financial landscape to ensure that our clients are equipped with the knowledge and tools they need to succeed. We're dedicated to building a brighter financial future for our clients and we're passionate about making sure they have the confidence and peace of mind they need to live their best life.
        </p>
      </div>
    </div>

    {/* Why Choose Us Section */}
    <div className="bg-card rounded-xl shadow-lg p-6 md:p-10 transform transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl animate-fade-in" style={{ animationDelay: "0.4s" }}>
      <div className="relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-brand to-blue-400 transform -translate-x-full animate-slide-in" style={{ animationDelay: "0.4s" }}></div>
        <h2 className="text-2xl md:text-3xl font-bold text-brand mb-6 flex items-center">
          <span className="mr-3 text-3xl">⭐</span>
          Why Choose egde-fx
        </h2>
        <p className="text-lg leading-relaxed mb-6">
          Choosing the right financial consultant is crucial for achieving your financial goals. Here are some reasons why you should choose our financial consulting business:
        </p>
        
        <div className="grid md:grid-cols-2 gap-6">
          {[
            {
              icon: "🧠",
              title: "Expertise",
              description: "Our team of financial consultants has a wealth of experience and expertise in the financial industry. We stay up-to-date on the latest market trends, laws, and regulations to ensure that our clients receive accurate and relevant advice."
            },
            {
              icon: "🎯",
              title: "Personalized Approach",
              description: "We take the time to understand our clients' unique financial situation and tailor our services to meet their specific needs. Whether you're an individual or a business, we develop a customized plan to help you achieve your financial goals."
            },
            {
              icon: "🌐",
              title: "Comprehensive Services",
              description: "We offer a wide range of financial consulting services, including Forex advisory, Comex, and US stocks. Our clients have access to a wide range of services to help them achieve success in all areas of their financial lives."
            },
            {
              icon: "🔍",
              title: "Transparent and Honest",
              description: "We pride ourselves on being transparent and honest with our clients. We provide clear explanations of our recommendations and the reasoning behind them, so our clients can make informed decisions about their finances."
            },
            {
              icon: "📊",
              title: "Performance Tracking",
              description: "We provide regular performance tracking and reporting to our clients, so they can see how their investments are performing and how close they are to achieving their financial goals."
            },
            {
              icon: "⏰",
              title: "Available Business Days",
              description: "We're available Monday to Saturday 9 to 6:30 to answer your questions and help you with whatever you need, so you can always reach us when you need us."
            },
            {
              icon: "💰",
              title: "Cost-effective",
              description: "We offer competitive pricing and work with clients to develop a plan that suits their budget."
            },
            {
              icon: "💻",
              title: "Online and Offline Support",
              description: "We provide both online and offline support to our clients, giving them the flexibility to access our services from anywhere, at any time."
            }
          ].map((item, index) => (
            <div 
              key={item.title}
              className="group p-6 rounded-lg border border-gray-700 hover:border-brand transition-all duration-300 hover:bg-gray-800/50 transform hover:scale-105 animate-fade-in"
              style={{ animationDelay: `${0.5 + index * 0.1}s` }}
            >
              <div className="flex items-start space-x-4">
                <div className="text-3xl group-hover:scale-110 transition-transform duration-300">
                  {item.icon}
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-brand mb-3 group-hover:text-blue-400 transition-colors duration-300">
                    {item.title}
                  </h3>
                  <p className="text-base leading-relaxed text-gray-300 group-hover:text-gray-100 transition-colors duration-300">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <p className="text-lg leading-relaxed mt-6 p-4 bg-gradient-to-r from-brand/10 to-blue-400/10 rounded-lg border border-brand/20">
          By choosing our financial consulting business, you can rest assured that you'll receive expert advice, personalized solutions, and comprehensive services that are tailored to meet your specific needs. We're committed to helping you achieve your financial goals and improve your overall financial well-being.
        </p>
      </div>
    </div>

    <style>{`
      @keyframes fade-in {
        from {
          opacity: 0;
          transform: translateY(20px);
        }
        to {
          opacity: 1;
          transform: translateY(0);
        }
      }
      
      @keyframes slide-in {
        from {
          transform: translateX(-100%);
        }
        to {
          transform: translateX(0);
        }
      }
      
      .animate-fade-in {
        animation: fade-in 0.6s ease-out forwards;
        opacity: 0;
      }
      
      .animate-slide-in {
        animation: slide-in 0.8s ease-out forwards;
      }
    `}</style>
  </div>
);

export default About;
