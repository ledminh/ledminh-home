import {
  PROFILE_NOW,
  PROFILE_THEN
} from 'containers/HomePage/constants';

export const about_me = {
  [PROFILE_NOW] : {
    summary: `As a full Stack Web Developer who bases in the Bay Area and recently graduated
              with an Associate Degree in Computer Science from De Anza College, I have been
              building more than 20 small-to-intermediate-size projects with jQuery, React,
              D3, mongoDB, Express and SCSS for almost 2 years. \\br

              I’m looking for a job that I am passionate about and will help me improve my skills
              on programming, communication and teamwork. I’m also seeking for the
              opportunity to learn new skills for future use.`,

    skills : {
      'Languages and Skills': {
        JavaScript: `I started learning JavaScript in 2015 with freeCodeCamp. So far, I have built several
                    intermediate-size web apps using JavaScript, mostly with frameworks and libraries like
                    jQuery and React. I'm not quite strong in basic JavaScript but I know enough concepts to
                    get by, like closure, prototypal inheritant, functional programming, arrow function,compose,
                    and curry. The most important thing is I'm still learning and I know where to look for the
                    knowledge that I forget or don't know yet.`,
        'Node.js' : `I learned Node indirectly through setting up and installing dependencies for React projects
                    as well as using webpack for packing. I also built several simple API servers for my web apps
                    using Node. I read "Node.js in Action" and found many interesting ideas in the book but I haven't
                    had the change to practice them yet.`,
        HTML:  `I started learning HTML about the same time with learning JavaScript, which is in 2015. Since my
                main focus is JavaScript, I learned pretty well how to manipulate HTML elements, like body, div,
                span, p, br, h1, h2 etc., through JavaScript.`,
        CSS:    `Until now, I only know CSS enough to decorate my web apps in a basic sense. I know some basic
                CSS properties like height, width, position, margin, padding, opacity, z-index and the like.
                However, I still don't know throughfully about some tricky properties like transform, translate.
                I don't know much about either web lay-out design or color scheme. But I'm not a web designer after all.
                However, the more I work on web apps, the more I discover how much I can do with CSS to achieve my goal
                without JavaScript and as the result, the more I'm interested in CSS. I'm still learning and experimenting
                CSS.`
      },

      Database: {
        mongoDB: `MongoDB basically is a huge hashtable but it's so convienent because of its familiar json-like structure.
                  I haven't worked much with MongoDB, only in 3 or 4 apps that I built from front end to back end. However,
                  as a JavaScript developer, json is my friend. So I don't think mongoDB can make me feel uncomfortable.`
      },

      'Frameworks/Libraries': {
        React: `This is my favorite framework. The idea of combining HTML and JavaScript in one place is a huge innovative idea.
                Before React, I always felt that my apps were like a mess with HTML in this side and JavaScript in another side.
                Moreover, I come from a Object-Oriented Programming background. Before JavaScript, I had learned Java at school,
                a programming language in which everything is a class. Indeed, there's class in JavaScript but it's not technically
                the kind of class in Java. There is no private variable or private method. They are only something that we create
                'artificially' with closure. My code became more and more like spaghetti code as it grew and it made me uncomfortable.
                I couldn't arrange it into class like in Java. But then, React came and saved the day. Now I can organize
                my web apps nicely into class or component, just like the good old days with Java. Ever since, every web app I wrote is
                built upon on React framework.`,

        Redux: `Unfortunately, life is not as good as a dream. Even though React helps me tremendously in building web app, the more complex
                the app is, the more I see my code tangled with React's states that are wired altogether and all over the place. And then, I
                learned Redux. Suddenly, I felt like all of 'the wires' are tied together into a buddle, then placed and distributed neatly
                everywhere in the apps.`,

        Saga: `To be honest, saga is new to me. And the concepts of 'yield' and 'generator' are, to me, not only new. They're eye-openning. It
                looks like magic when you can code async functions and your code is still like sync function that and you can read it easily
                in the familiar top-to-bottom order. I know there is more to it, other than getting and sending data and I'm still experimenting it.`,

        D3: `I know D3 is used mainly for data visualization but I haven't used it much for its main purpose. So far, I only used it to draw two or
            three basic graphs to finish my freeCodeCamp program. Instead, I used it mostly for animation in most of my web apps because it's easy and
            it's convenient. But I know using a giant framework to only move a div from one place to another is ridiculous. That's why recently, I tried to
            use basic JavaScript for those tasks. I'll learn more about D3 and its capacity.`,

        jQuery: `So far, I only used jQuery for 6 or 7 months in total when following freeCodeCamp. And then, after learning React and
                falling in love with it, I abandoned jQuery altogether. I know it's not fair for jQuery. But I don't want to use two
                frameworks in one app. It's overkill. And moreover, I can't see what jQuery can do that React and basic JavaScript can not do.`,

        SCSS: `I had worked with SCSS for quite a long time and feel very comfortable with it. However, since the time I knew about
                styled-components, I have never came back to SCSS.`,

        'Express.js': `I have used Express to build the backend of several apps. They are not too big but only small API servers. My
                      experience with Express so far just involves search and apply. In other word, I search and then read enough to solve
                      the problem at hand. I haven't read or dig deeper into it.`
      },

      Others: {
        Java: `This is my favorite language, only after JavaScript, of course. It is because of Java, I think and code everything in class.
                However, I do not have work experience with Java. I learned Java in college and coded almost all the problems in the textbook (Introduction
                to Java programming by Daniel Lang). My first coding experience with GUI is with Java. It is because of Java that I appreciate the power of abstract, inheritant and libraries.
                JFrame from the swing library makes creating GUI very simple. Before that, the only language that I knew was C++ and I thought creating a
                window was something very complex and far beyond my knowledge. It was an eye openning experience to me.`,

        'C++': `Around 2014, I learned C++ in college. Two years before that, I'd already self-taught Python. But at the time I took C++, I totally forgot
                everything about Python as well as basic knowledge of programming. So, it's not wrong to say C++ is the first programming language that
                I know. And I'm glad about that. Through C++, I learned many fundamental concepts of programming, like variable, bit and byte manipulation,
                memory, stack and heap, recursion, pointer etc. I also took course in Data Structure using C++. My first experience with LinkedList, Set, BinaryTree,
                Map, Queue, Stack is with C++.`,

        Assembly: `Everyone I know agrees that Assembly is hard. But the funny thing is before taking Assembly course in college, I thought that it was the easiest language
                because there are not many structures in the core language to learn. Only after taking Assembly Language for X86 Processors, I realized how little that I knew.
                It is because there is not much in the core language that makes it so hard. Everything has to be built from scratch. Unfortunately, my experience with Assembly
                is only confined in the college course I took and in less than 10 programs that I built to finish the course. There's a man who coded for more than 20 years told
                me that I should study more about it as it would help me to understand the basic of programming. It would benefit me in a long term. I always promise myself I will
                come back to Assembly some time in the future. But I still do not have enough time for it.`
      }
    },

    experiences : {
      'student assistant' : {
        company: `Adapted Physical Education Department of De Anza College`,
        time: `from May 2014 to Dec 2016`,
        responsibilities: [
          `Works with individuals with disabilities conducting range of motion, resistance training, and cardiovascular training.`,
          `Provide stretching and massage to individuals with disabilities.`,
          `Giving instruction in how to use gym machines.`,
          `Assist individuals with disabilities when they use gym machines.`
        ]
      }
    },

    education : [
      {
        school: "de anza college",
        time: `from 01/2014 to 04/2017`,
        degrees: [
          `Associate's Degree on Computer Science`
        ]

      },

      {
        school: 'Free Code Camp',
        time: 'from 06/2015 to 12/2016',
        degrees : {
          'Certificate of Accomplishment of Front End Development': `https://www.freecodecamp.com/ledminh/front-end-certification`,
          'Certificate of Accomplishment of Data Visualization' : `https://www.freecodecamp.com/ledminh/data-visualization-certification`
        }

      }
    ]

  },
  [PROFILE_THEN] : {
    summary: `Back in VietNam, I was a radiologist. After graduate from medical school in 2007,
              I continued to study to get a certificate in abdomen ultrasonography and then have been working
              for 3 years as a radiologist in Nguyen Trai Hospital. But then, I felt my career would lead
              to nowhere if I continued. So, I quit my job and went to the U.S to follow my passion since
              I was a kid, which is computer science. \\br

              I'm also the founder and administrator of one of the first online medical forum in VietNam for
              seven years, from 2002 to 2009.`,

    skills: {
      Ultrasound: {
          Abdomen: `I have three years experience in performing abdominal ultrasound examination in Nguyen Trai
                    Hospital. It includes performing the exam on patients and giving image diagnosis on abdominal
                    diseases, like hepatitis, cirrhosis, pancreatitis, and especially appendicitis. My work also
                    includes detecting abdominal cancers in their early stages.`,

          Pelvic:  `Although I did not perform as much as abdominal ultrasound examination, I also have three years
                    experience in performing pelvic ultrasound examination in Nguyen Trai Hospital. I can give image
                    diagnosis on and detect gynecological diseases like cancer and pre-cancerous diseases of the female
                    reproductive organ, uterine fibroids, endometriosis, and adenomyosis.`,

          Pregnancy: `My speciality was not gyn/obs ultrasound but from time to time, there were still some pregnant women
                      came to my office for general checkup. Some of them even did not know that they were pregnant. So my main
                     responsibilities with pregnancy were to detect pregnancy and which trimester they are in, check whether the fetus
                     is healthy or not base on its heart rate, the condition of amniotic fluid and the uterus etc. `,

          Thyroid: `Many Vietnamese people have thyroid diseases, like hyperthyroidism, hypothyroidism, thyroid cancers, thyroditis, and
                    thyroid nodules. My job was helping clinical physicians to detect all of those diseases. Around a third of the patients
                    that came to my office was because of thyroid diseases.`,

          'Soft Tissue': `There is not much to say about my experience in soft tissue ultrasound. My job was only to detect some benign soft
                    tissue tumors, mostly lipoma (fat tumor).`
      },

      Webmaster: {
        'Invision Power Board' : `My first experience with IPB can be dated back to 2002 with the version 1.3.1. It was free at that time. After building
                                  several small forums just for fun, I became more serious and started building an online forum for medical students because I realized
                                  that we did not have one in Vietnam. I was at my second years in the medical school in Vietnam at that time. Working with IPB is fun.
                                  It was my first experience with online forum administration. It was about not only content administration but also technical
                                  maintenance. I learned a lot, from how to work in administrator roles and in moderator roles. I learned how to keep the forum
                                  run smoothly, encourage members to post new articles, use SEO to improve rank in Google Search, be a judge in many discussions
                                  and even conflicts between members.`,

        PHP: `I learned PHP indirectly through Invision Power Board. Because I was the only one that was responsible for technical aspect of the forum. I solved all of the
              technical problems myself without any physical help. My 'technique' was that to search for solutions on the Internet and then copy-paste them into my forum's code.
              So, my knowledge in PHP was more like know-how rather than know-why.`,

        MySQL: `In medical school, I took courses in medical statistic and was taught using SAS (Statistical Analysis System) to manage,
                manipulate and work on data. I know it is not the same as MySQL but they have some common aspects and MySQL is much easier.
                I learned MySQL also indirectly from IPB. The forum uses MySQL to store its database. I was used to work on MySQL to back up,
                update, restore, and fix problems on data in my forum. It has around 8500 members and more than 47,000 posts. So, it's not small.
                However, my knowledge in MySQL was also more like know-how rather than know-why.`
      }
    },

    experiences : {
      'Radiologist' : {
        company: `Nguyen Trai Hospital`,
        time: `from Jan 2009 to Dec 2012`,
        responsibilities: [
          'Perform ultrasonography examination on patients, including abdominal, pelvic, breast, and thyroid ultrasound',
          'Give professional opinion on ultrasound images to clinical physicians',
          'Provide image diagnosis on abdominal, pelvic, breast, and thyroid diseases with the assist of ultrasound'
        ]
      },

      'Founder and Administrator' : {
        company: `www.nhipcauykhoa.net`,
        time: `from Jan 2002 to Dec 2009`,
        responsibilities: [
          `Build an online forum of 8500 members for Vietnamese medical students using Invision Power Board`,
          `Writing articles on medical and general topics to keep the forum alive.`,
          `Create and encourage members to join discussions in various topics, including medical and general topics.`,
          `Main responsible in recruiting members for Administration Board, including administrators, moderators, and consultants.`,
          `Main responsible in forum technical maintenance, including back up and restore database in MySQL, fix technical issues, and install
          new features.`,
          `Propose, approve, and regulate forum policy.`,
          `Organize and lead forum's offline activities, especially charity activities.`
        ]
      }
    },

    education : [
      {
        school: 'Pham Ngoc Thach Medical School',
        time: `from 2007 to 2008`,
        degrees: [
            'Ultrasonography Certificate, Abdomen Ultrasound'
          ]
      },

      {
        school: 'Pham Ngoc Thach Medical School',
        time: `from 2000 to 2006`,
        degrees : [
            `Doctor of Medicine (M.D.), Medicine`
          ]
      },

      {
        school: 'Nguyen Thuong Hien High School',
        time: `from 1997 to 2000`,
        degrees : [
            `High School Diploma`
        ]
      }
    ]
  }
}


export const projects = [
  {
    category: "website",
    title: "Ledminh Home",
    description: {
      short: "My portfolio page which is this website",
      full: `
        This portfolio page is constantly updated to reflect my current knowledge on web
        development. I also used the most recent technique that I learn to build the website.
        So far, they are Redux, React, Saga, and no D3 at all. I also tried to stop using D3 for all of the simple
        animations that I can easily do using CSS. I will come back to D3 for a more serious matter. \\br
        The source code is posted on github.
      `
    },
    links: {
      source_code: 'https://github.com/ledminh/ledminh-home/',
      demo: 'https://www.ledminh.com/'
    }

  },


  {
    category: "game",
    title: "Stamper Game",
    description: {
      short: "Collect stamps to your basket but don't let it full. ",
      full: `This is the most complex game I built so far. The rule is explained in the game. \\br
            What I like about this game is this is the first web app that I built from front end to back end.
            In the back-end, I used Express.js framework. For database, I used mongoDB to store score. I also used passport
            for Facebook login feature. The front-end was built mainly on React and D3.
      `
    },
    links: {
      source_code: '',
      demo: 'http://stamps.ledminh.com/'
    }

  },

  {
    category: "game",
    title: "Dungeon Game",
    description: {
      short: "A simple 4 levels role playing game built in JavaScript.",
      full: `This is the first role playing I built and one of the most complicated games I've ever built.
            The goal is to kill the boss at level 4. You must kill all enemies to pass a certain level. "You"
            are the orange rectangle. The blue rectangles are health potion. The red rectangles are enemies.
            Your strength is calculated base on your XP and your weapon. \\br

            This game is built entirely by React and D3.
            `
    },
    links: {
      source_code: 'http://codepen.io/ledminh/pen/VjPeoN',
      demo: 'http://codepen.io/ledminh/full/VjPeoN'
    }

  },

  {
    category: "website",
    title: "ESL Website",
    description: {
      short: "A collection of interactive pages for ESL Learners",
      full: `This is one of my favorite project. The idea is to build a collection of interactive pages
      for ESL learners (ESL stands for English as a Second Language).\\br

      What I like about this project is that I built it from scratch, both front-end and back-end. I used
      React for Front End. For Back-End, I used Node.js and Express. Especially, instead of using mongoDB, I decided to
      build my own database system from scratch and it turned into a system that fetching data from a text file and send it
      to the client-side in json format. From doing that, I learned a lot about reading, writing
      file, and a litte bit about data management.
      `
    },
    links: {
      source_code: '',
      demo: 'http://www.esl-library.net/'
    }

  },


  {
    category: "game",
    title: "Tic tac toe",
    description: {
      short: "A game that you can never win",
      full: `This is the first complex game I built using JavaScript. The graphic part was built entirely
            in HTML and CSS while the "core machine" was built in JavaScript, jQuery to be exact. Even though
            I had built many versions of this game using other languages, like C++ and Java, at school, the interesting
            thing about this project is you can never win the computer on this one. The secret behind it is the MiniMax algorithm.`
    },
    links: {
      source_code: 'http://codepen.io/ledminh/pen/XdWNwz',
      demo: 'http://codepen.io/ledminh/full/XdWNwz/'
    }

  },

  {
    category: "game",
    title: "Simon Game",
    description: {
      short: "A small game that tests your memory",
      full: `The computer will play a series of nodes, starting from one node to 20 nodes in a particular order. In order to win, you have
      to play the series again in the exact order. \\br
      This is the second complex game that I built (after Tic Tac Toe). I built it using mostly jQuery. What I remember most about it is how
      confusing it was to use setTimeout to manipulate the playing order.`
    },
    links: {
      source_code: 'http://codepen.io/ledminh/pen/LNbGVR/',
      demo: 'http://codepen.io/ledminh/full/LNbGVR/'
    }

  },

  {
    category: "others",
    title: "Game of Life",
    description: {
      short: "A simulation of Game of Life Theory",
      full: `This is not a game. It's an online simulation of Game of Life theory by John Conway, hence the name. \\br
      This is a zero-player game since its evoluion is determined by its initial state, requiring no further input.
      The player click on some of the small little cells on the screen to create a pattern and then click on START button
      to run the game. \\br
      This is the first project I built using React.
      `
    },
    links: {
      source_code: 'http://codepen.io/ledminh/pen/zqEgdd',
      demo: 'http://codepen.io/ledminh/full/zqEgdd/'
    }

  },

  {
    category: "Graph",
    title: "Global Heat Map",
    description: {
      short: "Monthly Global Land - Surface Temperature from 1753 to 2015",
      full: `A simple graph of monthly surface temperature on Earth from 1753 to 2015 with the shade of colors show the value of
      temperature. \\br
      I built this graph using jQuery and D3. This is also one of a very few apps I built using D3. I know D3 is very powerful in
      this kind of jobs but I still don't have time to learn more on it yet.
      `
    },
    links: {
      source_code: 'http://codepen.io/ledminh/pen/GqjeXw',
      demo: 'http://codepen.io/ledminh/full/GqjeXw'
    }

  },

  {
    category: "utility",
    title: "Simple Calc",
    description: {
      short: "A simple calculator built on jQuery",
      full: `This is one of my first projects built on JavaScript. I used HTML and CSS for graphic, Bootstrap for column alignment,
      and jQuery for the "core machine"`
    },
    links: {
      source_code: 'http://codepen.io/ledminh/pen/gPgMVV',
      demo: 'http://codepen.io/ledminh/full/gPgMVV'
    }

  },

  {
    category: "utility",
    title: "Wiki Search",
    description: {
      short: "A small search engine for Wikipedia",
      full: `This is one of my first projects on JavaScript. There's not much to say about its functionality. You type in the keyword
      that you want to search, the autocomplete function will suggest you some results on the way, and the results will be shown after you
      hit the Enter key or click the Search button. If you're more adventurous, click on the "Random Article" button to read a random topic. \\br

      However, this is also the first project that I'm exposured to JSON and AJAX, which is the core feature of JavaScript and Web Tech nowadays.`
    },
    links: {
      source_code: 'http://codepen.io/ledminh/pen/eJdLOr/',
      demo: 'http://codepen.io/ledminh/full/eJdLOr/'
    }

  },

  {
    category: "utility",
    title: "Porm Clock",
    description: {
      short: "An online Timer built using jQuery",
      full: `The idea of Pormodoro Clock is to set up how many minutes you're gonna work before taking a break and
            then how many minutes you need for the break before you go back to work. This is one of my first apps in
            JavaScript, so it's very simple. I used Bootstrap for the progress bar and other graphic items of the app.
            I used jQuery to manipulate the DOM elements.`
    },
    links: {
      source_code: 'http://codepen.io/ledminh/pen/rxxdYP/',
      demo: 'http://codepen.io/ledminh/full/rxxdYP/'
    }

  },

  {
    category: "others",
    title: "FCC Top Board",
    description: {
      short: "A Leaderboard of Free Code Campers",
      full: `This is an online list of top campers of all time and of the last 30 days.
            This is one of my first experiments with responsive design and ajax.`
    },
    links: {
      source_code: 'http://codepen.io/ledminh/pen/xVrOBj/',
      demo: 'http://codepen.io/ledminh/full/xVrOBj/'
    }

  },
]

/*

*/
