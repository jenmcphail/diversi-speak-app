var app = angular.module("equalPlatform", []);

app.controller("SpeakersCtrl", function($scope) {
  $scope.speakers = [
    {
      name: 'Iheanyi Ekechukwu',
      title: 'Software Engineer',
      company: 'DigitalOcean',
      bio: 'I’m a product engineer currently living in Brooklyn, New York. I am currently a Software Engineer at DigitalOcean, previously a Software Engineer at IBM Watson. While I enjoy both designing and building products, I also enjoy co-hosting my podcast, Two Black Nerds, with my best friend Romeo.',
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
      bio: 'Ben Ilegbodu is a Jesus follower (aka a Christian), a husband, and a father of 2. He lives in Pittsburg, CA with his wife Rashida and their daughters Simone and Avery. Ben is currently a Senior UI Engineer and manager of the Frontend Platform team at Eventbrite (@Eventbrite). He originally joined the Listings team at Eventbrite in May 2015, tasked to revamp the event details pages from an archaic MySpace-style design to a modern, fully responsive layout. Prior to Eventbrite, Ben spent nearly 9 years at Zazzle (@Zazzle) where he started out as an entry-level UI Engineer straight out of college and grew to eventually become its UI Architect. At Zazzle, Ben implemented multiple iterations of the product details pages and design tools as well as architected and developed Zazzle’s server- and client-side UI framework. Ben attended Stanford University and received both a B.S. and M.S. in Computer Science with an HCI concentration. His strong computer science background, coupled with his HCI training and passion for building web sites, has provided him with a unique set of skills where he is able to get nitty gritty with hardcore back-end developers as well as work through challenging UX issues with designers and product managers. Ben’s main focus is in building rich user interactions on the web. He’s having fun learning & playing around with React and its ecosystem. Ben’s complete resume is available on LinkedIn. Follow him on Twitter at @BenMVP.',
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
      bio: "I'm a developer at Capsule. Before that, I was at the Recurse Center studying distributed functional programming in Erlang and Elixir. I like creating great and simple experiences for developers and users. I prefer backend work and writing APIs, but in general I enjoy building tech that makes people more productive. I'm currently learning Elixir and Haskell.",
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
      bio: "I'm a web developer. I design, build, and ship software that makes lives easier. I enjoy working and developing in Node and Angular, with a splash of MongoDB added in.",
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
      bio: "Hello! My name is Johnny. I work as Senior Engineering Manager at Social Tables in Washington, DC. My past includes Technology Director for ISL and Co-Curriculum Development Lead for Black Girls Code. I serve as an IT advisory board member for the National Academy Foundation, where I help to ensure students receive the resources necessary to prepare them for industry or higher education. I'm currently unavailable for any freelance work, but if you're looking for someone to speak about engineering leadership, JavaScript, diversity and inclusion or just want to say hello, feel free to reach out! You can read my thoughts on Medium.",
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
      bio: "I am naturally curious. It's why thinking abstractly is so enjoyable to me. My curiosity allows me to quickly grasp big picture software architecture and craft code that fits. Web applications are developed everyday that reshape our relationship with data and enhance decision-making. Contributing creatively to this effort drives me. Beyond the joy of rapidly prototyping ideas with modern web tools, it is exciting to be creating via a medium whose impact is so widespread. I strive to further develop my ability to engineer intuitive APIs that deliver data to cross-platform frontends. I'm always looking to expand my toolkit. If I'm not growing, I'm dead and a dead me is waaay less effective at producing awesome software.",
      links: {
        website: 'https://withtwoemms.github.io',
        twitter: 'https://twitter.com/manualautomaton',
        github: 'https://github.com/withtwoemms'
      }
    }
  ]; 
});
