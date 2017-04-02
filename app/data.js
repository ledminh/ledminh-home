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
              opportunity to learn new skills for future use.br`,

    skills : {
      'Languages and Skills': {
        JavaScript: `I started learning JavaScipt in 2015 with freeCodeCamp. So far, I have built several
                    intermediate-size web apps using JavaScript, mostly with frameworks and libraries like
                    jQuery and React. I'm not quite strong in basic JavaScript but I know enough concepts to
                    get by, like closure, prototypal inheritant, functional programming, arrow function,compose,
                    and curry. The most important thing is I'm still learning and I know where to look for the
                    knowledge that I forget or don't know yet.`,
        'Node.js' : `I learned Node indirectly through setting up and installing dependencies for React projects
                    as well as using webpack for packing. I also built several simple API servers for my web apps
                    using Node. I read "Node.js in Action" and found many interesting ideas in the book but I haven't
                    had the change to practice them yet.`,
        HTML: ``,
        CSS: ``
      },

      Database: {
        mongoDB: ``
      },

      'Frameworks/Libraries': {
        React: ``,
        Redux: ``,
        D3: ``,
        jQuery: ``,
        Saga: ``,
        SCSS: ``,
        'Express.js': ``
      },

      Others: {
        Java: ``,
        'C++': ``,
        Assembly: ``
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

          Pelvic: `Although I did not perform as much as abdominal ultrasound examination, I also have three years
                    experience in performing pelvic ultrasound examination in Nguyen Trai Hospital. I can give image
                    diagnosis on and detect gynecological diseases like cancer and pre-cancerous diseases of the female
                    reproductive organ, uterine fibroids, endometriosis, and adenomyosis.`,



      },

      Webmaster: {
        'Invision Power Board' : ``
      }
    }
  }
}


/*
'Perform ultrasonography examination on patients, including abdominal, pelvic, breast, and thyroid ultrasound',
'Give professional opinion on ultrasound images to clinical physicians',
'Provide image diagnosis on abdominal, pelvic, breast, and thyroid diseases with the assist of ultrasound'
*/
