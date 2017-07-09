angular.module('app').controller('programmeController', ['$scope', function($scope) {
    $scope.imgSide = "images/programme/programe_Side.jpg"
    $scope.title = "Give a helping hand to those who need it !!!";
    $scope.programeContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed finibus nisl a porttitor venenatis. Maecenas ultrices, nulla at ultrices pellentesque, ante ex porttitor justo, et fermentum velit nisl ac elit. Aliquam rutrum arcu nec elementum lacinia. Aliquam pretium pharetra nisl vitae semper. Pellentesque venenatis bibendum diam, sagittis tempor nulla sollicitudin sit amet. Donec in velit at metus placerat blandit. Morbi nec est tristique, sagittis nisi sed, blandit odio.Cras congue placerat mauris nec pellentesque. Nulla molestie lorem sit amet magna interdum, sit amet lobortis lorem accumsan. Nullam hendrerit vehicula libero sit amet finibus. Nam finibus urna aliquam blandit sodales. Aliquam at felis eget nulla laoreet tempor sit amet sed nisi. Quisque sit amet gravida tortor. Duis gravida hendrerit tortor eget placerat. Donec convallis leo ac risus semper pharetra. Morbi lobortis mi feugiat lectus auctor sollicitudin.";
	
	$scope.programmeLists = [
					{"volImg": "images/programme/prog1.png","name": "Hunger", "description":"Member"},
					{"volImg": "images/programme/prog2.png","name": "Child Education","description":"Member"},
					{"volImg": "images/programme/prog3.png","name": "Public Construction", "description":"Member"},
					{"volImg": "images/programme/prog4.png","name": "Public Awareness", "description":"Member"}
					
				]
}]);