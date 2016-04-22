(function () {

  'use strict';

  angular
      .module('ContactCards',['ngMaterial'])
      .controller('ContactCardCtrl', function () {
        
        var contactList = this;
        
        contactList.contacts = [];

        contactList.addContact = function() {
          
          contactList.contacts.push(

            {
              name: contactList.name,
              email: contactList.email,
              phone: contactList.phone,
              image: 'http://lorempixel.com/80/80/people/' + contactList.contacts.length
            }

          );
          
          contactList.name = '';
          contactList.email = '';
          contactList.phone = '';

        };

      });
})();