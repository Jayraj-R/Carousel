# 3d Carousel

[Online Demo](https://jayraj-r.github.io/Carousel/)

A react. js-based 3d responsive carousel with control buttons and unique design. The product uses classic CSS along with JSX to globally stylize the component which can be easily customizable. The carousel offers a 3-D slider carousel with navigation buttons for the user alongside embedded hover animations.

## Set Up

Enter the following commands in the command prompt to download and run the project in your local device.

- `git clone https://github.com/Jayraj-R/Carousel.git`
- `cd Carousel`
- `npm install`
- `npm start`

## Folder Structure

Here is a folder list containing all the important files/folders in this project.

```
Carousel
│   README.md
│   package.json
│
└───public
│   index.html
│   robots.txt
│
└───src
│   │   App.js
│   │   App.css
│   │
│   └───Components
│          Slides
│              SlideWrapper
│              Slides
```

## Usage

To use this component in your personal project simply copy the `Carousel` folder inside of your `src/Components` folder and follow these steps :

- Import the carousel component using `import CarouselWrapper from './Components/CarouselWrapper'` or any other relative path according to your folder structure.
- Add `<CarouselWrapper slides={slides} initial={2} />` wherever you want to add the carousel component in your project.

### Props

| Prop name | desc                                                         | default        | Structure                                                                   | Example                                                                                                                                                                                                                                                                   |
| --------- | ------------------------------------------------------------ | -------------- | --------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| slides    | Array containing contents to be rendered inside the carousel | Empty Array [] | [ { index : number, headline : string, button : string, src : url-string }] | [ { index: 0, headline: 'Bollywood Dance', button: 'Know More', src : 'https://timesofindia.indiatimes.com/photo/62999793.cms' }, { index: 1, headline: 'Carnatic Singing', button: 'Know More', src : 'https://riyazapp.com/wp-content/uploads/2017/10/Carnatic.jpg' } ] |
| initial   | Initial carousel position                                    | 0              | number                                                                      | 2                                                                                                                                                                                                                                                                         |
