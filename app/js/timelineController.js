angular
    .module('jrhApp')
    .controller('timelineController', ['$scope', '$rootScope', '$stateParams', '$state',  function($scope, $rootScope, $stateParams, $state) {

        $scope.detailID = 0;
        $scope.dragging = false;
        $scope.xStart = 0;
        $scope.xEnd = 0;
        $scope.mainView;
        $scope.scrollVel = 0;
        $scope.scrollStart = 0;
        $scope.detailID = $stateParams.detailID;
        $scope.show = true;
        $scope.showLeftArrow = false;
        $scope.showRightArrow = true;

        //display detail subsection
        $scope.clickOnDetail =function(id) {
            //only if there is no scroll
            if(($scope.xStart - $scope.xEnd)==0){
                $state.go('timeline_detail',{detailID:id});
            }
        }

        //SCROLLING
        //drag to scroll functionality
        $scope.onMouseMove = function ($event) {
            if($scope.dragging){
                console.log("mousemove in timeline ");
                console.log("$scope.xStart: "+$scope.xStart);
                console.log("$event.x: "+$event.x);
                scrollto = ($scope.scrollStart - $event.x);
                console.log("scrollto: "+scrollto);
                $scope.mainView.scrollLeft = scrollto;
                $scope.scrollVel = ($scope.lastX-$event.x)*2;

                $rootScope.timelineScroll = scrollto;

                $scope.update();
                $scope.lastX = $event.x
            }
        }

        $scope.startDrag = function ($event) {
            $scope.dragging = true;
            $scope.mainView = document.getElementById("main-view");
            $scope.scrollStart = $event.x+$scope.mainView.scrollLeft;
            $scope.xStart = $event.x;
            clearInterval($scope.scrollInterval);
        }

        $scope.stopDrag = function ($event) {
            $scope.dragging = false; 
            $scope.xEnd = $event.x;

            //keep scrolling based on speed, slow to a stop
            $scope.scrollToStopInterval = setInterval($scope.scrollToStop, 50);
        }

        $scope.scrollToStop = function(){
            $scope.mainView.scrollLeft += $scope.scrollVel;
            $scope.scrollVel = $scope.scrollVel*.5;

            console.log("$scope.scrollVel: "+$scope.scrollVel);

            if( Math.abs($scope.scrollVel) <= 1){
                clearInterval($scope.scrollToStopInterval);
            }
            
            $scope.update();
        }

        $scope.scrollAmount = 800;
        $scope.scroll = function(dir){
            $rootScope.timelineScroll = $scope.mainView.scrollLeft;
            $rootScope.timelineScroll += $scope.scrollAmount*dir;
            $scope.startScrollToTarget($rootScope.timelineScroll);
        }

        $scope.backToTimeline = function(){
            console.log("backToTimeline");            
        }

        $scope.update = function(){
          //  console.log("$rootScope.timelineScroll: "+$rootScope.timelineScroll);
            $scope.eventsX = -$scope.mainView.scrollLeft/1.1;
            $scope.$apply();
           // $scope.eventsX = -$rootScope.timelineScroll/1.1;
            //console.log("$scope.eventsX: "+$scope.eventsX);
            //LEFT ARROW
            if($rootScope.timelineScroll <= 5){
                $scope.showLeftArrow = false;
            }
            else{
                $scope.showLeftArrow = true;
            }

            //RIGHT ARROW
            timelineRightEdge = $scope.mainView.scrollWidth-window.innerWidth;
           // console.log("timeline right edge: "+timelineRightEdge);
            if($rootScope.timelineScroll >= timelineRightEdge){
                $scope.showRightArrow = false;
            }
            else{
                $scope.showRightArrow = true;
            }
        }

        //DATA
        $scope.events = [
            {   
                year:'1924',
                text:'Jimmy is born in New Jersey on August 21st.'
            },
            {   
                year:'1934',
                text:'West Coast waterfront strike'
            },
            {   
                year:'1935',
                text:'Leaves formal schooling after the 5th grade, and works as a delivery boy'
            },
            {   
                year:'1939',
                text:'Calls his first strike while working at Mrs. Wagner’s Pies in Newark, NJ.'
            },
            {   
                year:'1939',
                text:'Joins Merchant Marine at 15, lying about his age to enlist'
            },
            {   
                year:'1945',
                text:'After the WWII, Jimmy finds employment as a steward on ships'
            },
            {   
                year:'1946',
                text:'ILWU sugar strike in Hawaii'
            },
            {   
                year:'1947',
                text:'Jimmy moves to San Francisco'
            },
            {   
                year:'1948',
                text:'Becomes member of The National Union of Marine Cooks and Stewards'
            },
            {   
                year:'1952',
                text:'Elected chairman of Local 6 Legislative Congress'
            },
            {   
                year:'1953',
                text:'Joins the ILWU warehouse workers local in San Francisco',
                description:'Falls victim to the McCarthy-era Coast Guard screening program and is forced to leave the Merchant Marine; he joins the ILWU warehouse workers local in San Francisco'
            },
            {   
                year:'1956',
                text:'Transfers to Local 34 (Ships Clerks) in 1956'
            },
            {   
                year:'1960',
                text:'Elected Vice President of Local 34'
            },
            {   
                year:'1961',
                text:'Elected President of Local 34',
                description:'Jimmy advanced quickly in the ranks of the ILWU. As he said himself, “I never took a backseat when it came to formulating an opinion, nor was I bashful about expressing it.” (This World, 1991 date?)'
            },
            {   
                year:'1965',
                text:'Supports UFW Delano Grape Boycott alongside Cesar Chavez',
                description:''
            },
            {   
                year:'1969',
                text:'Elected to the ILWU International Executive Board',
                description:''
            },
            {   
                year:'1970',
                text:'Elected Vice President of the ILWU Northern California District Council',
                description:'Elected Vice President of the ILWU Northern California District Council; Elected secretary of the Longshore Negotiating Committee'
            },
            {   
                year:'1973',
                text:'Honored as “Labor Man of the Year” by Alameda County Central Labor Council',
                description:''
            },
            {   
                year:'1977',
                text:'Elected ILWU President',
                description:''
            },
            /*{   
                year:'1978',
                text:'ILWU longshoremen refuse to handle bomb parts headed to the Chilean military junta',
                description:''
            },
            {   
                year:'1980',
                text:'ILWU longshore workers boycott military cargo bound for El Salvador in protest of government-sanctioned death squads',
                description:''
            },*/
            {   
                year:'1980',
                text:'The IBU becomes the ILWU’s maritme division',
                description:'Herman helps bring the Inlandboatmen’s Union (IBU), a Pacific Coast union that originated in San Francisco in 1918 whose membership includes ferry, tug and barge, and seafood workers.  The IBU becomes the ILWU’s maritme division'
            },
            {   
                year:'1982',
                text:'Appointed to the San Francisco Port Commission',
                description:''
            },

            {   
                year:'1984',
                text:'ILWU boycotts South African cargo in anti-apartheid solidarity.',
                description:'ILWU longshoremen engage in a week-long boycott of South African cargo in anti-apartheid solidarity'
            },
            {   
                year:'1989',
                text:'ILWU Salvadoran coffee boycott.',
                description:''
            },
            {   
                year:'1991',
                text:'Herman retires from the ILWU',
                description:''
            },
            {   
                year:'1994',
                text:'Awarded Maritime Order of Merit and Rank of Commander',
                description:'The Port of San Francisco awards Herman the Maritime Order of Merit and Rank of Commander'
            },
            {   
                year:'1996',
                text:'Appointed chairman of Bay Dredging Action Coalition',
                description:'Herman appointed chairman of Bay Dredging Action Coalition which successfully advocated to dredge deeper into the Bay to allow heavier cargo to enter the Port of Oakland'
            },
            {   
                year:'1997',
                text:'Moves to Delancey Street Foundation during final months of his life',
                description:''
            },
            {   
                year:'1998',
                text:'Passes away at age 74, surrounded by friends',
                description:''
            },


        ];
        
        $scope.images = [
            {   
                id:1, pos:'top', quote:'',
                description:'Herman was born in Newark, New Jersey on August 21, 1924. His father, Milton Sr., was a school janitor. His mother, Laurine, was a housewife who passed away when Herman was twelve years old. He was the middle of two brothers, Milton Jr. and Rodman. From left: Herman, Rodman, their father, and Milton Jr.'
            },
            {   
                id:2, pos:'bottom', quote:'',
                description:'At age 15 Jimmy called his first strike while working at Mrs. Wagner’s Pies in Newark, NJ. It lasted just half a day, but it resulted in a raise of 2 cents an hour on the $5 a day the 250 workers in the plant had been earning.'
            },
            {   
                id:3, pos:'top',
                quote:'“Work was a condition of survival”',
                description:'Herman worked all of his life, and to him, “Work was a condition of survival.” San Francisco mayor Art Agnos, a close friend and neighbor to Herman, said “it was from his early life, growing up in the Depression and being fiercely independent, that he developed his empathy for others.”'
            },
            {   
                id:4,
                quote:'', pos:'bottom',
                description:'The 1934 Pacific Coast Maritime Strike stalled shipping at ports thoroughout the western United States. Longshoremen struck in May to protest unfair hiring practices and to call for better working conditions.  In July, two San Francisco strike supporters were shot and killed by police, and many more were injured in the event which became known as “Bloody Thursday.” Following their deaths, labor unions galvanized to shut down the city of San Francisco in a general strike that rocked the nation. In the arbitration that followed, the union was awarded most of its demands, including a union-controlled hiring hall and a labor contract that extended to all ports along the coast.'
            },
            {   
                id:5, pos:'top',
                quote:'',
                description:'Herman left home at the age of 15 to join the Merchant Marine, lying about his age in order to enlist. His first stop was on a freighter headed for the U.S. invasion of North Africa in 1942.'
            },
            {   
                id:6, pos:'bottom',
                quote:'“A great deal of wisdom resided in those ships”',
                description:'Herman was a voracious reader all his life, and prided himself on his self-taught education. He used his time in the Merchant Marine to read everything he could. Karl Marx was especially influential. He reminisced later that “[Sailing was a lonely life] but it provided the opportunity to read an extraordinary amount about history, the classics, the great events in time. And you learned just by listening. A great deal of wisdom resided in those ships.”'
            },
            {   
                id:7, pos:'bottom',
                quote:'',
                description:'Herman (right) and friends during the World War II.'
            },
             {   
                id:8, pos:'bottom',
                quote:'“The great fever of patriotism”',
                description:'His zeal for unionism merged with what he described as ‘the great fever of patriotism’ during World War II. Both offered ‘great clarity of vision’ -- unionism, because it led ‘to joining with fellow workers to bargain and, if necessary, to struggle collectively in order to get any kind of a decent shake;’ and patriotism, because the war provided ‘such a sense of unity, such national commitment that there was no confusion at all.’”'
            },
            {   
                id:9, pos:'top',
                quote:'',
                description:'Herman (third from left) was an avid poker player all his life.'
            },
            {   
                id:10, pos:'bottom',
                quote:'', 
                description:'After the war, Herman worked as a steward on the Matson Lurline luxury ocean liner on cruises between San Francisco and Honolulu. In 1946, Herman led a walkout of the Marine Cooks and Stewards when the Lurline was docked in Honolulu in solidarity with an ILWU sugar workers strike foreconomic gains and strengthened union recognition The Lurline sat in port for six months, and the sugar strike was ultimately successful.'
            },
            {   
                id:11, pos:'top',
                quote:'',
                description:'Herman joined the Marine Cooks and Stewards Union, which welcomed a diverse membership, since many crew members cooking and cleaning on the cruise ships were African-American or other ethnic minorities. Some were gay.'
            },
            {   
                id:12,
                quote:'', pos:'top',
                description:'Herman after moving to San Francisco.'
            },
            {   
                id:13, pos:'top',
                quote:'',
                description:'The San Francisco Port around the time when Herman worked in the waterfront warehouses.'
            },
            {   
                id:14, pos:'bottom',
                quote:'',
                description:'After leading a strike of the Marine Cooks and Stewards aboard the Lurline ocean liner he was forbidden from working aboard ships, and found employment in the San Francisco Port warehouses.'
            },
            {   
                id:15, pos:'top',
                quote:'',
                description:'Herman joined the ILWU Local 6 in 1953, and quickly put his organizing skills to use in San Francisco warehouses.'
            },
             {   
                id:16, pos:'top',
                quote:'',
                description:'Jimmy was an ally of the United Farm Workers’ (UFW) efforts to organize and continued to support that union throughout his career. In this photo, Herman speaks with UFW leader Cesar Chavez in 1974.',
                caption: 'Photo credit: Bob Fitch Photography Archive, Department of Special Collections, Stanford University'
            },
            {   
                id:17, pos:'bottom',
                quote:'',
                description:'Herman, Joan Baez and Cesar Chavez sing during a memorial service for UFW member Juan de la Cruz, who was shot and killed by scabs on a UFW picket line in 1973. Photo credit: Bob Fitch Photography Archive, Department of Special Collections, Stanford University'
            },
            {   
                id:18, pos:'top', quote:'',
                description:'Herman marching in support of the United Farm Workers with Catholic priest Eugene J. Boyle, UFW President Cesar Chavez, and California State Senator George Moscone in 1972.'
            },
            {   
                id:19, pos:'bottom',
                quote:'',
                description:'In 1977, Herman succeeded Harry Bridges as ILWU President. Bridges was a leader of the 1934 maritime strike and had been President of the ILWU since its founding. “Jimmy’s mastery of the economics of the maritime industry and his command of parliamentary procedure made him the only human being who could successfully fill Bridges’ shoes.” (Dave Jenkins, interviewed in This World, 1991)'
            },
            {   
                id:20, pos:'top', quote:'“Get a job, join a union”',
                description:'Herman grew up in a time when “Get a job, join a union” was the motto for most people in America. But his road to leadership, he said, “emerged from the working life of the union. It’s not something you plan for like a doctor or a lawyer, but is accidental. You don’t prepare, you simply find yourself in a situation that is unbelievably democratic, where everyone has license to advocate any point of view. You learn to survive amid extraordinary dissent, and you learn to be careful in your judgment of the license you have.” (This World, 1991)'
            },
            {   
                id:'20a', pos:'top', quote:'',
                description:'Jimmy helps incorporate the Inlandboatmen’s Union (IBU), a Pacific Coast union that originated in San Francisco in 1918 whose membership includes ferry, tug and barge, and seafood workers, into the ILWU’s maritime division.'

            },
            {   
                id:21, pos:'bottom',
                quote:'',
                description:'Herman on the waterfront with former San Francisco mayor and longtime friend Art Agnos. Herman served on the Port Commission under four mayoral administrations.'
            },
            {   
                id:22, pos:'top', quote:'',
                description:'On April 11, 1985, Herman was arrested during a nonviolent sit-in at the South Africa Airways offices to protest that country’s apartheid government.'
            },
            {   
                id:23, pos:'bottom', quote:'',
                description:'Herman helped lead efforts to boycott coffee imported from El Salvador in protest of that country’s death squads and the United States’ tacit support of the Salvadoran government.'
            },
            {   
                id:24, pos:'bottom', quote:'“Elevating their knowledge and their faith in themselves”',
                description:'Herman became closely involved with the Delancey Street Foundation after his retirement.. “Two or three times a week he stops by to have coffee with the residents, sitting with them, talking, getting them interested in issues outside themselves, literally elevating their knowledge and their faith in themselves.” - Mimi Silbert, Delancey Street Founder and CEO'
            }

        ];

        $scope.startScrollToTarget = function(targetScroll){
            $scope.targetScrollTo = targetScroll;
            clearInterval($scope.scrollInterval);
            $scope.scrollInterval = setInterval($scope.scrollToPosition,5);
        }

        $scope.scrollToPosition = function(){
            $scope.mainView.scrollLeft += ($scope.targetScrollTo-$scope.mainView.scrollLeft)/50;
            scrollDif = Math.abs($scope.mainView.scrollLeft - $scope.targetScrollTo);
           // console.log("scrollDif: "+scrollDif);
            if( Math.abs($scope.mainView.scrollLeft - $scope.targetScrollTo) <= 1){
                clearInterval($scope.scrollInterval);
            }
            
            $scope.update();
        }

        //INIT
        $scope.init = function(){
            if(!$rootScope.timelineScroll){
                $rootScope.timelineScroll = 1;
            }

            //update scroll on page load
            $scope.mainView = document.getElementById("main-view");
           // $rootScope.timelineScroll += 100;
           // $scope.mainView.scrollLeft = $rootScope.timelineScroll;
           $scope.startScrollToTarget($rootScope.timelineScroll);

            console.log("start scroll at: "+$rootScope.timelineScroll);
            $scope.show = true;
            //$scope.$apply();
            clearInterval($scope.initInterval);

        }
        //$scope.$evalAsync($scope.init );

        $scope.initInterval = setInterval($scope.init, 10);

}]);
