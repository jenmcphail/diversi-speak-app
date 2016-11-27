(function() {

  // var equalPlatformApp = firebase.initializeApp(defaultAppConfig)

  var app = angular.module("equalPlatform", []);

  // app.controller("FirebaseCtrl", function($firebaseObject){
  //   const rootRef = firebase.database().ref().child('angular');
  //   const ref = rootRef.child('object');
  //   this.object = $firebaseObject(ref);
  // });

  app.controller("SpeakersCtrl", function($scope) {
    $scope.speakers = [
      {
        name: 'Iheanyi Ekechukwu',
        title: 'Software Engineer',
        company: 'DigitalOcean',
        bio: 'I’m a product engineer currently living in Brooklyn, New York. I am currently a Software Engineer at DigitalOcean, previously a Software Engineer at IBM Watson. While I enjoy both designing and building products, I also enjoy co-hosting my podcast, Two Black Nerds, with my best friend Romeo.',
        location: 'Brooklyn NY',
        links:
        {
          website: 'http://iheanyi.com',
          twitter: 'https://twitter.com/kwuchu',
          github: 'https://github.com/iheanyi'
        }
      },
      {
        name: 'Ben Ilegbodu',
        title: 'Lead UI Engineer',
        company: 'Eventbrite',
        bio: "Ben Ilegbodu is a Senior UI Engineer and manager of the Frontend Platform team at Eventbrite (@Eventbrite). He originally joined the Listings team at Eventbrite in May 2015, tasked to revamp the event details pages from an archaic MySpace-style design to a modern, fully responsive layout. Prior to Eventbrite, Ben spent nearly 9 years at Zazzle (@Zazzle) where he started out as an entry-level UI Engineer straight out of college and grew to eventually become its UI Architect. At Zazzle, Ben implemented multiple iterations of the product details pages and design tools as well as architected and developed Zazzle’s server- and client-side UI framework. Ben attended Stanford University and received both a B.S. and M.S. in Computer Science with an HCI concentration.",
        location: 'Pittsburgh, CA',
        links:
        {
          website: 'http://www.benmvp.com',
          twitter: 'https://twitter.com/benmvp',
          github: 'https://github.com/benmvp'
        }
      },
      {
        name: 'Juan Soto',
        title: 'Web Developer',
        bio: "Juan is a developer at Capsule. Before that, he was at the Recurse Center studying distributed functional programming in Erlang and Elixir. He likes creating great and simple experiences for developers and users. He prefers backend work and writing APIs, but in general he enjoys building tech that makes people more productive. He's currently learning Elixir and Haskell.",
        location: 'New York, NY',
        links:
        {
          website: 'http://juansoto.me',
          twitter: 'https://twitter.com/_hooan',
          github: 'https://github.com/sotojuan'
        }
      },
      {
        name: 'Susan Lin',
        title: 'Product Designer',
        bio: "Susan is a Product Designer who codes and an Artist, primarily painting in watercolor. Previously, she built styleguides in addition to user experiences at Treehouse, OpenTable, and Trulia. She studied HCI at Carnegie Mellon. She believes the best technology designers are able to code and push their own pixels. She illustrates. You may have seen her sketchnotes. She paints many watercolor trees. And most recently, she indulges in pixel art. She believes delibrate practice is the key to a successful art practice.",
        location: 'San Francisco, CA',
        links:
        {
          website: 'http://bysusanlin.com',
          twitter: 'https://twitter.com/bysusanlin',
          github: 'https://github.com/bysl',
          medium: 'https://medium.com/@bysusanlin'
        }
      },
      {
        name: 'Jonah Kirangi',
        title: 'Front-End Software Engineer',
        company: 'Remitly',
        bio: "Jonah is a web developer. He designs, builds, and ships software that makes lives easier. He enjoy working and developing in Node and Angular, with a splash of MongoDB added in.",
        location: 'Seattle, WA',
        links:
        {
          website: 'http://www.jonahkirangi.com',
          twitter: 'https://twitter.com/jonahkirangi',
          github: 'https://github.com/jonahkirangi',
          youtube: 'https://www.youtube.com/user/jonahkirangi'
        }
      },
      {
        name: 'Johnny Ray Austin',
        title: 'Director of Technology',
        company: 'ISL',
        bio: "Johnny works as Senior Engineering Manager at Social Tables in Washington, DC. His past includes Technology Director for ISL and Co-Curriculum Development Lead for Black Girls Code. He serves as an IT advisory board member for the National Academy Foundation, where he helps to ensure students receive the resources necessary to prepare them for industry or higher education. He's currently available to speak about engineering leadership, JavaScript, diversity and inclusion.",
        location: "Washington, D.C.",
        links: {
          website: 'https://johnnyray.me',
          twitter: 'https://twitter.com/recursivefunk',
          github: 'https://github.com/recursivefunk',
          blog: 'https://medium.com/@recursivefunk'
        }
      },
      {
        name: 'Emmanuel Obi',
        title: 'Software Engineer',
        company: '5th Column LLC',
        bio: "Emmanuel is naturally curious. It's why thinking abstractly is so enjoyable to him. His curiosity allows him to quickly grasp big picture software architecture and craft code that fits. Web applications are developed everyday that reshape our relationship with data and enhance decision-making. Contributing creatively to this effort drives him.",
        location: 'Chicago, IL',
        links: {
          website: 'https://withtwoemms.github.io',
          twitter: 'https://twitter.com/manualautomaton',
          github: 'https://github.com/withtwoemms'
        }
      },
      {
        name: 'Hardy Jones',
        title: 'Software Engineer',
        company: 'No Red Ink',
        bio: "",
        location: '',
        links: {
          website: 'http://joneshf.github.io/',
          twitter: 'https://twitter.com/st58',
          github: 'https://github.com/joneshf/'
        }
      },
      {
        name: 'Corey Hobbs',
        title: 'Business Development: Integrations',
        company: 'Github',
        bio: "Tech. Education. Policy. | Let's build tomorrow, together. | Building the ecosystem @GitHub",
        location: 'San Francisco, CA',
        links: {
          website: 'http://corey.chocolatejs.com/',
          twitter: 'https://twitter.com/chobberoni',
          github: 'https://github.com/chobberoni'
        }
      },
      {
        name: 'Alison Stanton',
        title: 'Data Engineer & Architect',
        company: 'Stanton Ventures',
        bio: "As Chief Problem Solver at Stanton Ventures Alison focuses on business intelligence reporting, product measurement, process improvement through automation, and technical training. She makes data accessible, discoverable, and actionable for Operations teams, Product Managers, and clients. Currently, her main languages are SQL, Python, and LookML. She loves knitting and using technology to empower audacious ideas.",
        location: 'Chicago, IL',
        links: {
          website: 'http://alisonstanton.com/',
          twitter: 'https://twitter.com/alison985',
          github: 'https://github.com/alison985'
        }
      },
      {
        name: 'David Yarde',
        title: 'Partner & Creative Director',
        company: 'Sevenality',
        bio: "A multi-disciplinary creative, passionate about branding & user experience.",
        location: 'Orlando, FL',
        links: {
          website: 'http://davidyarde.com/',
          twitter: 'https://twitter.com/dsmy',
          github: 'https://github.com/dsmy'
        }
      },
      {
        name: 'Adekunle Oduye',
        title: 'Product Designer',
        company: 'NASDAQ',
        bio: "Adekunle is Currently a Product Designer at NASDAQ where he's designing web-based products that serve communications, public relations, and investor relations professionals. Outside of Nasdaq, he's a co-organizer for SassConf and GothamSass Meetup, which serves front-end developers, CSS ninjas, UX mavens, and lovers for the best css-preprocessor.",
        location: 'Brooklyn, NY',
        links: {
          website: 'http://www.adekunleoduye.com/',
          twitter: 'https://twitter.com/adekunleoduye',
          github: 'https://github.com/adekunleoduye'
        }
      },
      {
        name: 'Obinwanne Hill',
        title: 'Founder and Lead Developer',
        company: 'Restive',
        bio: "Designer. Developer. Simplifier.",
        location: '',
        links: {
          website: 'http://obihill.com/',
          twitter: 'https://twitter.com/obihill',
          github: 'https://github.com/obihill'
        }
      },
      {
        name: 'Alexander Miranda',
        title: 'Software Engineer',
        company: '',
        bio: "Software engineer with three years experience building engaging and interactive user interfaces.",
        location: 'Seattle, WA',
        links: {
          website: 'https://amiranda.me/',
          twitter: 'https://twitter.com/amiranda222',
          github: 'https://github.com/ammiranda'
        }
      },
      {
        name: 'Vaidehi Joshi',
        title: 'Software Engineer',
        company: 'Imprint',
        bio: "Vaidehi is a writer turned programmer. She's an alumna of Barnard College and a graduate of The Flatiron School. Before learning to code, she was a sixth grade teacher and the occasional freelance writer. Her writing has appeared in Bustle, The Huffington Post, The Aerogram, and The Rumpus, among others. She loves Spanish guitar, discussing the merits of cheesecake, and the very first snow of the year.",
        location: 'Brooklyn, NY',
        links: {
          website: 'http://vaidehi.weebly.com/',
          twitter: 'https://twitter.com/vaidehijoshi',
          github: 'https://github.com/vaidehijoshi'
        }
      },
      {
        name: 'Ashley Ellis',
        title: 'Software Engineer',
        company: 'thoughtbot',
        bio: "Ashley enjoys turning complex problems into simple, beautiful and efficient solutions. Her primary language is Ruby but she's always learning something new. She love being involved in her local development community and she's on the RailsBridge Triangle Core Team, helping to organize events to get new and diverse people into the Ruby community.",
        location: 'Durham, NC',
        links: {
          website: 'http://ashleyellispierce.com/',
          twitter: 'https://twitter.com/ashleynellis',
          github: 'https://github.com/anellis'
        }
      },
      {
        name: 'Ruth Miller',
        title: 'Product Manager and Facilitator',
        company: '',
        bio: "Ruth is a writer, researcher, and overall highly organized person. Currently she lives, works, and plays in Oakland, California.",
        location: 'Oakland, CA',
        links: {
          website: 'http://ruthmiller.net/',
          twitter: 'https://twitter.com/mcplanner',
          linkedin: 'https://www.linkedin.com/in/mcplanner'
        }
      },
      {
        name: 'Leslie Tan',
        title: 'Senior Full Stack Engineer',
        company: 'Netflix',
        bio: "Lauren is a Senior Full Stack Engineer at Netflix. Previously, she was Senior Developer at DockYard, a user experience driven software consultancy based in Boston, MA. Although formally educated in Finance, she has been involved with user interface and experience design for more than 5 years. She is also an active contributor to the Ember.js community, and a regular speaker at leading JavaScript and Elixir events & conferences. With her experience in design, finance and web development, Lauren delivers unique insights and skills to the people she works with.",
        location: 'San Francisco, CA',
        links: {
          website: 'https://medium.com/@sugarpirate/',
          twitter: 'https://twitter.com/sugarpirate_',
          github: 'https://github.com/poteto',
          linkedin: 'https://www.linkedin.com/in/laurenelizabethtan'
        }
      },
      {
        name: 'Lyn Mudrow',
        title: 'Technical Manger and Front-End Developer',
        company: 'Hack the Hood',
        bio: "Lyn Muldrow is a web developer, instructor, writer, and diversity advocate who believes that the future of technology lies in the minds of those excluded from or not represented in the current industry. With over 9 years experience in marketing, web design, web development, and tech mentorship/instruction, she's at her best when able to express creatively and share knowledge with others. Lyn currently works with Hack the Hood, a nonprofit that bridges the tech divide by educating youth ages 16-24 in web design and development, to create web properties for Oakland business communities. She previously worked as a Front-End Developer and Web Design Mentor with companies like General Assembly, and was self-employed for over 7 years providing small to medium sized businesses with a full suite of online marketing solutions. Lyn is a mother of two who loves nerding out with her kids, watching Doctor Who, playing volleyball, and gardening.",
        location: 'San Francisco, CA',
        links: {
          website: 'http://www.lynmuldrow.com/',
          twitter: 'https://twitter.com/lynmuldrow',
          linkedin: 'https://www.linkedin.com/in/lynmuldrow'
        }
      },
      {
        name: 'Gloria Kimbwala',
        title: 'Campus Program Specialist',
        company: 'Square',
        bio: "Gloria Kimbwala is looking to contribute to an innovate technology organization domestically or internationally where her positivity, enthusiasm, creativity, intelligence, and hard work can be utilized. She currently working on her Master’s in Computer Sciences with an concentration in Software Engineering. She actively mentors other minorities, women, and under-represented communities in tech. In her free time, Gloria spends her time volunteering with women and technology groups in the Bay Area. Also available for speaking and interviewing.",
        location: 'Houston, TX',
        links: {
          github: 'https://github.com/gkimbwala',
          linkedin: 'https://www.linkedin.com/in/gkimbwala'
        }
      },
      {
        name: 'Patricial Realini',
        title: 'Software Engineer',
        company: 'Bustle',
        bio: "Patricia Realini is a software engineer, an artist and a woman in Los Angeles, CA. As a self-taught programmer, she has experience working in React, Redux, ES6, Node, Sass & Rails, and has led a workshop on git and the command line called Get Git Got. She regularly contributes to the Javascript community through various outreach efforts. Notably, Patricia is as an organizer for Node Together, a workshop aimed at bringing diversity to the Node community and introducing underrepresented groups to Javascript. This past spring she spoke at EmpireJS in New York, NY and Web Rebels in Oslo, Norway. Closer to home, she spoke on the Processing Foundation's Open Tech Lab Panel. An active member of the open-source community, Patricia has made contributions to npm & MaptimeLA, and serves as a mentor at the DTLA Pair Programming Meetup. When she's not coding, you can find her recipe testing in the kitchen or camping in Big Sur.",
        location: 'Los Angeles, CA',
        links: {
          website: 'http://www.patriciarealini.com/',
          github: 'https://github.com/gkimbwala',
          linkedin: 'https://www.linkedin.com/in/gkimbwala'
        }
      },
       {
        name: 'Patricial Realini',
        title: 'Software Engineer',
        company: 'Bustle',
        bio: "Patricia Realini is a software engineer, an artist and a woman in Los Angeles, CA. As a self-taught programmer, she has experience working in React, Redux, ES6, Node, Sass & Rails, and has led a workshop on git and the command line called Get Git Got. She regularly contributes to the Javascript community through various outreach efforts. Notably, Patricia is as an organizer for Node Together, a workshop aimed at bringing diversity to the Node community and introducing underrepresented groups to Javascript. This past spring she spoke at EmpireJS in New York, NY and Web Rebels in Oslo, Norway. Closer to home, she spoke on the Processing Foundation's Open Tech Lab Panel. An active member of the open-source community, Patricia has made contributions to npm & MaptimeLA, and serves as a mentor at the DTLA Pair Programming Meetup. When she's not coding, you can find her recipe testing in the kitchen or camping in Big Sur.",
        location: 'Los Angeles, CA',
        links: {
          website: 'http://www.patriciarealini.com/',
          twitter: 'https://twitter.com/patriciarealini',
          github: 'https://github.com/patriciarealini'
        }
      },
      {
        name: 'Jacky Alciné',
        title: 'Software Engineer',
        company: 'Bustle',
        bio: "Jacky Alciné is a full stack developer. He writes weblog posts and produces projects. He's an advocate for social justice for Black people and simple user security, decentralized and open computing platforms and oatmeal raisin cookies.",
        location: 'Oakland, CA',
        links: {
          website: 'https://jacky.wtf/',
          twitter: 'https://twitter.com/jackyalcine'
        }
      },
      {
        name: 'Michael Lancaster',
        title: 'Software Engineer',
        company: 'Uptake',
        bio: "Michael was born and raised in Brasil with dual citizenship (USA and Brazilian). Now living in Chicago - USA for the past 4 years, he's a Software Engineer focused in Javascript applications (Web, Mobile, Desktop) and often full-stack when including Node. Currently working as Software Engineer - Javascript at Uptake, previously I worked at Isobar (Senior Developer), Orbitz (UI Engineer). In his spare time, he builds and maintains side projects Soundnode, Solshal and he tries to contribute to open source projects here and there on Github.",
        location: 'Chicago, IL',
        links: {
          website: 'http://www.bymichaellancaster.com/',
          twitter: 'https://twitter.com/weblancaster',
          linkedin: 'https://www.linkedin.com/in/michaellancaster1/en',
          github: 'https://github.com/weblancaster'
        }
      },
      {
        name: 'Ron Bronson',
        title: 'Service Dsigner and UX Strategist',
        company: '',
        bio: "Municipal digital transformation, UX strategy. Launched Aggregate Conference. Invented Tennis Polo. ",
        location: 'Bloomington, IN',
        links: {
          website: 'https://medium.com/@ronbronson',
          twitter: 'https://twitter.com/ronbronson'
        }
      },
      {
      name: 'Vasanth Krishnamoorthy',
      title: 'Senior Front End Engineer',
      company: 'WalmartLabs',
      bio: "Vasanth is a front end engineer who wear a lot of different hats.",
      location: 'San Francisco, CA',
      links: {
        website: 'http://www.vasanthk.com/',
        twitter: 'https://twitter.com/vasanth_k',
        github: 'https://github.com/vasanthk'
      }
    },
    {
      name: 'Karmen Blake',
      title: 'Software Engineer',
      company: '',
      bio: "Family man | Sports junkie | Tech tinkerer | Native American.",
      location: 'Post Falls, ID',
      links: {
        website: 'http://blog.dudeblake.com/',
        twitter: 'https://twitter.com/kblake',
        github: 'https://github.com/kblake'
      }
    },
    {
      name: 'Timothy B. Smith',
      title: 'Software Engineer',
      company: '',
      bio: "Timothy is a frontend designer living in Saint Paul, MN. He designs and builds web applications. He made a podcasting CMS (Content Management System) that powers Goodstuff FM and Relay FM, together with Phil Duffy. After work, he spends time with his wife, reads comics, watches movies, and writes The Bold Report.",
      location: 'Saint Paul, MN',
      links: {
        website: 'https://ttimsmith.com/',
        twitter: 'https://twitter.com/smithtimmytim',
        github: 'https://github.com/smithtimmytim'
      }
    },
    {
      name: 'Taylor Barnett',
      title: 'Developer Evangelist',
      company: 'Keen IO',
      bio: "UT Austin Computer Science Alumna // Developer + Community + Evangelist @keenlabs",
      location: 'Austin, TX',
      links: {
        website: 'http://taylorbar.net/',
        twitter: 'https://twitter.com/taylor_atx',
        github: 'https://github.com/tbarn'
      }
    },
    {
      name: 'Camille Emefa Acey',
      title: 'VP Customer Success',
      company: 'Clubhouse',
      bio: "Camille Emefa Acey is a wife, mother, daughter, sister, friend, and comrade. She has worked in film, music, media, and has now built an illustrious career in the tech industry advocating for users and customers and building partnerships. She is currently serving as VP, Customer Success at Clubhouse Software.",
      location: 'Brooklyn, NY',
      links: {
        website: 'https://camilleacey.com/',
        twitter: 'https://twitter.com/kavbojka'
      }
    },
    {
      name: 'Rong Lu',
      title: 'Program Manager',
      company: 'Microsoft',
      bio: "Rong is a PM on the Visual Studio graphics tools team. She loves travel, pingpong, and Chinese food",
      location: 'Brooklyn, NY',
      links: {
        twitter: 'https://twitter.com/davorabbit'
      }
    },
    {
      name: 'Guilherme de Souza',
      title: 'Product Engineer',
      company: 'Sprinklr',
      bio: "Guilherme is the creator of DSS, Tembo and other JS stuff. CTO at LearningHUB and Product Engineer at Sprinklr.",
      location: 'Brooklyn, NY',
      links: {
        website: 'http://guisouza.github.io/',
        twitter: 'https://twitter.com/_gui_souza',
        github: 'https://github.com/guisouza'

      }
    },
    {
      name: 'Ivana McConnell',
      title: 'UI/UX Designer',
      company: 'Customer.io',
      bio: "Ivana is a designer currently based in Vancouver. She loves designing intuitive experiences and services for digital and print. Currently, she's specializing in interaction and user interface design at Myplanet, and working as an editorial assistant on Offscreen Magazine. When not designing, she can usually be found pedaling a bike around Vancouver enjoying its outdoor scene as well as its coffee, craft beer, and food in (mostly) equal measure. ",
      location: 'Vancouver, CA',
      links: {
        website: 'http://ivanamcconnell.com/',
        twitter: 'https://twitter.com/ivanamcconnell',
        linkedin: 'https://www.linkedin.com/in/ivanamcconnell'
      }
    },
    {
      name: 'Paul Anthony Webb',
      title: 'Front-End Designer and Developer',
      company: 'Quralt Inc',
      bio: "Paul Anthony Webb is a Boston-based front-end web designer and developer. He likes making awesome things (for awesome people). He could not decide if he preferred graphic or web design more than the other, so he chose to do both. His last name is a lucky coincidence.",
      location: 'Boston, MA',
      links: {
        website: 'https://dsgn.io/',
        twitter: 'https://twitter.com/NetOpWibby',
      }
    },
    {
      name: 'Maria Naggaga',
      title: 'Program Manager',
      company: 'Microsoft',
      bio: "Happy Developer| Hack Artist| Constant Learner|.",
      location: 'New York, NY',
      links: {
        website: 'http://marianaggaga.com/',
        twitter: 'https://twitter.com/LadyNaggaga',
        github: 'https://github.com/LadyNaggaga'
      }
    },
    {
      name: 'Jennifer Wong',
      title: 'Software Engineer',
      company: 'Eventbrite',
      bio: "Jennifer is a former Civil Engineer and self-taught Front-End Developer. She's also a registered Engineer in Training (No. EIT 121059) with the California Department of Consumer Affairs.",
      location: 'San Francisco, CA',
      links: {
        website: 'http://mochimachine.org/',
        twitter: 'https://twitter.com/mybluewristband',
        github: 'https://github.com/jennz0r'
      }
    },
    {
      name: 'Serena Chen',
      title: 'Designer',
      company: 'Bank of New Zealand',
      bio: "Serena is a Digital product designer on a mission to create an accessible and performant web.",
      location: 'New Zealand',
      links: {
        website: 'http://serena.nz/',
        twitter: 'https://twitter.com/sereeena',
      }
    },
    {
      name: 'Sonya Mann',
      title: 'Writer and Analyst',
      company: 'Independent',
      bio: "Sonya is a 'Professional Word Person.'' (Yup, that’s the official job title.) She's a San Francisco Bay Area native, surrounded by startups and constantly observing the industry. She participates in the tech biz from every angle — She writes about it, writes for it, and then analyzes the results..",
      location: 'San Francisco, CA',
      links: {
        website: 'https://www.sonyaellenmann.com/',
        twitter: 'https://twitter.com/sonyaellenmann',
        github: 'https://github.com/sonyamann'
      }
    },
    {
      name: 'Ramesh Nair',
      title: 'Full-stack developer',
      company: 'Hidden Tao',
      bio: "Ramesh is an experienced Javascript developer with track record of leading technical teams and solving challenging problems to meet business goals. He has lead in both full-stack (Node, Meteor, Electron) and front-end roles (React, Angular) roles, worked with multiple device platforms, and in many different sectors including but not limited to media, non-profit, retail, financial training, etc. He graduated from Imperial College London with a Masters in Computer Science and have since worked in many sectors including but not limited to media, non-profit, retail, etc.",
      location: 'Taiwan',
      links: {
        website: 'https://hiddentao.com/',
        twitter: 'https://twitter.com/hiddentao',
        github: 'https://github.com/hiddentao',
        linkedin: 'https://www.linkedin.com/in/hiddentao'
      }
    },
    {
      name: 'Terri Burns',
      title: 'Associate Product Manager',
      company: 'Twitter',
      bio: "Terri is a product manager @twtr, chairlady @techatnyu, writer @forbes.",
      location: 'San Francisco, CA',
      links: {
        website: 'http://tcburning.com/',
        twitter: 'https://twitter.com/tcburning',
        github: 'https://github.com/terriburns'
      }
    },
    {
      name: 'Christina Truong',
      title: 'Front-end Developer and Tech Educator',
      company: 'Independent',
      bio: "Christina has had many job titles over the years: Web Designer, Interface Developer, Software Engineer, Front-end Developer, Instructor, Director of Curriculum. She writes HTML5, CSS3, JavaScript / jQuery, Sass / Less and a sprinkle of PHP and has worked with frameworks such as WordPress and Jekyll. She also teaches front-end code and soft skills related courses focused on making it in this sometimes crazy, but mostly wonderful industry.",
      location: 'Toronto, Canada',
      links: {
        website: 'http://christinatruong.com/',
        twitter: 'https://twitter.com/christinatruong',
        github: 'https://github.com/christinatruong'
      }
    },
    {
      name: 'Megan Tiu',
      title: 'Front-end Developer and Tech Educator',
      company: 'CallRail',
      bio: "Megan is a full-stack web developer specializing in Rails and is currently working and building cool things at CallRail. Before that she worked for Fittery, where she wore many hats on a small, fast-paced development team. She loves writing clean code, optimizing efficiency, working with big data, and architecting APIs. She's also passionate about diversity in tech and building a positive, accessible community for all. She genuinely loves the work she does and is excited to grow her computing knowledge in as many ways as possible. She graduated magna cum laude from Georgia State University with a BA in Film and Television and also completed the Tech Talent South Code Immersion Program. When she's not glued to my computer, she loves tabletop and video gaming, tearing through Atlanta's streets by bike, and playing with her pit bull.",
      location: 'Atlanta, GA',
      links: {
        website: 'http://megantiu.com/',
        twitter: 'https://twitter.com/megantiu',
        github: 'https://github.com/megantiu'
      }
    },
    {
      name: 'Jennifer Refat',
      title: 'Front-end Developer and Tech Educator',
      company: '',
      bio: "Jennifer is an Interactive Telecommunications Program NYU alumna who lives in NYC and is currently a UX Engineer contractor at Google. She has worked in various industries such as academia, advertising, media, and startups. I've worked on large projects spanning several stacks including languages such as PHP, Python, .NET, and some Ruby. She specializes in building websites from scratch or overhauling a university's website (NYU) with small teams. Additionally, she loves learning about new technologies and challenging myself with side projects.",
      location: 'New York, NY',
      links: {
        website: 'http://jenrefat.com/',
        twitter: 'https://twitter.com/mellowbeing',
        github: 'https://github.com/mellowbeing'
      }
    },
    ]; 
  });


}());