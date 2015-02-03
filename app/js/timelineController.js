angular
    .module('jrhApp')
    .controller('timelineController', ['$scope', '$rootScope', '$stateParams', '$state',  function($scope, $rootScope, $stateParams, $state) {

        $scope.events = [
            {   
                year:'1924',
                text:'Herman is born in Newark, New Jersey on August 21st.'
            },
            {   
                year:'1934',
                text:'West Coast waterfront strike'
            },
            {   
                year:'1935',
                text:'Herman leaves formal schooling after the 5th grade, and works.'
            },
            {   
                year:'1939',
                text:'Herman calls his first strike while working at Mrs. Wagner’s Pies in Newark, NJ.'
            },

        ];
        
        $scope.topImages = [
            {   
                id:1,
                quote:'',
                description:'Herman was born in Newark, New Jersey on August 21, 1924. His father, Milton Sr., was a school janitor. His mother, Laurine, was a housewife who passed away when Herman was twelve years old. He was the middle of two brothers, Milton Jr. and Rodman. From left: Herman, Rodman, their father, and Milton Jr.'
            },
             {   
                id:3,
                quote:'Work was a condition of survival',
                description:'Herman worked all of his life, and to him, “Work was a condition of survival.” San Francisco mayor Art Agnos, a close friend and neighbor to Herman, said “it was from his early life, growing up in the Depression and being fiercely independent, that he developed his empathy for others.”'
            },
            {   
                id:5,
                quote:'',
                description:'Herman left home at the age of 15 to join the Merchant Marine, lying about his age in order to enlist. His first stop was on a freighter headed for the U.S. invasion of North Africa in 1942.'
            },
            {   
                id:7,
                quote:'',
                description:'Herman (right) and friends during the World War II.'
            }

        ];

        $scope.bottomImages = [
            {   
                id:2,
                quote:'',
                description:'At age 15 Jimmy called his first strike while working at Mrs. Wagner’s Pies in Newark, NJ. It lasted just half a day, but it resulted in a raise of 2 cents an hour on the $5 a day the 250 workers in the plant had been earning.'
            },
            {   
                id:4,
                quote:'',
                description:'The 1934 Pacific Coast Maritime Strike stalled shipping at ports thoroughout the western United States. Longshoremen struck in May to protest unfair hiring practices and to call for better working conditions.  In July, two San Francisco strike supporters were shot and killed by police, and many more were injured in the event which became known as “Bloody Thursday.” Following their deaths, labor unions galvanized to shut down the city of San Francisco in a general strike that rocked the nation. In the arbitration that followed, the union was awarded most of its demands, including a union-controlled hiring hall and a labor contract that extended to all ports along the coast.'
            },
            {   
                id:6,
                quote:'“A great deal of wisdom resided in those ships”',
                description:'Herman was a voracious reader all his life, and prided himself on his self-taught education. He used his time in the Merchant Marine to read everything he could. Karl Marx was especially influential. He reminisced later that “[Sailing was a lonely life] but it provided the opportunity to read an extraordinary amount about history, the classics, the great events in time. And you learned just by listening. A great deal of wisdom resided in those ships.”'
            },
             {   
                id:8,
                quote:'“The great fever of patriotism”',
                description:'His zeal for unionism merged with what he described as ‘the great fever of patriotism’ during World War II. Both offered ‘great clarity of vision’ -- unionism, because it led ‘to joining with fellow workers to bargain and, if necessary, to struggle collectively in order to get any kind of a decent shake;’ and patriotism, because the war provided ‘such a sense of unity, such national commitment that there was no confusion at all.’”'
            }

        ];

}]);
