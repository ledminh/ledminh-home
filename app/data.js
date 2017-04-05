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
    }
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
    }
  }
}


/*
'Perform ultrasonography examination on patients, including abdominal, pelvic, breast, and thyroid ultrasound',
'Give professional opinion on ultrasound images to clinical physicians',
'Provide image diagnosis on abdominal, pelvic, breast, and thyroid diseases with the assist of ultrasound'
*/
