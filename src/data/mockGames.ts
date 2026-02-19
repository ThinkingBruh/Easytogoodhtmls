
/*
 * HOW TO ADD YOUR OWN HTML GAMES:
 * 
 * 1. Place your game folders or HTML files in the 'public' folder of your project.
 *    Example: /public/games/pixel-gunner/index.html
 * 
 * 2. In the 'gameUrl' field below, use the path relative to the public folder.
 *    Example: gameUrl: '/games/pixel-gunner/index.html'
 * 
 * 3. The game will be loaded in an iframe within the modal when played.
 */

export type Category = 
  | 'All' 
  | 'FPS' 
  | 'Horror' 
  | '.IO' 
  | 'Mobile' 
  | 'Puzzle' 
  | 'Platformer' 
  | 'Rhythm' 
  | 'RPG' 
  | 'Sandbox' 
  | 'Simulation' 
  | 'Sports' 
  | 'Strategy'
  | 'Action'
  | 'Racing';

export interface Game {
  id: string;
  title: string;
  description: string;
  category: Category;
  imageUrl: string;
  // This is where you link your HTML file. e.g. "/games/my-game/index.html"
  gameUrl: string; 
  featured?: boolean;
}

export const mockGames: Game[] = [
  {
    id: '1',
    title: 'Pixel Gunner',
    description: 'Fast-paced first person shooter action.',
    category: 'FPS',
    imageUrl: 'https://images.unsplash.com/photo-1657885562205-8176b1ba7184?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaXJzdCUyMHBlcnNvbiUyMHNob290ZXIlMjBnYW1lJTIwc2NyZWVuc2hvdHxlbnwxfHx8fDE3NzE0ODM2NDB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    gameUrl: '', // PLACEHOLDER: Replace with '/games/pixel-gunner.html'
  },
  {
    id: '2',
    title: 'Midnight Manor',
    description: 'Survive the night in this creepy horror adventure.',
    category: 'Horror',
    imageUrl: 'https://images.unsplash.com/photo-1634645313677-6f18e28903f6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzY2FyeSUyMGhvcnJvciUyMGdhbWUlMjBhdG1vc3BoZXJlfGVufDF8fHx8MTc3MTQ4MzY0MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    gameUrl: '', // PLACEHOLDER
  },
  {
    id: '3',
    title: 'Agar.clone',
    description: 'Eat cells and grow bigger in this multiplayer arena.',
    category: '.IO',
    imageUrl: 'https://images.unsplash.com/photo-1753736814524-2f1b065f2521?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbyUyMGdhbWUlMjBtdWx0aXBsYXllciUyMGFyZW5hJTIwdG9wJTIwZG93bnxlbnwxfHx8fDE3NzE0ODM2NDF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    gameUrl: '', // PLACEHOLDER
  },
  {
    id: '4',
    title: 'Fruit Slash Mobile',
    description: 'Swipe to cut fruit in this mobile classic.',
    category: 'Mobile',
    imageUrl: 'https://images.unsplash.com/photo-1744974086567-b0492d796805?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBnYW1lJTIwdWklMjBicmlnaHR8ZW58MXx8fHwxNzcxNDgzNjQxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    gameUrl: '', // PLACEHOLDER
  },
  {
    id: '5',
    title: 'Neon Beats',
    description: 'Hit the notes to the rhythm of the music.',
    category: 'Rhythm',
    imageUrl: 'https://images.unsplash.com/photo-1627645835237-0743e52b991f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyaHl0aG0lMjBtdXNpYyUyMGdhbWUlMjBuZW9ufGVufDF8fHx8MTc3MTQ4MzY0MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    gameUrl: '', // PLACEHOLDER
  },
  {
    id: '6',
    title: 'Dragon Quest RPG',
    description: 'Embark on an epic quest to save the kingdom.',
    category: 'RPG',
    imageUrl: 'https://images.unsplash.com/photo-1759688168277-185a0c623968?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYW50YXN5JTIwcnBnJTIwZ2FtZSUyMGNoYXJhY3RlcnxlbnwxfHx8fDE3NzE0ODM2NDF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    gameUrl: '', // PLACEHOLDER
  },
  {
    id: '7',
    title: 'Block World',
    description: 'Build anything you can imagine with blocks.',
    category: 'Sandbox',
    imageUrl: 'https://images.unsplash.com/photo-1759663174316-24e737d47d9e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzYW5kYm94JTIwYnVpbGRpbmclMjBnYW1lJTIwYmxvY2t5fGVufDF8fHx8MTc3MTQ4MzY0MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    gameUrl: '', // PLACEHOLDER
  },
  {
    id: '8',
    title: 'City Tycoon',
    description: 'Manage your own city and keep citizens happy.',
    category: 'Simulation',
    imageUrl: 'https://images.unsplash.com/photo-1750088292550-5893193a7def?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzaW11bGF0aW9uJTIwZ2FtZSUyMGNpdHklMjBidWlsZGVyfGVufDF8fHx8MTc3MTQ4MzY0MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    gameUrl: '', // PLACEHOLDER
  },
  {
    id: '9',
    title: 'Super Striker',
    description: 'Score the winning goal in this sports simulation.',
    category: 'Sports',
    imageUrl: 'https://images.unsplash.com/photo-1671368913134-c211bc02487f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzcG9ydHMlMjBnYW1lJTIwc29jY2VyJTIwYmFza2V0YmFsbHxlbnwxfHx8fDE3NzE0ODM2NDF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    gameUrl: '', // PLACEHOLDER
  },
  {
    id: '10',
    title: 'Tower Defense X',
    description: 'Strategic tower placement is key to survival.',
    category: 'Strategy',
    imageUrl: 'https://images.unsplash.com/photo-1642056447310-b2163a0218b8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzaW1wbGUlMjBzdHJhdGVneSUyMGdhbWUlMjBtYXB8ZW58MXx8fHwxNzcxNDgzMTQ1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    gameUrl: '', // PLACEHOLDER
  },
   {
    id: '11',
    title: 'Jungle Jump',
    description: 'Jump across platforms and avoid obstacles.',
    category: 'Platformer',
    imageUrl: 'https://images.unsplash.com/photo-1723679557659-0cbee06d092c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZXRybyUyMHBsYXRmb3JtZXIlMjBnYW1lJTIwbGFuZHNjYXBlfGVufDF8fHx8MTc3MTQ4MzE0NXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    gameUrl: '', // PLACEHOLDER
  },
  {
    id: '12',
    title: 'Gem Matcher',
    description: 'Classic puzzle fun for everyone.',
    category: 'Puzzle',
    imageUrl: 'https://images.unsplash.com/photo-1654220669982-e918d98f8561?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2xvcmZ1bCUyMHB1enpsZSUyMGdhbWUlMjBibG9ja3N8ZW58MXx8fHwxNzcxNDgzMTQ1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    gameUrl: '', // PLACEHOLDER
  },
];
