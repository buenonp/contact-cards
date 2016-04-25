(function () {

  'use strict';

  angular
      .module('ContactCards',['ngMaterial', 'ngMessages', 'ui.mask'])
      .controller('ContactCardCtrl', function () {
        
        var contactList = this;
        

        contactList.getAllContacts = function () {

          if(localStorage.length > 0) {
          
            contactList.contacts = [];

            var contact;

            for(var i = 1; i <= localStorage.length; i++)
            {

                contact = JSON.parse(localStorage.getItem('contact' + i));

                contactList.contacts.push({
                  id: contact.id,
                  name: contact.name,
                  email: contact.email,
                  phone: 
                    '(' + contact.phone.slice(0,3) + ') ' 
                    + contact.phone.slice(3,6) + '-'
                    + contact.phone.slice(6,10),
                  image: contact.image
                });
            }
          }

        };

        contactList.addContact = function() {

          localStorage.setItem('contact' + (localStorage.length + 1),

            JSON.stringify({
              id: localStorage.length + 1,
              name: contactList.name,
              email: contactList.email,
              phone: contactList.phone,
              image: 'http://lorempixel.com/80/80/people/' + localStorage.length
            })

          );

          contactList.getAllContacts();

          contactList.name = '';
          contactList.email = '';
          contactList.phone = '';
          

        };

      });
})();