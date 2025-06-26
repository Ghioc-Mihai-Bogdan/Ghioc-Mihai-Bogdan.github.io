import React from 'react';
import ConfettiEffect from '../components/ConfettiEffect';
import PixelBunny from '../components/PixelBunny';
import GameController from '../components/GameController';
import { Heart, Star, Gamepad2 } from 'lucide-react';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-pink-800 to-blue-900 relative overflow-hidden">
      <ConfettiEffect />
      
      {/* Background gaming elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 animate-bounce">
          <GameController />
        </div>
        <div className="absolute top-20 right-20 animate-bounce delay-100">
          <Gamepad2 size={40} className="text-white" />
        </div>
        <div className="absolute bottom-20 left-20 animate-bounce delay-200">
          <Star size={30} className="text-yellow-300" />
        </div>
        <div className="absolute bottom-10 right-10 animate-bounce delay-300">
          <Heart size={35} className="text-pink-300" />
        </div>
      </div>

      {/* Main content */}
      <div className="relative z-20 container mx-auto px-4 py-8 flex flex-col items-center justify-center min-h-screen">
        
        {/* Header with bunnies */}
        <div className="flex items-center justify-center mb-8 space-x-8">
          <PixelBunny className="animate-bounce" />
          <div className="text-center">
            <h1 className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 bg-clip-text text-transparent animate-pulse mb-2">
              La Mulți Ani!
            </h1>
            <div className="flex items-center justify-center space-x-2">
              <Star className="text-yellow-300 animate-spin" size={24} />
              <h2 className="text-3xl md:text-4xl font-bold text-white">
                Bianca
              </h2>
              <Star className="text-yellow-300 animate-spin" size={24} />
            </div>
          </div>
          <PixelBunny className="animate-bounce delay-150" />
        </div>

        {/* Gaming level up message */}
        <div className="bg-black/30 backdrop-blur-sm border-2 border-purple-400 rounded-lg p-4 mb-8 shadow-2xl">
          <div className="text-center text-green-400 font-mono text-lg animate-pulse">
            🎮 LEVEL UP! 🎮
          </div>
          <div className="text-center text-white font-mono">
            Achievement Unlocked: +1 An Awesome!
          </div>
        </div>

        {/* Main birthday message card */}
        <div className="max-w-2xl w-full bg-white/10 backdrop-blur-lg rounded-3xl p-8 shadow-2xl border-2 border-purple-300/50 hover:border-pink-300/70 transition-all duration-300 hover:scale-105">
          <div className="text-center space-y-6">
            
            {/* Cute gaming message */}
            <div className="bg-gradient-to-r from-pink-500/20 to-purple-500/20 rounded-2xl p-6 border border-pink-300/30">
              <div className="flex items-center justify-center space-x-3 mb-4">
                <Gamepad2 className="text-purple-300 animate-pulse" size={28} />
                <h3 className="text-2xl font-bold text-white">Gamer Princess</h3>
                <Gamepad2 className="text-purple-300 animate-pulse" size={28} />
              </div>
              
              <p className="text-lg text-purple-100 leading-relaxed mb-4">
                Într-o lume plină de aventuri și provocări, tu ești cea mai tare gamer! 
                Să ai parte de cele mai epice quest-uri în noul an de viață! 🎯
              </p>
              
              <div className="flex justify-center space-x-4 mb-4">
                <div className="bg-purple-600/50 rounded-lg px-3 py-1 text-white text-sm font-mono">
                  HP: ∞
                </div>
                <div className="bg-pink-600/50 rounded-lg px-3 py-1 text-white text-sm font-mono">
                  XP: Maximum
                </div>
                <div className="bg-blue-600/50 rounded-lg px-3 py-1 text-white text-sm font-mono">
                  Cuteness: 100%
                </div>
              </div>
            </div>

            {/* Personal message section */}
            <div className="bg-gradient-to-r from-blue-500/20 to-teal-500/20 rounded-2xl p-6 border border-blue-300/30">
              <div className="flex items-center justify-center space-x-2 mb-4">
                <Heart className="text-pink-300 animate-pulse" size={24} />
                <h3 className="text-xl font-bold text-white">Mesajul Meu Special</h3>
                <Heart className="text-pink-300 animate-pulse" size={24} />
              </div>
              
              <div className="bg-white/10 rounded-xl p-6 min-h-[120px] border-2 border-dashed border-purple-300/50">
                <p className="text-purple-100 text-center italic text-lg leading-relaxed">
                  ✨ Cateva cuvinte calduroase de la Bogdan, cel care iubeste oamenii si se gandeste la ei mereu. ✨
                  <br /><br />
                  Asemenea unui joc, in viata poti sa incerci de mai multe ori si sa gresesti pana reusesti sau chiar sa-ti iei un moment de planificare si sa reusesti din prima. Oricare ai alege, la un moment dat poate te vei frustra, dar nu uita ca jocul nu se termina acolo. Priveste in viitor cu optimism si cand esti la pamant viseaza-te cum ti-ai implinit visele pe care le urmaresti in prezent. Jocul merita jucat iar viata merita traita.
                  <br /><br />
                  Multă sănătate, fericire și success în gaming! 🎮💖
                </p>
              </div>
            </div>

            {/* Bottom decoration */}
            <div className="flex items-center justify-center space-x-4 pt-4">
              <Star className="text-yellow-300 animate-spin" size={20} />
              <span className="text-white font-mono text-sm">Press START to continue being awesome!</span>
              <Star className="text-yellow-300 animate-spin" size={20} />
            </div>

          </div>
        </div>

        {/* Footer bunnies */}
        <div className="flex items-center justify-center space-x-12 mt-8">
          <PixelBunny className="animate-bounce delay-300" />
          <div className="text-center">
            <div className="text-2xl">🎂🎉🎮</div>
            <p className="text-purple-200 text-sm font-mono mt-2">
              Made with ❤️ for the best gamer bunny!
            </p>
          </div>
          <PixelBunny className="animate-bounce delay-500" />
        </div>

      </div>

      {/* Animated background particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-purple-300/30 rounded-full animate-ping"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 2}s`,
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default Index;
