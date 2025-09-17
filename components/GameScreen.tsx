import { Button } from "./ui/button";
import { Card } from "./ui/card";
import { Badge } from "./ui/badge";

interface GameScreenProps {
  word: string;
  guessedLetters: string[];
  livesLeft: number;
  onGuessLetter: (letter: string) => void;
  displayWord: string;
}

export function GameScreen({ 
  word, 
  guessedLetters, 
  livesLeft, 
  onGuessLetter, 
  displayWord 
}: GameScreenProps) {
  // Generate alphabet buttons
  const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50 p-4">
      <div className="max-w-2xl mx-auto space-y-6">
        
        {/* Lives Counter */}
        <div className="text-center">
          <Badge variant="destructive" className="text-lg px-4 py-2">
            Lives Left: {livesLeft}
          </Badge>
        </div>

        {/* Word Display */}
        <Card className="p-8">
          <div className="text-center">
            <div className="text-4xl font-mono tracking-widest mb-4 text-gray-800">
              {displayWord.split('').map((char, index) => (
                <span key={index} className="inline-block mx-1">
                  {char}
                </span>
              ))}
            </div>
          </div>
        </Card>

        {/* Alphabet Grid */}
        <Card className="p-6">
          <h3 className="text-center mb-4 text-gray-700">Click a letter to guess:</h3>
          <div className="grid grid-cols-6 sm:grid-cols-8 md:grid-cols-9 gap-2">
            {alphabet.map((letter) => {
              const isGuessed = guessedLetters.includes(letter);
              const isCorrect = word.toUpperCase().includes(letter);
              
              return (
                <Button
                  key={letter}
                  onClick={() => onGuessLetter(letter)}
                  disabled={isGuessed}
                  className={`h-10 text-sm ${
                    isGuessed
                      ? isCorrect
                        ? 'bg-green-500 hover:bg-green-500 text-white'
                        : 'bg-red-500 hover:bg-red-500 text-white'
                      : 'bg-white hover:bg-gray-100 text-gray-700 border border-gray-300'
                  }`}
                >
                  {letter}
                </Button>
              );
            })}
          </div>
        </Card>

        {/* Guessed Letters Display */}
        <Card className="p-4">
          <div className="text-center">
            <p className="text-sm text-gray-600 mb-2">Guessed Letters:</p>
            <div className="flex flex-wrap justify-center gap-2">
              {guessedLetters.length === 0 ? (
                <span className="text-gray-400">None yet</span>
              ) : (
                guessedLetters.map((letter, index) => {
                  const isCorrect = word.toUpperCase().includes(letter);
                  return (
                    <Badge 
                      key={index}
                      variant={isCorrect ? "default" : "destructive"}
                      className="text-sm"
                    >
                      {letter}
                    </Badge>
                  );
                })
              )}
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}