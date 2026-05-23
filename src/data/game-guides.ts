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
  'minesweeper': {
    howToPlay: ['Reveal tiles without hitting hidden mines.', 'Numbers show how many mines touch that tile.', 'Flag suspected mines and clear every safe square to win.'],
    controls: ['Click or tap a tile to reveal it.', 'Right-click or long-press a tile to place a flag.'],
    tips: ['Start from open areas and use number patterns to remove guesses.', 'When a number already has enough flagged neighbors, reveal the other adjacent tiles.'],
    faq: [
      { question: 'What do the numbers mean?', answer: 'Each number shows how many mines are in the eight surrounding tiles.' },
      { question: 'How do I win?', answer: 'Reveal every safe tile without opening a mine.' },
    ],
  },
  'connect-four': {
    howToPlay: ['Drop a disc into any column.', 'Discs fall to the lowest empty slot.', 'Connect four of your color horizontally, vertically, or diagonally.'],
    controls: ['Click or tap a column to drop your disc.', 'Use Reset to start a fresh match.'],
    tips: ['Control the center columns early.', 'Block three-in-a-row threats before building your own attack.'],
    faq: [
      { question: 'Can two people play?', answer: 'Yes. Players take turns on the same device.' },
      { question: 'What happens on a full board?', answer: 'If nobody connects four before the board fills, the game ends in a draw.' },
    ],
  },
  'simon-says': {
    howToPlay: ['Press Start and watch the color sequence.', 'Repeat the colors in the same order.', 'Each level adds one more color to remember.'],
    controls: ['Click or tap the colored pads.', 'Press Start again to begin a new streak.'],
    tips: ['Say the colors in your head as they flash.', 'Group long patterns into pairs to remember them more easily.'],
    faq: [
      { question: 'What ends the game?', answer: 'The round ends when you press a color that does not match the sequence.' },
      { question: 'Does the sequence get harder?', answer: 'Yes. One new color is added after each successful level.' },
    ],
  },
  'sliding-puzzle': {
    howToPlay: ['Move tiles into the empty space.', 'Arrange the board from 1 to 15 with the blank space last.', 'Try to solve it in as few moves as possible.'],
    controls: ['Click or tap a tile next to the empty space.', 'Use Shuffle to create a new puzzle.'],
    tips: ['Solve the top rows first, then work downward.', 'Keep the last two rows flexible until the final sequence.'],
    faq: [
      { question: 'Is every shuffle solvable?', answer: 'Yes. The puzzle is shuffled by making valid moves from a solved board.' },
      { question: 'What is the goal?', answer: 'Put the tiles in numerical order with the empty space in the bottom-right corner.' },
    ],
  },
  'reaction-dash': {
    howToPlay: ['Start the timer and hit green targets as quickly as possible.', 'Avoid red decoys because they reduce your score.', 'Score as many clean hits as you can before time runs out.'],
    controls: ['Click or tap green targets.', 'Press Start to restart the 30-second challenge.'],
    tips: ['Keep your pointer near the center of the play area.', 'Slow down for a split second when red decoys appear.'],
    faq: [
      { question: 'How long is a round?', answer: 'Each round lasts 30 seconds.' },
      { question: 'Do red targets count?', answer: 'Red decoys subtract points, so avoid tapping them.' },
    ],
  },
};

export function getGameGuide(slug: string): GameGuide {
  return guides[slug] ?? defaultGuide;
}
