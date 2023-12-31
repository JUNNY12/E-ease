const books = [
    {
        "id": 1,
        "name": "Introduction to Algorithms",
        "author": "Thomas H. Cormen, Charles E. Leiserson, Ronald L. Rivest, Clifford Stein",
        "publication": "MIT Press",
        "price": 49.99,
        "category": "Programming",
        "description": "A comprehensive textbook on algorithms and data structures."
    },
    {
        "id": 2,
        "name": "Good to Great: Why Some Companies Make the Leap and Others Don't",
        "author": "Jim Collins",
        "publication": "HarperBusiness",
        "price": 24.95,
        "category": "Business",
        "description": "Examines why some companies transition from good to great."
    },
    {
        "id": 3,
        "name": "Influence: The Psychology of Persuasion",
        "author": "Robert B. Cialdini",
        "publication": "HarperCollins",
        "price": 15.99,
        "category": "Marketing",
        "description": "Explores the psychology behind why people say 'yes' and how to apply these understandings."
    },
    {
        "id": 4,
        "name": "Cosmos",
        "author": "Carl Sagan",
        "publication": "Random House",
        "price": 12.50,
        "category": "Science",
        "description": "A journey through space and time, exploring the universe's mysteries."
    },
    {
        "id": 5,
        "name": "1984",
        "author": "George Orwell",
        "publication": "Harcourt Brace & Co.",
        "price": 9.99,
        "category": "Literature",
        "description": "A dystopian novel depicting a totalitarian society."
    },
    {
        "id": 6,
        "name": "The Catcher in the Rye",
        "author": "J.D. Salinger",
        "publication": "Little, Brown and Company",
        "price": 14.95,
        "category": "Literature",
        "description": "Follows the experiences of a teenager in New York City."
    },
    {
        "id": 7,
        "name": "Digital Marketing for Dummies",
        "author": "Ryan Deiss, Russ Henneberry",
        "publication": "For Dummies",
        "price": 19.99,
        "category": "Marketing",
        "description": "An introductory guide to digital marketing strategies."
    },
    {
        "id": 8,
        "name": "Sapiens: A Brief History of Humankind",
        "author": "Yuval Noah Harari",
        "publication": "HarperCollins",
        "price": 16.99,
        "category": "History",
        "description": "Traces the history of Homo sapiens from ancient times to the present."
    },
    {
        "id": 9,
        "name": "To Kill a Mockingbird",
        "author": "Harper Lee",
        "publication": "J. B. Lippincott & Co.",
        "price": 11.25,
        "category": "Literature",
        "description": "A classic novel addressing racial injustice and moral growth."
    },
    {
        "id": 10,
        "name": "Deep Work: Rules for Focused Success in a Distracted World",
        "author": "Cal Newport",
        "publication": "Grand Central Publishing",
        "price": 22.00,
        "category": "Business",
        "description": "Provides strategies to cultivate deep, meaningful work."
    },
    {
        "id": 11,
        "name": "The Art of War",
        "author": "Sun Tzu",
        "publication": "Various",
        "price": 8.99,
        "category": "Business",
        "description": "An ancient Chinese military treatise on strategy and tactics."
    },
    {
        "id": 12,
        "name": "The Martian",
        "author": "Andy Weir",
        "publication": "Crown",
        "price": 10.75,
        "category": "Science",
        "description": "A sci-fi novel about an astronaut stranded on Mars."
    },
    {
        "id": 13,
        "name": "The Great Gatsby",
        "author": "F. Scott Fitzgerald",
        "publication": "Charles Scribner's Sons",
        "price": 9.95,
        "category": "Literature",
        "description": "An exploration of the American Dream in the Jazz Age."
    },
    {
        "id": 14,
        "name": "The Lean Startup",
        "author": "Eric Ries",
        "publication": "Crown Business",
        "price": 21.50,
        "category": "Business",
        "description": "Proposes a scientific approach to creating and managing startups."
    },
    {
        "id": 15,
        "name": "A Brief History of Time",
        "author": "Stephen Hawking",
        "publication": "Bantam Books",
        "price": 13.99,
        "category": "Science",
        "description": "Explores the nature of time, the universe, and our place in them."
    },
    {
        "id": 16,
        "name": "The Da Vinci Code",
        "author": "Dan Brown",
        "publication": "Doubleday",
        "price": 16.25,
        "category": "Fiction",
        "description": "A mystery thriller centered around the works of Leonardo da Vinci."
    },
    {
        "id": 17,
        "name": "Becoming",
        "author": "Michelle Obama",
        "publication": "Crown Publishing Group",
        "price": 19.95,
        "category": "Non-fiction",
        "description": "Memoir of the former First Lady of the United States."
    },
    {
        "id": 18,
        "name": "The War of Art",
        "author": "Steven Pressfield",
        "publication": "Black Irish Entertainment",
        "price": 11.99,
        "category": "Non-fiction",
        "description": "A guide to overcoming creative resistance and achieving goals."
    },
    {
        "id": 19,
        "name": "The Innovator's Dilemma",
        "author": "Clayton Christensen",
        "publication": "Harvard Business Review Press",
        "price": 18.50,
        "category": "Business",
        "description": "Explores the challenges that successful companies face in disruptive innovation."
    },
    {
        "id": 20,
        "name": "The Hitchhiker's Guide to the Galaxy",
        "author": "Douglas Adams",
        "publication": "Pan Books",
        "price": 9.50,
        "category": "Science",
        "description": "A humorous sci-fi series that follows the misadventures of an unwitting space traveler."
    },
    {
        "id": 21,
        "name": "The Joy of Cooking",
        "author": "Irma S. Rombauer",
        "publication": "Bobbs-Merrill",
        "price": 26.00,
        "category": "Cooking",
        "description": "A classic cookbook with a wide range of recipes and culinary advice."
    },
    {
        "id": 22,
        "name": "Mindset: The New Psychology of Success",
        "author": "Carol S. Dweck",
        "publication": "Ballantine Books",
        "price": 14.99,
        "category": "Psychology",
        "description": "Explores the concept of growth mindset and its impact on success."
    },
    {
        "id": 23,
        "name": "The Art of Happiness",
        "author": "Dalai Lama, Howard Cutler",
        "publication": "Riverhead Books",
        "price": 12.75,
        "category": "Health",
        "description": "Offers insights into achieving a happier and more fulfilled life."
    },
    {
        "id": 24,
        "name": "The Sun Also Rises",
        "author": "Ernest Hemingway",
        "publication": "Scribner's",
        "price": 10.99,
        "category": "Literature",
        "description": "Follows a group of American and British expatriates in post-World War I Paris."
    },
    {
        "id": 25,
        "name": "The Lean Startup",
        "author": "Eric Ries",
        "publication": "Crown Business",
        "price": 21.50,
        "category": "Business",
        "description": "Proposes a scientific approach to creating and managing startups."
    },
    {
        "id": 26,
        "name": "The Power of Habit",
        "author": "Charles Duhigg",
        "publication": "Random House",
        "price": 16.00,
        "category": "Psychology",
        "description": "Explores the science behind why habits exist and how they can be changed."
    },
    {
        "id": 27,
        "name": "Thinking, Fast and Slow",
        "author": "Daniel Kahneman",
        "publication": "Farrar, Straus and Giroux",
        "price": 18.99,
        "category": "Psychology",
        "description": "Presents insights into the two systems that drive the way we think."
    },
    {
        "id": 28,
        "name": "The Fountainhead",
        "author": "Ayn Rand",
        "publication": "Bobbs-Merrill",
        "price": 14.25,
        "category": "Fiction",
        "description": "Explores individualism and integrity through the story of an innovative architect."
    },
    {
        "id": 29,
        "name": "Lord of the Flies",
        "author": "William Golding",
        "publication": "Faber and Faber",
        "price": 11.75,
        "category": "Literature",
        "description": "A tale of a group of British boys stranded on an uninhabited island."
    },
    {
        "id": 30,
        "name": "Born to Run",
        "author": "Christopher McDougall",
        "publication": "Knopf",
        "price": 13.50,
        "category": "Sports",
        "description": "Explores the world of ultra-distance running and the Tarahumara people."
    }
]

export default books;