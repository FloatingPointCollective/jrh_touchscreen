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

        $scope.clickOnDetailById =function(id) {
            //only if there is no scroll
            if(($scope.xStart - $scope.xEnd)==0){
                //find the image by id
                for (var i = $scope.images.length - 1; i >= 0; i--) {
                    if($scope.images[i].id == id){
                        $state.go('timeline_detail',{detailID:i});
                        break;
                    }
                };
            }
        }

        //SCROLLING
        //drag to scroll functionality
        $scope.onMouseMove = function ($event) {
            if($scope.dragging){
               // console.log("mousemove in timeline ");
               // console.log("$scope.xStart: "+$scope.xStart);
               // console.log("$event.x: "+$event.x);
                scrollto = ($scope.scrollStart - $event.x);
                //console.log("scrollto: "+scrollto);
                $scope.mainView.scrollLeft = scrollto;
                $scope.scrollVel = ($scope.lastX-$event.x);

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
            clearInterval($scope.scrollToStopInterval);
            clearInterval($scope.scrollInterval);
        }

        $scope.stopDrag = function ($event) {
            $scope.dragging = false; 
            $scope.xEnd = $event.x;

            //keep scrolling based on speed, slow to a stop
            if(Math.abs($scope.scrollVel)>1){
                $scope.scrollToStopInterval = setInterval($scope.scrollToStop, 30);
            }
        }

        $scope.scrollToStop = function(){
            $scope.mainView.scrollLeft += $scope.scrollVel;
            $scope.scrollVel = $scope.scrollVel*.9;

            console.log("$scope.scrollVel: "+$scope.scrollVel);

            if( Math.abs($scope.scrollVel) <= 1){
                clearInterval($scope.scrollToStopInterval);
            }

            $rootScope.timelineScroll = $scope.mainView.scrollLeft;
            
            $scope.update();
            $scope.$apply();
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
            $scope.eventsX = -$scope.mainView.scrollLeft*.32;
            
           // $scope.eventsX = -$rootScope.timelineScroll/1.1;
            //console.log("$scope.eventsX: "+$scope.eventsX);
            //LEFT ARROW
            if($scope.mainView.scrollLeft <= 5){
                $scope.showLeftArrow = false;
            }
            else{
                $scope.showLeftArrow = true;
            }

            //RIGHT ARROW
            timelineRightEdge = $scope.mainView.scrollWidth-window.innerWidth;
            console.log("timeline right edge: "+timelineRightEdge);
            console.log("$scope.mainView.scrollLeft: "+$scope.mainView.scrollLeft);
            if($scope.mainView.scrollLeft >= timelineRightEdge-5){
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
                text:'Jimmy is born in New Jersey',
                imageID:1
            },
            {   
                year:'1934',
                text:'Big strike hits Pacific Coast',
                imageID:4
            },
            {   
                year:'1939',
                text:'Young Jimmy calls a strike',
                imageID:2
            },
            {   
                year:'1945',
                text:'Jimmy joins the union',
                imageID:11
            },
            {   
                year:'1946',
                text:'Jimmy backs major Hawaiian sugar strike',
                imageID:10
            },
            {   
                year:'1953',
                text:'Coast Guard screening hits Jimmy',
                imageID:13
            },
            {   
                year:'1956',
                text:'Jimmy joins ILWU shipclerks’ Local 34',
                imageID:15
            },
            {   
                year:'1961',
                text:'Jimmy elected new ILWU Local 34 President',
                imageID:'14a'
            },
            {   
                year:'1965',
                text:'Jimmy rallies support for Cesar Chavez and farmworkers',
                imageID:16
            },
            {   
                year:'1973',
                text:'Jimmy honored as Labor Man of the Year',
                imageID:20
            },
            {   
                year:'1977',
                text:'Jimmy succeeds Harry Bridges as ILWU International President',
                imageID:19
            },
            {   
                year:'1978',
                text:'ILWU boycotts Chilean junta',
                imageID:23
            },
            {   
                year:'1980',
                text:'The Inlandboatmen’s Union joins the ILWU.',
                imageID:'20a'
            },
            {   
                year:'1982',
                text:'Jimmy appointed City Port Commissioner',
                imageID:21
            },

            {   
                year:'1984',
                text:'ILWU Longshoremen protest South African apartheid',
                imageID:22
            },
            /*{   
                year:'1989',
                text:'ILWU Salvadoran coffee boycott.',
                description:''
            },*/

            {   
                year:'1991',
                text:'Jimmy retires as ILWU President',
                imageID:24
            },
            {   
                year:'1994',
                text:'Jimmy awarded Maritime Order of Merit',
                imageID:24
            },
            /*{   
                year:'1996',
                text:'Appointed chairman of Bay Dredging Action Coalition',
                description:'Herman appointed chairman of Bay Dredging Action Coalition which successfully advocated to dredge deeper into the Bay to allow heavier cargo to enter the Port of Oakland'
            },
            {   
                year:'1997',
                text:'Moves to Delancey Street Foundation during final months of his life',
                description:''
            },*/
            {   
                year:'1998',
                text:'Jimmy dies at 73',
                imageID:25
            },


        ];
        
        $scope.images = [
            {   
                id:1, pos:'top', quote:'',
                caption: 'From left: Jimmy, Rodman, Milton Sr., and Milton Jr. Photo courtesy Art Agnos.'
            },
            {   
                id:3, pos:'bottom',
                quote:'“Work was a condition of survival”', width:"400",
                sources: ['This World, December 15, 1991','San Francisco Examiner, March 22, 1998']
            },
            {   
                id:2, pos:'top', quote:'',
                sources: ['This World, December 15, 1991'],
                note:"Pie Pan"
            },
            {   
                id:4,
                quote:'', pos:'bottom',
                caption: 'Longshoremen confront police in San Francisco, 1934.  Photo: San Francisco Public Library'
            },
            {   
                id:5, pos:'top',
                quote:'', note:"Sailor Jimmy"
            },
           /* {   
                id:6, pos:'top',
                quote:'“A great deal of wisdom resided in those ships”',
                sources: ['This World, December 15, 1991'],
                width:'300'
            },*/
            {   
                id:10, pos:'top',
                quote:'', note:"Lurlile Ship"
            },
            {   
                id:11, pos:'bottom',
                quote:'',
                sources: ['This World, December 15, 1991'],
                note:"kitchen"
            },
            {   
                id:13, pos:'bottom',
                quote:'',
                caption:'San Francisco Waterfront ca 1945. Photo: San Francisco Maritime National Historical Park',
                note:"SF Port Photo"
            },
            {   
                id:12,
                quote:'', pos:'bottom',
                description:'Herman after moving to San Francisco.'
            },
            {   
                id:'14a', pos:'bottom',
                quote:'“I never took a backseat”', width:"400",
                sources: ['This World, December 15, 1991']
            },
            /*{   
                id:18, pos:'bottom', quote:'',
                caption:'ILWU Archives, photo by George Kruse',
                note:"UFW"
            },*/
            {   
                id:20, pos:'bottom', quote:'“Get a job, join a union”', width:"400",
                sources: ['This World, December 15, 1991']
            },
            {   
                id:23, pos:'bottom', quote:'', note:"Junta boycott"
            },
            {   
                id:21, pos:'bottom',
                quote:'',
                caption:'ILWU Archives, photo by George Kruse',
                note:"with agnos"
            },

             /*
            {   
                id:24, pos:'bottom', quote:'“Elevating their knowledge and their faith in themselves”',
                width:1150
            },*/



           /* {   
                id:7, pos:'bottom',
                quote:'', note:"with friends"
            },

             {   
                id:8, pos:'bottom',
                quote:'“The great fever of patriotism”',
                sources: ['This World, December 15, 1991']
            },*/
            /*{   
                id:9, pos:'top',
                quote:'',
                note:'Herman (third from left) was an avid poker player all his life.'
            },*/
            {   
                id:15, pos:'top',
                quote:'', caption:'An ILWU Shipclerk on the job. Source: ILWU Archives.'
            },
             {   
                id:16, pos:'top', quote:'',
                caption: 'Photo: Bob Fitch Photography Archive, Department of Special Collections, Stanford University'
            },
             {   
                id:19, pos:'top', quote:'', caption:"Photo: ILWU Archives",
                sources: ['This World, 1991'],
                note:"with Harry Bridges"
            },
              {   
                id:'20a', pos:'top', quote:'',
                caption:'Jimmy joins the Inlandboatmen’s picket line during Washington State Ferries strike, 1980.  Photo: Seattle Times'
            },
            {   
                id:22, pos:'top', quote:'', caption:'ILWU Archives',
                note:"anti-aparthied arrest"
            },
            {   
                id:24, pos:'top', quote:'', caption:'',
                note:"Jimmy portrait at Local 34, Jimmy retires"
            },
            {   
                id:25, pos:'bottom', quote:'',
                note:"death, final photo"
            }
            

           /* {   
                id:14, pos:'bottom',
                quote:''
            },*/
            
            
            /*{   
                id:17, pos:'bottom', quote:'',
                caption:'ILWU Archives'
            },
            */
            

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
            $scope.$apply();
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
