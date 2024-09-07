const mongoose = require('mongoose');
const SpaceStation = require('./models/spaceStationModel'); // Adjust the path as needed
const Goods = require('./models/goodsModel'); // Adjust the path as needed

// Replace with your MongoDB connection string
const dbURI = 'mongodb://localhost:27017/astrus';

// Connect to MongoDB
mongoose.connect(dbURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const createSampleData = async () => {
  try {
    // Create sample space stations
    const station1 = new SpaceStation({
      name: 'Station Alpha',
      location: 'Alpha Quadrant',
      status: 'active',
    });

    const station2 = new SpaceStation({
      name: 'Station Beta',
      location: 'Beta Quadrant',
      status: 'active',
    });

    // Create sample goods
    const goods1 = new Goods({
        name: 'Goods Item 1',
        description: 'Description for goods item 1',
        price: 100,
        category: 'Category1', // Add the category field here
      });
      

    // Save sample data
    await station1.save();
    await station2.save();
    await goods1.save();

    console.log('Sample data created successfully.');
  } catch (error) {
    console.error('Error creating sample data:', error);
  } finally {
    mongoose.disconnect();
  }
};

createSampleData();
