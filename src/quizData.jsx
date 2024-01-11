import { FaCss3, FaHtml5, FaReact } from "react-icons/fa";

export const quizData = [
  {
    id: 'html',
    subject: 'HTML',
    questionsList: [
      {
        id: 1,
        questionText: 'What does the abbreviation HTML stand for?',
        answers: [
          { id: 1, answerText: 'HyperText Markup Language' },
          { id: 2, answerText: 'HighText Markup Language' },
          { id: 3, answerText: 'HyperText Markdown Language' },
          { id: 4, answerText: 'None of the above' }
        ],
        correctAnswerId: 1
      },
      {
        id: 2,
        questionText: 'How many sizes of headers are available in HTML by default?',
        answers: [
          { id: 1, answerText: '5' },
          { id: 2, answerText: '1' },
          { id: 3, answerText: '3' },
          { id: 4, answerText: '6' }
        ],
        correctAnswerId: 4
      },
      {
        id: 3,
        questionText: 'What are the types of lists available in HTML?',
        answers: [
          { id: 1, answerText: 'Ordered, Unordered Lists' },
          { id: 2, answerText: 'Bulleted, Numbered Lists' },
          { id: 3, answerText: 'Named, Unnamed Lists' },
          { id: 4, answerText: 'None of the above' }
        ],
        correctAnswerId: 1
      },
      {
        id: 4,
        questionText: 'How to create an ordered list in HTML?',
        answers: [
          { id: 1, answerText: '<ul>' },
          { id: 2, answerText: '<ol>' },
          { id: 3, answerText: '<href>' },
          { id: 4, answerText: '<b>' }
        ],
        correctAnswerId: 2
      },
      {
        id: 5,
        questionText: 'Which attribute is used to provide a unique name to an HTML element?',
        answers: [
          { id: 1, answerText: 'id' },
          { id: 2, answerText: 'class' },
          { id: 3, answerText: 'type' },
          { id: 4, answerText: 'None of the above' }
        ],
        correctAnswerId: 1
      },
      {
        id: 6,
        questionText: 'What are the attributes used to change the size of an image?',
        answers: [
          { id: 1, answerText: 'Width and height' },
          { id: 2, answerText: 'Big and Small' },
          { id: 3, answerText: 'Top and bottom' },
          { id: 4, answerText: 'None of the above' }
        ],
        correctAnswerId: 1
      },
      {
        id: 7,
        questionText: 'What is the function of the HTML style attribute?',
        answers: [
          { id: 1, answerText: 'It is used to add styles to an HTML element.' },
          { id: 2, answerText: 'It is used to uniquely identify some specific styles of some element.' },
          { id: 3, answerText: 'Both A and B.' },
          { id: 4, answerText: 'None of the above.' }
        ],
        correctAnswerId: 3
      },
      {
        id: 8,
        questionText: 'What is the correct syntax to write an HTML comment?',
        answers: [
          { id: 1, answerText: '<!-- Comment -->' },
          { id: 2, answerText: '// Comment' },
          { id: 3, answerText: '# Comment' },
          { id: 4, answerText: '/* Comment */' }
        ],
        correctAnswerId: 1
      },
      {
        id: 9,
        questionText: 'Which HTML tag is called the root element of an HTML document?',
        answers: [
          { id: 1, answerText: '<html>' },
          { id: 2, answerText: '<body>' },
          { id: 3, answerText: '<title>' },
          { id: 4, answerText: '<head>' }
        ],
        correctAnswerId: 1
      },
      {
        id: 10,
        questionText: 'Which property allows an image link to show a text label?',
        answers: [
          { id: 1, answerText: 'alt' },
          { id: 2, answerText: 'str' },
          { id: 3, answerText: 'alternative' },
          { id: 4, answerText: 'None of the above' }
        ],
        correctAnswerId: 1
      }
    ]
  },
  {
    id: 'css',
    subject: 'CSS',
    questionsList: [
      {
        id: 1,
        questionText: 'What does CSS stand for?',
        answers: [
          { id: 1, answerText: 'Colorful Style Sheets' },
          { id: 2, answerText: 'Computer Style Sheets' },
          { id: 3, answerText: 'Cascading Style Sheets' },
          { id: 4, answerText: 'Creative Style Sheets' }
        ],
        correctAnswerId: 3
      },
      {
        id: 2,
        questionText: 'Which of the following tag is used to embed CSS in an HTML page?',
        answers: [
          { id: 1, answerText: '<css>' },
          { id: 2, answerText: '<!DOCTYPE html>' },
          { id: 3, answerText: '<script>' },
          { id: 4, answerText: '<style>' }
        ],
        correctAnswerId: 4
      },
      {
        id: 3,
        questionText: 'What CSS property makes text go bold?',
        answers: [
          { id: 1, answerText: 'font-size' },
          { id: 2, answerText: 'text-decoration' },
          { id: 3, answerText: 'bold' },
          { id: 4, answerText: 'font-weight' }
        ],
        correctAnswerId: 4
      },
      {
        id: 4,
        questionText: 'How can we select an element with a specific Class in CSS?',
        answers: [
          { id: 1, answerText: '#' },
          { id: 2, answerText: '.' },
          { id: 3, answerText: '^' },
          { id: 4, answerText: 'None of the above' }
        ],
        correctAnswerId: 2
      },
      {
        id: 5,
        questionText: 'The CSS property used to specify the transparency of an element is?',
        answers: [
          { id: 1, answerText: 'opacity' },
          { id: 2, answerText: 'visibility' },
          { id: 3, answerText: 'filter' },
          { id: 4, answerText: 'None of the above' }
        ],
        correctAnswerId: 1
      },
      {
        id: 6,
        questionText: 'How can we specify the spacing between each letter in a text in CSS?',
        answers: [
          { id: 1, answerText: 'alpha-spacing' },
          { id: 2, answerText: 'letter-spacing' },
          { id: 3, answerText: 'character-spacing' },
          { id: 4, answerText: 'None of the above' }
        ],
        correctAnswerId: 2
      },
      {
        id: 7,
        questionText: 'Which of the following are valid ways to represent a color in CSS?',
        answers: [
          { id: 1, answerText: 'A valid color name' },
          { id: 2, answerText: 'RGB values' },
          { id: 3, answerText: 'HEX values' },
          { id: 4, answerText: 'All of the above' }
        ],
        correctAnswerId: 4
      },
      {
        id: 8,
        questionText: 'We can make rounded borders around elements using which CSS element?',
        answers: [
          { id: 1, answerText: 'border-collapse' },
          { id: 2, answerText: 'border-round' },
          { id: 3, answerText: 'border-radius' },
          { id: 4, answerText: 'None of the above' }
        ],
        correctAnswerId: 3
      },
      {
        id: 9,
        questionText: 'What does the inherit value for a property do?',
        answers: [
          { id: 1, answerText: 'Inherits the value of the parent element.' },
          { id: 2, answerText: 'Invalid property name.' },
          { id: 3, answerText: 'Changes the value of the parent element\'s property.' },
          { id: 4, answerText: 'None of the above' }
        ],
        correctAnswerId: 1
      },
      {
        id: 10,
        questionText: 'Which of the following are parts of the CSS box model?',
        answers: [
          { id: 1, answerText: 'Margins' },
          { id: 2, answerText: 'Borders' },
          { id: 3, answerText: 'Padding' },
          { id: 4, answerText: 'All of the above' }
        ],
        correctAnswerId: 4
      }
    ]
  },
  {
    id: 'react',
    subject: 'React',
    questionsList: [
      {
        id: 1,
        questionText: 'Which of the following is used in React to increase performance?',
        answers: [
          { id: 1, answerText: 'Virtual DOM' },
          { id: 2, answerText: 'Original DOM' },
          { id: 3, answerText: 'Both A and B' },
          { id: 4, answerText: 'None of the above' }
        ],
        correctAnswerId: 1
      },
      {
        id: 2,
        questionText: 'Identify the one which is used to pass data to components from outside',
        answers: [
          { id: 1, answerText: 'Render with arguments' },
          { id: 2, answerText: 'setState' },
          { id: 3, answerText: 'PropTypes' },
          { id: 4, answerText: 'props' }
        ],
        correctAnswerId: 4
      },
      {
        id: 3,
        questionText: 'A state in React is also known as?',
        answers: [
          { id: 1, answerText: 'The internal storage of the component' },
          { id: 2, answerText: 'External storage of the component' },
          { id: 3, answerText: 'Permanent storage' },
          { id: 4, answerText: 'All of the above' }
        ],
        correctAnswerId: 1
      },
      {
        id: 4,
        questionText: 'JSX stands for __________?',
        answers: [
          { id: 1, answerText: 'Javascript XML' },
          { id: 2, answerText: 'JSON XML' },
          { id: 3, answerText: 'JSON' },
          { id: 4, answerText: 'Javascript and AngularJS' }
        ],
        correctAnswerId: 1
      },
      {
        id: 5,
        questionText: 'In react, the key should be?',
        answers: [
          { id: 1, answerText: 'Unique among his siblings only' },
          { id: 2, answerText: 'unique in the DOM' },
          { id: 3, answerText: 'Does not require to be unique' },
          { id: 4, answerText: 'All of the above' }
        ],
        correctAnswerId: 1
      },
      {
        id: 6,
        questionText: 'Why is ref used?',
        answers: [
          { id: 1, answerText: 'to bind the function' },
          { id: 2, answerText: 'to call a function' },
          { id: 3, answerText: 'to directly access the DOM node' },
          { id: 4, answerText: 'to refer to another JS file' }
        ],
        correctAnswerId: 3
      },
      {
        id: 7,
        questionText: 'User interface developed with React is made of small and isolated pieces of code called ___',
        answers: [
          { id: 1, answerText: 'Hook' },
          { id: 2, answerText: 'Component' },
          { id: 3, answerText: 'Function' },
          { id: 4, answerText: 'Snippet' }
        ],
        correctAnswerId: 2
      },
      {
        id: 8,
        questionText: 'What is the correct command to create a new React project?',
        answers: [
          { id: 1, answerText: 'npm create-react-app myReactApp' },
          { id: 2, answerText: 'npm create-react-app' },
          { id: 3, answerText: 'npx create-react-app' },
          { id: 4, answerText: 'npx create-react-app myReactApp' }
        ],
        correctAnswerId: 4
      },
      {
        id: 9,
        questionText: 'What is the correct syntax to import a Component from React?',
        answers: [
          { id: 1, answerText: 'import { Component } from "react"' },
          { id: 2, answerText: 'import [ Component ] from "react"' },
          { id: 3, answerText: 'import Component from "react"' },
          { id: 4, answerText: 'import React.Component from "react"' }
        ],
        correctAnswerId: 1
      },
      {
        id: 10,
        questionText: 'React separates the user interface into components. How are components combined to create a user interface?',
        answers: [
          { id: 1, answerText: 'By nesting components' },
          { id: 2, answerText: 'With code splitting' },
          { id: 3, answerText: 'With webpack' },
          { id: 4, answerText: 'By putting them in a folder structure' }
        ],
        correctAnswerId: 1
      }
    ]
  }
];

export const quizSubjectsData = [
  {
    id: 'html',
    icon: (color) => <FaHtml5 color={color}/>,
    text: 'HTML',
    color: '#eab89c',
    bgColor: '#fff0e8'
  },
  {
    id: 'css',
    icon: (color) => <FaCss3 color={color}/>,
    text: 'CSS',
    color: '#3fd38d',
    bgColor: '#e2fdee'
  },
  {
    id: 'react',
    icon: (color) => <FaReact color={color}/>,
    text: 'REACT',
    color: '#507be6',
    bgColor: '#eaf0fe'
  },
];

