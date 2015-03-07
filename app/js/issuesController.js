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
            description:'Jimmy Herman devoted his life to improving the situation of working people everywhere. His labor activism began when he joined the National Union of Marine Cooks and Stewards, which advocated increasing wages for “unskilled” jobs, such as cooking and cleaning, on luxury ocean liners. After settling in San Francisco in 1947, he spent the rest of his life fighting for fair wages and benefits for his fellow ILWU constituents, as well as for members of other unions and working people worldwide.', 
            imageID:'laborRights', 
            caption:'Leroy King, ILWU Local 6; Jack Henning, California Labor Federation, Cesar Chavez, United Farm Workers; and Jimmy Herman protest against Proposition 22, which woud have outlawed strikes and protests by farmworkers, in 1972 (ILWU Archives).'
        },
        {   
            id: 2,
            title:'Rehabilitation', 
            quote:'"Mimi Silbert created an organization that resurrects people, that understands human failure, that has a point of view about what should and can and must be done … It is a microcosm worthy of everybody imitating, where people of all colors and races and ethnic groups, with every description of tough backgrounds you can imagine, come together, form a family, emerge as the people they were intended to be with their lives straightened out because there is such an organization under such dedicated leadership."', 
            description:'Jimmy Herman approached Mimi Silbert in the early 1970s after he heard about the Delancey Street Foundation, a center she founded to treat people with drug and alcohol addiction and provide employment for the homeless and ex-convicts getting back on their feet. Herman was concerned about members of the union with drug and alcohol problems, and wanted to find a way to help them. Under his lead, the ILWU formed a very progressive policy towards members with alcoholism and drug addiction, which advocated treatment over termination.', 
            imageID:'rehabilitation', 
            caption:'From Delancey Street Website - Mimi Silbert, founder of Delancey Street, then San Francisco Mayor Dianne Feinstein and James R. Herman break ground at the future home of the Delancey Street Foundation in Pacific Heights.'
        },
        {
            id: 3,
            title:'Economic Justice', 
            quote:'“How do you explain the American dream to kids without school lunches, to teenagers with nothing better to do than hang out, or to workers and farmers whose homes and farms have been foreclosed, to people without medical care who are physically hurting, and to some - too many - who are without food?”', 
            description:'Jimmy Herman dreamed of a world where the working class got a fair chance, and he spent his career advocating for stable jobs for underprivileged citizens. He criticized President Ronald Reagan’s “trickle-down” economic policy and military spending, arguing that they would increase inflation, imbalance the federal budget, and make the rich richer and the poor poorer. He pushed the union to strategize and unify to create a coherent economic program that supported a bigger job market and higher wages. Just as Herman advocated for the rights of union members--like better wages and health care benefits--he also fought for job creation so that everyone who wanted a job could have one. He led the union during a time of transition in the United States from a manufacturing to a service-based economy and tried to accommodate modernization and mechanization while maintaining jobs for ILWU members.', 
            imageID:'econjustice', 
            caption:''
        },
        {   
            id: 4,
            title:'Civil Rights', 
            quote:'“Racism runs deep in this country. It got off the boat with the first settlers and the first slaves hundreds of years ago. We have made some small progress perhaps, but I fear that in times of great stress and uncertainty that it will strike with renewed venom. We must be committed as a union that our full resources will be used in the struggle against it.”', 
            description:'Herman began his union career in the the National Union of Marine Cooks and Stewards, one of the first racially integrated unions in the U.S. Later, he joined the ILWU, which  had a long-standing reputation for its anti-racist and inclusive politics. As ILWU President, Herman fought against racial prejudice both inside and outside the union. The ILWU participated in boycotts of cargo bound for South Africa to protest that nation’s apartheid government, and Herman was arrested at an anti-apartheid protest in 1985. Herman also pushed for reparations to American workers of Japanese heritage who had been interned during WWII. He consistently voiced his concerns to allow immigrants to have equal working rights as U.S. citizens. His work in support of the United Farm Workers Union benefitted many immigrants from Mexico and Latin America, who came north to work in low paid agriculture jobs in California.', 
            imageID:'civilrights', 
            caption:'Jimmy Herman meets with Desmond Tutu, 1986 (ILWU Archives, photo by George Kruse)'
        },
        {
            id: 5,
            title:'Affordable Housing', 
            quote:'“There is no greater priority in San Francisco than the construction of housing for low and middle income working people.”', 
            description:'Jimmy Herman firmly backed efforts to increase affordable housing in San Francisco, and did not want to see the working class driven out of the city. In 1963, under the leadership of Lou Goldblatt, the ILWU invested longshore pension funds to build St. Francis Square, an affordable housing development in the heart of the city that was owned and run by the residents. Building on the success of St. Francis Square, Herman continued affordable housing efforts in 1984 with the Amancio Ergina affordable housing project, which also utilized union resources to build low and moderate-income family housing in San Francisco.', 
            imageID:'affordablehousing', 
            caption:'Amancio Ergina Groundbreaking in San Francisco’s Western Addition, 1984 (ILWU Archives)'
        },
        {
            id: 6,
            title:'International Solidarity', 
            quote:'“[We have] the solemn obligation of … looking at the world around us, where there are things happening that we disagree with … and [mobilizing] to extend a hand of friendship and brotherhood to those people engaged in struggle for democracy and decency.”', 
            description:'Just as Jimmy Herman fought for the rights of union members and working people, he also helped shape ILWU Policies to reflect a larger worldview, supporting the rights of marginalized people all over the world. Herman traveled to Japan, Canada, Australia and other countries with active ports to show solidarity with international unions. He also lent the ILWU’s support to help shape international policy, such as protesting the apartheid government in South Africa, and boycotting Salvadoran coffee in protest against the Salvadoran government’s brutal death squads.', 
            imageID:'intlsolidarity', 
            caption:'Jimmy Herman leads a boycott of Salvadoran coffee to protest the El Salvadoran government’s sanctioned death squads, 1989 (ILWU Archives)'
        }
    ];

    


}]);