angular
    .module('jrhApp')
    .controller('issuesController', ['$scope', '$stateParams', '$state', 'WebSocket', function($scope, $stateParams, $state, WebSocket) {

    $scope.showMouse = true;
    $scope.showHomeScreen = false;
    $scope.issueId = $stateParams.issue;
    $scope.setCurrentIssue = setCurrentIssue;
    $scope.clearCurrentIssue = clearCurrentIssue;

    console.log($stateParams);

    function setCurrentIssue(issue) {
        console.log(issue.id);
        WebSocket.send(issue.id); //send issue to LED Control machine
    }

    function clearCurrentIssue() {
        console.log("clearing issue");
        WebSocket.send(0);
    }

    $scope.issuePages = [
        {   
            id: 1,
            title:'Labor Rights', 
            quote:'“The ultimate corruption is seen in the vast numbers of unemployment, the denial of a secure and dignified retirement, the denial of childcare to working mothers.”',
            year:"1973",
            description:'Jimmy devoted his life to helping working people everywhere.  His labor activism began when he led a successful strike at age 15.  His commitment expanded when he joined the National Union of Marine Cooks and Stewards (MCS), an organization representing workers on ocean liners and other vessels.  Jimmy identified with the MCS’s inclusionary, anti-racist politics of the 1940’s. His work with the MCS drew him to the International Longshore and Warehouse Union, which he later joined a few years after settling in San Francisco in 1947.  In the ILWU, he spent decades advocating for universal workers’ rights.', 
            imageID:'laborRights', 
            caption:'Leroy King, ILWU Local 6; Jack Henning, California Labor Federation; Cesar Chavez, United Farm Workers; unidentified; and Jimmy Herman protest against California Proposition 22, which would have outlawed strikes and job actions by agricultural workers, 1972 (ILWU Archives).'
        },
        {   
            id: 2,
            title:'Rehabilitation', 
            quote:'"[The Delancey Street Foundation is] an organization that resurrects people, that understands human failure, that has a point of view about what should and can and must be done … It is a microcosm worthy of everybody imitating, where people of all colors and races and ethnic groups, with every description of tough backgrounds you can imagine, come together, form a family, emerge as the people they were intended to be with their lives straightened out because there is such an organization under such dedicated leadership."',
            year:"1991",
            description:'Jimmy believed in giving people a second chance.  In the 1970s, he discovered the Delancey Street Foundation, a San Francisco nonprofit dedicated to treating people with drug and alcohol addiction and providing them with job training and employment. Jimmy worked with the International Longshore and Warehouse Union and the Port Commission to help the Delancey Street Foundation secure waterfront property for its housing and other facilities.  Jimmy was also integral in forming the ILWU’s progressive policies toward members with drug and alcohol addiction, advocating treatment over termination.', 
            imageID:'rehabilitation', 
            caption:'From Delancey Street Website - Mimi Silbert, founder of Delancey Street, then San Francisco Mayor Dianne Feinstein and James R. Herman break ground at the future home of the Delancey Street Foundation in Pacific Heights.'
        },
        {
            id: 3,
            title:'Economic Justice', 
            quote:'“How do you explain the American dream to kids without school lunches, to teenagers with nothing better to do than hang out, or to workers and farmers whose homes and farms have been foreclosed, to people without medical care who are physically hurting, and to some - too many - who are without food?”',
            year:"1983", 
            description:'Jimmy dreamed of a world in which the working class got a fair chance. He criticized President Ronald Reagan’s “trickle down” economic policies and U.S. military spending for perpetuating wealth inequality.  Under his leadership, the International Longshore and Warehouse Union fought for both improved working conditions for its members and job creation for all workers.  He struggled to preserve work opportunities as the U.S. changed from a manufacturing to a service economy while negotiating to preserve longshore jobs in an increasingly mechanized waterfront.', 
            imageID:'econjustice', 
            caption:'Jimmy speaks at United Farm Workers Convention, 1977 (ILWU Archives)'
        },
        {   
            id: 4,
            title:'Civil Rights', 
            quote:'“Racism runs deep in this country. It got off the boat with the first settlers and the first slaves hundreds of years ago. We have made some small progress perhaps, but I fear that in times of great stress and uncertainty that it will strike with renewed venom. We must be committed as a union that our full resources will be used in the struggle against it.”',
            year:"1981", 
            description:'Jimmy spent a lifetime calling for civil rights for all.  While still a young man, he joined the National Union of Marine Cooks and Stewards, one of the first racially integrated unions in the U.S. After joining the International Longshore and Warehouse Union, he fought discriminatory hiring and integrated his own local.  Jimmy’s anti-racist vision extended beyond the union hall and the workplace.  While he was ILWU International President, the union participated in civil rights protests, opposed apartheid by boycotting South African cargo, and advocated for reparations to Japanese Americans interned during World War II.', 
            imageID:'civilrights', 
            caption:'Jimmy meets with Desmond Tutu, 1986 (ILWU Archives, photo by George Kruse)'
        },
        {
            id: 5,
            title:'Affordable Housing', 
            quote:'“There is no greater priority in San Francisco than the construction of housing for low and middle income working people.”',
            year:"1978", 
            description:'Jimmy did not want to see the working class driven out of town due to high housing costs.  He advocated for increased low cost housing in San Francisco while building on the International Longshore and Warehouse Union’s record of investing in affordable developments.  In 1963, the ILWU drew upon longshore pension funds to build St. Francis Square, an affordable housing development owned and run by residents in the heart of the city.  Jimmy expanded upon such efforts in 1984 with the Amancio Ergina development, which also utilized union resources to build low and moderate income family housing.', 
            imageID:'affordablehousing', 
            caption:'Amancio Ergina Groundbreaking in San Francisco’s Western Addition, 1984 (ILWU Archives)'
        },
        {
            id: 6,
            title:'International Solidarity', 
            quote:'“[We have] the solemn obligation of … looking at the world around us, where there are things happening that we disagree with … and [mobilizing] to extend a hand of friendship and brotherhood to those people engaged in struggle for democracy and decency.”', 
            year:"1988",
            description:'The International Longshore and Warehouse Union has a storied history of working in solidarity with struggling people across the globe.  Jimmy’s predecessor, ILWU International President Harry Bridges, said, “sure as hell--that’s our job--that’s our privilege--that’s our right--that’s our duty.”  Jimmy carried on that tradition, traveling to Japan, Canada, Australia, and other countries to demonstrate ILWU solidarity. Under his leadership, the ILWU sent strong messages to countries with oppressive regimes, boycotting South African Cargo to protest apartheid, refusing to handle munitions headed to Chile to support a military junta, and refusing to unload Salvadoran coffee in response to death squads.', 
            imageID:'intlsolidarity', 
            caption:'Jimmy leads a boycott of Salvadoran coffee to protest the El Salvadoran government’s sanctioned death squads, 1989 (ILWU Archives)'
        }
    ];

}]);