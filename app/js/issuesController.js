angular
    .module('jrhApp')
    .controller('issuesController', ['$scope', '$stateParams', '$state', 'WebSocket', function($scope, $stateParams, $state, WebSocket) {

    $scope.showMouse = true;
    $scope.showHomeScreen = false;
    // $scope.showIssues= true;
    // $scope.activeAboutPage = null;
    // $scope.debug = false;
    $scope.issueId = $stateParams.issue;
    $scope.setCurrentIssue = setCurrentIssue;
    $scope.clearCurrentIssue = clearCurrentIssue;

    console.log($stateParams);

    // $scope.getIssue = function(id) {
    //     return $scope.issuePages.filter(function(issue) {
    //         return issue.id == id;
    //     })[0];
    // }

    // $scope.issue = $scope.getIssue($stateParams.issueId);

    function setCurrentIssue(issue) {
        console.log(issue.id);
        WebSocket.send(issue.id);
        //$scope.currentIssue = issue;
//        $state.go('quote', {issue: issue.title});
    }

    function clearCurrentIssue() {
        console.log("clearing issue");
        WebSocket.send(0);
    }

    $scope.issuePages = [
        {   
            id: 1,
            title:'Labor Rights', 
            quote:'"The ultimate corruption is seen in the vast numbers of unemployment, the denial of a secure and dignified retirement, the denial of childcare to working mothers."', 
            description:'Herman devoted his life to improving the situation of working people everywhere. His labor activism began when he joined the Marine Cooks and Stewards Union, which advocated to increase the wages for “low-level” jobs, such as cooking and cleaning, on luxury ocean liners. After settling in San Francisco in 1947, he spent the rest of his life fighting for fair wages and  benefits for his fellow ILWU constituents, as well as for members of other unions and working people worldwide.', 
            imageID:'laborRights', 
            caption:'Caption about Labor Rights'
        },
        {   
            id: 2,
            title:'Rehabilitation', 
            quote:'"Mimi Silbert created an organization that resurrects people, that understands human failure, that has a point of view about what should and can and must be done … It is a microcosm worthy of everybody imitating, where people of all colors and races and ethnic groups, with every description of tough backgrounds you can imagine, come together, form a family, emerge as the people they were intended to be with their lives straightened out because there is such an organization under such dedicated leadership."', 
            description:'Herman approached Mimi Silbert in the early 1970s after he heard about the Delancey Street Foundation, a center she founded to treat people with drug and alcohol addiction, and provide employment for the homeless and ex-convicts getting back on their feet. Herman was worried about members of the union with serious drug and alcohol problems, and wanted to find a way to help them. Under his lead, the ILWU formed a very progressive policy towards members with alcoholism and drug addiction, which advocated treatment over termination.', 
            imageID:'rehabilitation', 
            caption:'From Delancey Street Website - Mimi Silbert, founder of Delancey Street, then San Francisco Mayor Dianne Feinstein and James R. Herman break ground at the future home of the Delancey Street Foundation in Pacific Heights.'
        },
        {
            id: 3,
            title:'Economic Justice', 
            quote:'"How do you explain the American dream to kids without school lunches, to teenagers with nothing better to do than hang out, or to workers and farmers whose homes and farms have been foreclosed, to people without medical care who are physically hurting, and to some - too many - who are without food?"', 
            description:'Herman dreamed of a world where the working class got a fair chance and spent his career advocating for stable jobs for underprivileged citizens. He criticized President Reagan’s “trickle-down” economic policy and his military spending, arguing that they would increase inflation, imbalance the federal budget, and make the rich richer and the poor poorer. He pushed the union to strategize and unify to create a coherent economic program that supported a bigger job market and higher wages. Just as Herman advocated for the rights of union members, like better wages and health care benefits, he also fought for job creation so that everyone who wanted a job could have one. He led the union during a time of transition in the United States, from a manufacturing to a service-based economy, and tried to accommodate modernization and mechanization while maintaining job placement for ILWU members. He sympathized with those who wanted to work but couldn’t, and fought to find a balance with the shipping companies to maintain longshore jobs along the coast.', 
            imageID:'econjustice', 
            caption:'Caption about Economic Justice'
        },
        {   
            id: 4,
            title:'Civil Rights', 
            quote:'"Racism runs deep in this country. It got off the boat with the first settlers and the first slaves hundreds of years ago. We have made some small progress perhaps, but I fear that in times of great stress and uncertainty that it will strike with renewed venom. We must be committed as a union that our full resources will be used in the struggle against it."', 
            description:'Herman began his union career in the Marine Cooks and Stewards Union, one of the first racially integrated unions in the U.S. When he joined the ILWU it already had a reputation for fair employment for workers of all ethnicities. As ILWU President he worked alongside other union leaders to implement contracts, memorandums, and agreements that clearly defined the policies of the ILWU to eliminate racial discrimination. Herman also fought against racial prejudice outside the union. He led numerous boycotts against South Africa’s apartheid government, even getting arrested for his actions at one anti-apartheid protest in 1985. He also pushed for reparations to workers of Japanese heritage who had been interned during WWII. Herman consistently voiced his concerns to allow immigrants to have equal working rights as US Citizens. His work in support of the United Farm Workers union benefitted many immigrants from Mexico and Latin America, who came north to work in low paid agriculture jobs in California.', 
            imageID:'civilrights', 
            caption:'Herman and Desmond Tutu at an anti-apartheid rally'
        },
        {
            id: 5,
            title:'Affordable Housing', 
            quote:'"There is no greater priority in San Francisco than the construction of housing for low and middle income working people."', 
            description:'Herman firmly backed efforts to increase affordable housing in San Francisco, and did not want to see the working class driven out of the city. In 1963, under the leadership of Lou Goldblatt, the ILWU battled with the federal government and real estate companies to build St. Francis Square, a housing development for union members in the heart of the city that was owned and run by the residents. Building on the success of St. Francis Square, Herman continued affordable housing efforts in 1984 with the Amancino Ergina Affordable Housing project, which advanced pension funds to build low- and moderate-income family housing in San Francisco.', 
            imageID:'affordablehousing', 
            caption:'Amancino Ergina Groundbreak - Western Addition, 1984'
        },
        {
            id: 6,
            title:'International Solidarity', 
            quote:'"[We have] the solemn obligation of […] looking at the world around us, where there are things happening that we disagree with […] and [mobilizing] to extend a hand of friendship and brotherhood to those people engaged in struggle for democracy and decency."', 
            description:'Just as Herman fought for the rights of union members and working people, he also helped shaped the policies of the ILWU to reflect a larger worldview, supporting the rights of marginalized people all over the world. Herman traveled to Japan, Canada, Australia and other countries with active ports to help international unions organize. He also lent support of the union to help shape international policy, such as protesting the apartheid government in South Africa, and boycotting Salvadoran coffee in protest against the brutal death squads of the government in El Salvador.', 
            imageID:'intlsolidarity', 
            caption:'Caption about International Solidarity'
        }
    ];

    


}]);