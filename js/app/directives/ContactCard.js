function CardController($scope) {
	$scope.username = $scope.username.toLowerCase();
}

angular 
	.module('app')
	.controller('CardController', CardController);

function ContactCard() {
	return {
		scope: {
			name: '=',
			email: '=',
			phone: '=',
			username: '='
		},
		template: [
			'<div>',
				'<h4>Contact Card</h4>',
				'<label>Name:</label>',
				'{{ name }}',
				'<label>Email:</label>',
				'{{ email }}',
				'<label>Phone:</label>',
				'{{ phone }}',
				'<label>Username:</label>',
				'<span class="username">{{ username }}</span>', 
				//// can also make lowercase by doing this:
				//// '<span class="username">{{ username | lowercase }}</span>'
			'</div>'
		].join(''),
		restrict: 'E',
		controller: 'CardController as ctrl'
	};
}

angular
	.module('app')
	.directive('contactCard', ContactCard);