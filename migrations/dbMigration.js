// migrations/dbMigration.js

const mongoose = require('mongoose');
const Movie = require('../app/models/Movie');
const Comment = require('../app/models/Comment');

const DB_URI = 'mongodb://localhost:27017/moviesApp';

async function migrateAndSeed() {
  try {
    // Connect to MongoDB
    await mongoose.connect(DB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
    });

    // Drop existing collections (if any)
    await mongoose.connection.dropCollection('movies');
    await mongoose.connection.dropCollection('comments');

    // Seed movies
    await Movie.create([
      { name: 'Movie 1', description: 'Description 1', runningTime: 120 },
      { name: 'Movie 2', description: 'Description 2', runningTime: 110 },
      // Add more movies as needed
    ]);

    // Seed comments
    await Comment.create([
      { movieId: '<movie_id_1>', text: 'Great movie!' },
      { movieId: '<movie_id_2>', text: 'Nice storyline.' },
      // Ensure to replace <movie_id_X> with actual movie IDs from the created movies
    ]);

    console.log('Database migration and seeding complete');
    process.exit(0);
  } catch (err) {
    console.error('Error during migration and seeding:', err);
    process.exit(1);
  }
}

migrateAndSeed();
