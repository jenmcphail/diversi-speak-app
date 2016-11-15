var app = angular.module("equalPlatform", []);

app.controller("SpeakerCtrl", function($scope) {
  $scope.speakers = [
    {
      name: 'Iheanyi Ekechukwu', title: 'Software Engineer', company: 'DigitalOcean',
      links:
      {
        website: 'http://iheanyi.com',
        twitter: 'https://twitter.com/kwuchu',
        github: 'https://github.com/iheanyi'
      }
    },
    {
      name: 'Ben Ilegbodu', title: 'Lead UI Engineer', company: 'Eventbrite',
      links:
      {
        website: 'http://www.benmvp.com',
        twitter: 'https://twitter.com/benmvp',
        github: 'https://github.com/benmvp'
      }
    },
    {
      name: 'Juan Soto', title: 'Web Developer',
      links:
      {
        website: 'http://juansoto.me',
        twitter: 'https://twitter.com/_hooan',
        github: 'https://github.com/sotojuan'
      }
    },
    {
      name: 'Susan Lin', title: 'Product Designer',
      links:
      {
        website: 'http://bysusanlin.com',
        twitter: 'https://twitter.com/bysusanlin',
        github: 'https://github.com/bysl',
        medium: 'https://medium.com/@bysusanlin'
      }
    },
    {
      name: 'Jonah Kirangi', title: 'Front-End Software Engineer', company: 'Remitly',
      links:
      {
        website: 'http://www.jonahkirangi.com',
        twitter: 'https://twitter.com/jonahkirangi',
        github: 'https://github.com/jonahkirangi',
        youtube: 'https://www.youtube.com/user/jonahkirangi'
      }
    },
    {
      name: 'Johnny Ray Austin', title: 'Director of Technology', company: 'ISL',
      links: {
        website: 'https://johnnyray.me',
        twitter: 'https://twitter.com/recursivefunk',
        github: 'https://github.com/recursivefunk',
        blog: 'https://medium.com/@recursivefunk'
      }
    },
    {
      name: 'Emmanuel Obi', title: 'Software Engineer', company: '5th Column LLC',
      links: {
        website: 'https://withtwoemms.github.io',
        twitter: 'https://twitter.com/manualautomaton',
        github: 'https://github.com/withtwoemms'
      }
    }
  ]; 
});
