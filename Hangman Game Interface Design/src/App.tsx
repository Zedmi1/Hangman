import { useState, useEffect } from 'react';
import { StartScreen } from './components/StartScreen';
import { GameScreen } from './components/GameScreen';
import { EndScreen } from './components/EndScreen';

type GameState = 'start' | 'playing' | 'end';

// Sample words for the game (you can expand this list)
const WORDS = [
  'JAVASCRIPT',
  'PROGRAMMING',
  'COMPUTER',
  'HANGMAN',
  'DEVELOPER',
  'SOFTWARE',
  'CODING',
  'WEBSITE',
  'FUNCTION',
  'VARIABLE'
];

export default function App() {
  const [gameState, setGameState] = useState<GameState>('start');
  const [currentWord, setCurrentWord] = useState('');
  const [guessedLetters, setGuessedLetters] = useState<string[]>([]);
  const [livesLeft, setLivesLeft] = useState(6);

  // Initialize a new game
  const startNewGame = () => {
    const randomWord = WORDS[Math.floor(Math.random() * WORDS.length)];
    setCurrentWord(randomWord);
    setGuessedLetters([]);
    setLivesLeft(6);
    setGameState('playing');
  };

  // Handle letter guess
  const handleGuessLetter = (letter: string) => {
    if (guessedLetters.includes(letter)) return;
    
    const newGuessedLetters = [...guessedLetters, letter];
    setGuessedLetters(newGuessedLetters);
    
    // Check if letter is not in the word
    if (!currentWord.includes(letter)) {
      setLivesLeft(livesLeft - 1);
    }
  };

  // Create display word with guessed letters
  const getDisplayWord = () => {
    return currentWord
      .split('')
      .map(letter => guessedLetters.includes(letter) ? letter : '_')
      .join(' ');
  };

  // Check win condition
  const checkWin = () => {
    return currentWord.split('').every(letter => guessedLetters.includes(letter));
  };

  // Check lose condition
  const checkLose = () => {
    return livesLeft <= 0;
  };

  // Handle game end
  useEffect(() => {
    if (gameState === 'playing') {
      if (checkWin() || checkLose()) {
        setGameState('end');
      }
    }
  }, [guessedLetters, livesLeft, gameState]);

  // Restart game
  const handleRestart = () => {
    setGameState('start');
  };

  // Render current screen
  switch (gameState) {
    case 'start':
      return <StartScreen onStartGame={startNewGame} />;
      
    case 'playing':
      return (
        <GameScreen
          word={currentWord}
          guessedLetters={guessedLetters}
          livesLeft={livesLeft}
          onGuessLetter={handleGuessLetter}
          displayWord={getDisplayWord()}
        />
      );
      
    case 'end':
      return (
        <EndScreen
          isWin={checkWin()}
          word={currentWord}
          onRestart={handleRestart}
        />
      );
      
    default:
      return <StartScreen onStartGame={startNewGame} />;
  }
}