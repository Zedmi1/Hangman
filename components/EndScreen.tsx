import { Button } from "./ui/button";
import { Card } from "./ui/card";

interface EndScreenProps {
  isWin: boolean;
  word: string;
  onRestart: () => void;
}

export function EndScreen({ isWin, word, onRestart }: EndScreenProps) {
  return (
    <div className={`min-h-screen flex items-center justify-center p-4 ${
      isWin 
        ? 'bg-gradient-to-br from-green-50 to-emerald-50' 
        : 'bg-gradient-to-br from-red-50 to-orange-50'
    }`}>
      <Card className="max-w-md w-full p-8 text-center shadow-lg">
        <div className="space-y-6">
          
          {/* Win/Lose Message */}
          <div className="space-y-4">
            <div className={`text-6xl ${isWin ? 'text-green-500' : 'text-red-500'}`}>
              {isWin ? '🎉' : '💀'}
            </div>
            
            <h1 className={`text-3xl font-bold ${
              isWin ? 'text-green-700' : 'text-red-700'
            }`}>
              {isWin ? 'You Win!' : 'Game Over'}
            </h1>
            
            <p className="text-gray-600">
              {isWin 
                ? 'Congratulations! You guessed the word!' 
                : 'Better luck next time!'
              }
            </p>
          </div>

          {/* Word Reveal */}
          <div className="bg-gray-50 rounded-lg p-4">
            <p className="text-sm text-gray-600 mb-2">The word was:</p>
            <p className="text-2xl font-mono font-bold text-gray-800 tracking-widest">
              {word.toUpperCase()}
            </p>
          </div>

          {/* Restart Button */}
          <Button 
            onClick={onRestart}
            className={`w-full h-12 text-lg ${
              isWin
                ? 'bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600'
                : 'bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600'
            }`}
          >
            Play Again
          </Button>
        </div>
      </Card>
    </div>
  );
}