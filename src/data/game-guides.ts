export interface GameGuide {
  howToPlay: string[];
  controls: string[];
  tips: string[];
  faq: { question: string; answer: string }[];
}

const defaultGuide: GameGuide = {
  howToPlay: [
    'Start the game and learn the main pattern during the first few moves.',
    'Watch the score, timer, or board state before making risky plays.',
    'Replay to improve your timing and beat your previous best result.',
  ],
  controls: [
    'Use the mouse, keyboard, or touch controls shown inside the game.',
    'On mobile, tap the game area once if it needs focus before playing.',
  ],
  tips: [
    'Play one short round first to understand the rhythm.',
    'Keep your attention on the next move instead of chasing every point.',
  ],
  faq: [
    { question: 'Can I play for free?', answer: 'Yes. The game runs in your browser with no download required.' },
    { question: 'Does it work on mobile?', answer: 'Most games work on modern mobile browsers. Rotate your device if the play area feels tight.' },
  ],
};

const guides: Record<string, GameGuide> = {
  '2048': {
    howToPlay: [
      'Slide all numbered tiles in one direction to merge matching values.',
      'Create larger numbers by combining pairs until you reach 2048.',
      'Keep space open so the board does not fill before your next merge.',
    ],
    controls: ['Use arrow keys or swipe gestures to move every tile.', 'Tap or click the game area first if keyboard input is not active.'],
    tips: ['Keep your largest tile in a corner.', 'Build rows in one direction and avoid scattering high-value tiles.'],
    faq: [
      { question: 'What is the goal of 2048?', answer: 'Merge tiles until one tile reaches 2048. You can keep playing after that to chase a higher score.' },
      { question: 'Is there a best strategy?', answer: 'A stable corner strategy gives you the most control over future merges.' },
    ],
  },
  'snake-game': {
    howToPlay: ['Guide the snake toward food to grow longer.', 'Avoid walls and your own tail as the snake speeds up.', 'Try to keep open routes for turns after each bite.'],
    controls: ['Use arrow keys or swipe to change direction.', 'The snake keeps moving until you turn.'],
    tips: ['Do not cut across the board unless you have an exit.', 'Circle around open space when the snake gets long.'],
    faq: [
      { question: 'Why did the game end?', answer: 'The round ends when the snake hits a wall or runs into itself.' },
      { question: 'Can I pause?', answer: 'Use the pause control inside the game if it is available.' },
    ],
  },
  'wordle': {
    howToPlay: ['Guess the hidden word in six tries.', 'Use the color feedback after each guess to narrow the answer.', 'Reuse confirmed letters and avoid letters that were ruled out.'],
    controls: ['Type with your keyboard or tap the on-screen letters.', 'Press Enter to submit a complete word.'],
    tips: ['Open with a word that has common vowels and consonants.', 'Pay attention to repeated letters near the end of the puzzle.'],
    faq: [
      { question: 'How many guesses do I get?', answer: 'You get six attempts to find the hidden word.' },
      { question: 'Do colors matter?', answer: 'Yes. They tell you whether a letter is correct, misplaced, or not in the word.' },
    ],
  },
};

export function getGameGuide(slug: string): GameGuide {
  return guides[slug] ?? defaultGuide;
}
