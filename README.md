<!-- Improved compatibility of back to top link: See: https://github.com/othneildrew/Best-README-Template/pull/73 -->
<a name="readme-top"></a>

<div align="center">

  <a href="">[![MIT License][license-shield]][license-url]</a>

</div>

<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/othneildrew/Best-README-Template">
    <img src="https://img.freepik.com/premium-photo/global-world-network-telecommunication-earth-technology-internet-businesselements-this-image-furnished-by-nasa_1029473-168133.jpg" alt="Logo" width="100" height="100">
  </a>

  <h3 align="center">Astral</h3>

  <p align="center">
Intergalactic Trade Network
    <br />
    <br />
    <br />
 

  </p>
</div>


<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>

  
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li><a href="#getting-started">Getting Started</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
  </ol>
</details>


<!-- ABOUT THE PROJECT -->
## About The Project



Astral is a robust system designed to support an intergalactic trading network, specifically engineered to manage trade transactions, space cargo, and space station inventory.

* Trade Transactions: Facilitate and manage trade activities between different space entities, ensuring secure and accurate transaction processing.
* Space Cargo Management: Track and manage cargo shipments across the galaxy, providing real-time status updates and handling logistics efficiently.
* Inventory Tracking: Maintain and monitor inventory levels at various space stations, ensuring accurate stock levels and availability.
* Real-Time Updates: Deliver instant updates on trade activities, cargo movements, and inventory changes to keep all network participants informed.


It is Capable of processing large volumes of data seamlessly, ensuring smooth operation even during peak times.


### Built With

The webservice was built with mainly the following Frameworks/Libraries at the core of it keeping it alive

* [![Node.js](https://img.shields.io/badge/node.js-%2343853D.svg?style=for-the-badge&logo=node.js&logoColor=white)](https://nodejs.org/)
* [![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge)](https://expressjs.com/)
* [![MongoDB](https://img.shields.io/badge/mongodb-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white)](https://www.mongodb.com/)
* [![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)](https://devdocs.io/javascript/)


<p align="right">(<a href="#readme-top">back to top</a>)</p>


<!-- GETTING STARTED -->
## Getting Started

This is an example of how you may give instructions on setting up your project locally.
To get a local copy up and running follow these simple example steps.

<h2> Prerequisites</h2>

1. Node.Js
2. Package manager of your choice (mpn, yarn etc.)
3. MongoDB
4. socket.io
5. Javascript

<h2> Installation </h2>

1. Clone the repo
   ```sh
   git clone https://github.com/your_username_/Project-Name.git
   ```
2. Navigate to the project directory
   ```sh
   cd <directory name>
3. Install the dependencies
   ```sh
   npm install
   ```
4. Create a .env file in the root directory and add the following environment variables. 
   ```py
    MONGO_URI=mongodb://localhost:27017/your_database_name
    REDIS_URI=redis://localhost:6379
    JWT_SECRET=your_secret_key
   ```
5. Start the server
   ```py
   npm run dev (in dev)
   npm start (prod)
   ```
   
6. The server should now be running on your locahost port.

7. You can now test the API using Postman or any other API testing tool.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- CONTRIBUTING -->
## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Follow the <a href="#getting-started">Getting Started</a> guide
3. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
4. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
5. Push to the Branch (`git push origin feature/AmazingFeature`)
6. Open a Pull Request

<p align="right">(<a href="#readme-top">back to top</a>)</p>


<!-- LICENSE -->
## License

Distributed under the MIT License. See `LICENSE.txt` for more information.

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[license-shield]: https://img.shields.io/github/license/othneildrew/Best-README-Template.svg?style=for-the-badge
[license-url]: LICENSE.txt
