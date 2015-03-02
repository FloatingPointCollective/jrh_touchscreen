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
            $scope.eventsX = -$scope.mainView.scrollLeft*.4;
            
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
           // console.log("timeline right edge: "+timelineRightEdge);
            if($scope.mainView.scrollLeft >= timelineRightEdge){
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
                text:'Coast Guard screening hits Jimmy.',
                imageID:13
            },
            {   
                year:'1956',
                text:'Jimmy joins ILWU shipclerks’ Local 34'
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
                text:'Jimmy succeeds Harry Bridges as ILWU President',
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
                caption: 'From left: Jimmy, Rodman, Milton Sr., and Milton Jr.'
            },
            {   
                id:2, pos:'bottom', quote:'',
                sources: ['This World, December 15, 1991']
            },
            {   
                id:3, pos:'top',
                quote:'“Work was a condition of survival”',
                sources: ['This World, December 15, 1991','San Francisco Examiner, March 22, 1998']
            },
            {   
                id:4,
                quote:'', pos:'bottom',
                caption: 'Photo: San Francisco Public Library'
            },
            {   
                id:5, pos:'top',
                quote:'',
                description:'Herman left home at the age of 15 to join the Merchant Marine, lying about his age in order to enlist. His first stop was on a freighter headed for the U.S. invasion of North Africa in 1942.'
            },
            {   
                id:6, pos:'bottom',
                quote:'“A great deal of wisdom resided in those ships”',
                sources: ['This World, December 15, 1991']
            },
            {   
                id:7, pos:'bottom',
                quote:''
            },
             {   
                id:8, pos:'bottom',
                quote:'“The great fever of patriotism”',
                sources: ['This World, December 15, 1991']
            },
            {   
                id:9, pos:'top',
                quote:'',
                description:'Herman (third from left) was an avid poker player all his life.'
            },
            {   
                id:10, pos:'bottom',
                quote:''
            },
            {   
                id:11, pos:'top',
                quote:'',
                sources: ['This World, December 15, 1991']
            },
            {   
                id:12,
                quote:'', pos:'top',
                description:'Herman after moving to San Francisco.'
            },
            {   
                id:13, pos:'top',
                quote:'',
                caption:'Photo: San Francisco Maritime National Historical Park'
            },
            {   
                id:14, pos:'bottom',
                quote:''
            },
            {   
                id:'14a', pos:'top',
                quote:'“I never took a backseat”',
                sources: ['This World, December 15, 1991']
            },
           /* {   
                id:15, pos:'top',
                quote:'',
                description:'Herman joined the ILWU Local 6 in 1953, and quickly put his organizing skills to use in San Francisco warehouses.'
            },*/
             {   
                id:16, pos:'top', quote:'',
                caption: 'Photo: Bob Fitch Photography Archive, Department of Special Collections, Stanford University'
            },
            {   
                id:17, pos:'bottom', quote:'',
                caption:'ILWU Archives'
            },
            {   
                id:18, pos:'top', quote:'',
                caption:'ILWU Archives, photo by George Kruse'
            },
            {   
                id:19, pos:'bottom', quote:'', caption:"Photo: ILWU Archives",
                sources: ['This World, 1991']
            },
            {   
                id:20, pos:'top', quote:'“Get a job, join a union”',
                sources: ['This World, December 15, 1991']
            },
            {   
                id:'20a', pos:'top', quote:'',
                caption:'Jimmy visits in Inlandboatmen’s picket of the Washington State Ferries, 1980.  Photo: Seattle Times'
            },
            {   
                id:21, pos:'bottom',
                quote:'',
                caption:'ILWU Archives, photo by George Kruse'
            },
            {   
                id:22, pos:'top', quote:'', caption:'ILWU Archives'
            },
            {   
                id:23, pos:'bottom', quote:''
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
