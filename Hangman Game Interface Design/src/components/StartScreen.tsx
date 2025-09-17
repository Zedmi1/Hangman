import { Button } from "./ui/button";
import { Card } from "./ui/card";

interface StartScreenProps {
  onStartGame: () => void;
}

export function StartScreen({ onStartGame }: StartScreenProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 flex items-center justify-center p-4">
      <Card className="max-w-md w-full p-8 text-center shadow-lg">
        <div className="space-y-6">
          {/* Game Title */}
          <div className="space-y-2">
            <h1 className="text-4xl font-bold text-gray-800">HANGMAN</h1>
            <p className="text-gray-600">Guess the word before it's too late!</p>
          </div>

          {/* Start Button */}
          <Button 
            onClick={onStartGame}
            className="w-full h-12 text-lg bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600"
          >
            Start Game
          </Button>

          {/* How to Play Section */}
          <div className="bg-gray-50 rounded-lg p-4 text-left">
            <h3 className="mb-3 text-center text-gray-700">How to Play</h3>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>• A hidden word will be shown as underscores</li>
              <li>• Guess letters one at a time</li>
              <li>• You have 6 lives to guess correctly</li>
              <li>• Win by guessing all letters!</li>
            </ul>
          </div>
        </div>
      </Card>
    </div>
  );
}