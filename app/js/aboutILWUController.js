angular
    .module('jrhApp')
    .controller('aboutILWUController', ['$scope', '$stateParams', '$state', 'WebSocket', function($scope, $stateParams, $state) {

   // $scope.showMouse = true;
    $scope.showHomeScreen = false;
    $scope.ilwuId = $stateParams.ilwu;
    $scope.setCurrentIlwu = setCurrentIlwu;
    $scope.clearCurrentIlwu = clearCurrentIlwu;

    console.log($stateParams);

    function setCurrentIlwu(ilwu) {
        console.log(ilwu.id);
        //WebSocket.send(issue.id); //send issue to LED Control machine
    }

    function clearCurrentIlwu() {
        console.log("clearing issue");
        //WebSocket.send(0);
    }

    $scope.ilwuPages = [
        {   
            id: 1,
            title:'Union Democracy', 
            description:'A firm commitment to union democracy and membership participation has been the hallmark of the International Longshore and Warehouse Union since its beginning in the 1930s.  This is nearly unique in U.S. economic and industrial life.  In the ILWU, any member can speak at a union meeting and potentially influence overall ILWU policy. Explaining the union’s strength and its ability to command a dedicated following, Harry Bridges, the ILWU’s founding International President, said, "It was about democracy. We said that the rank and file had the right to decide, and if you gave them the facts, they’d make the right decision."', 
            imageID:'uniondemocracy', 
            caption:'ILWU Longshore workers voting in a union meeting (ILWU Archives)'
        },
        {   
            id: 2,
            title:'Who the ILWU Represents', 
            description:'The International Longshore and Warehouse Union (ILWU) was founded following a major 1934 West Coast waterfront strike and is headquartered in San Francisco.  The original core group of workers loaded and unloaded ships’ cargo by hand using strength, skill, and ingenuity. The term "longshoreman" originated in the early days. When a ship approached shore, the captain, seeking extra hands to work cargo, beckoned to those in need of jobs, yelling "men along the shore." Today, the ILWU represents over 40,000 workers who belong to 60 local unions and divisions located along the U.S. West Coast, plus Hawaii, Panama and Canada. Almost 20,000 dockworkers continue to work on the waterfront at twenty-nine West Coast ports. Other ILWU members are employed in a wide variety of other industries, including hotels and tourism, industrial and warehousing, mining, agriculture, maritime, and retail.', 
            imageID:'representation', 
            caption:'A longshore worker on the docks in Southern California (ILWU Archives)'
        },
        {
            id: 3,
            title:'Ten Guiding Principles', 
            description:'The Ten Guiding Principles of the ILWU. I. A Union is built on its members. II. Labor unity is at all times the key for a successful economic advancement. III. Workers are indivisible. IV. “To help any worker in distress” must be a daily guide in the life of every trade union and its individual members. V. Any union, if it is to fulfill its appointed task, must put aside all internal differences and issues to combine for the common cause of advancing the welfare of the membership. VI. The days are long gone when a union can consider dealing with single employers. VII. Just as water flows to its lowest level, so do wages if the bulk of the workers are left unorganized. VIII. The basic aspiration and desires of the workers throughout the world are the same. IX. A new type of unionism is called for which does not confine its ambitions and demands only to wages X. Jurisdictional warfare and jurisdictional raiding must be outlawed by labor itself.', 
            imageID:'principles', 
            caption:''
        }
    ];

}]);