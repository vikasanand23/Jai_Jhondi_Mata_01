angular.module('app').controller('involvedController', ['$scope', function($scope) {
    $scope.imgSide = "images/involved/involved_Side.jpg"
    $scope.title = "Volunteers do not necessarily have the time, they just have the heart.";
    $scope.involvedContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed finibus nisl a porttitor venenatis. Maecenas ultrices, nulla at ultrices pellentesque, ante ex porttitor justo, et fermentum velit nisl ac elit. Aliquam rutrum arcu nec elementum lacinia. Aliquam pretium pharetra nisl vitae semper. Pellentesque venenatis bibendum diam, sagittis tempor nulla sollicitudin sit amet. Donec in velit at metus placerat blandit. Morbi nec est tristique, sagittis nisi sed, blandit odio.Cras congue placerat mauris nec pellentesque. Nulla molestie lorem sit amet magna interdum, sit amet lobortis lorem accumsan. Nullam hendrerit vehicula libero sit amet finibus. Nam finibus urna aliquam blandit sodales. Aliquam at felis eget nulla laoreet tempor sit amet sed nisi. Quisque sit amet gravida tortor. Duis gravida hendrerit tortor eget placerat. Donec convallis leo ac risus semper pharetra. Morbi lobortis mi feugiat lectus auctor sollicitudin.";
	
	$scope.involvedLists = [
		{
			"volImg": "images/involved/volunteer.png",
			"name": "Volunteer", 
			"description":"Nam pulvinar purus ut risus faucibus sodales. Quisque tristique egestas nisi, a ultricies arcu mattis in. In libero est, lobortis nec ultrices ut, hendrerit accumsan ligula. Nunc vestibulum urna quis augue viverra tristique. Donec quis dolor nec lectus mollis pharetra. Curabitur mattis erat at erat egestas, id dapibus eros rutrum."
		},
		{
			"volImg": "images/involved/donation.png",
		 	"name": "Donation",
		 	"description":"Nam pulvinar purus ut risus faucibus sodales. Quisque tristique egestas nisi, a ultricies arcu mattis in. In libero est, lobortis nec ultrices ut, hendrerit accumsan ligula. Nunc vestibulum urna quis augue viverra tristique. Donec quis dolor nec lectus mollis pharetra. Curabitur mattis erat at erat egestas, id dapibus eros rutrum."
		},
		{
			"volImg": "images/involved/education.png",
			"name": "Education", 
			"description":"Nam pulvinar purus ut risus faucibus sodales. Quisque tristique egestas nisi, a ultricies arcu mattis in. In libero est, lobortis nec ultrices ut, hendrerit accumsan ligula. Nunc vestibulum urna quis augue viverra tristique. Donec quis dolor nec lectus mollis pharetra. Curabitur mattis erat at erat egestas, id dapibus eros rutrum."
		},
		{
			"volImg": "images/involved/helpingHand.png",
		 	"name": "Helping Others", 
			"description":"Nam pulvinar purus ut risus faucibus sodales. Quisque tristique egestas nisi, a ultricies arcu mattis in. In libero est, lobortis nec ultrices ut, hendrerit accumsan ligula. Nunc vestibulum urna quis augue viverra tristique. Donec quis dolor nec lectus mollis pharetra. Curabitur mattis erat at erat egestas, id dapibus eros rutrum."
		},
		{
			"volImg": "images/involved/library.png",
		 	"name": "Public Library", 
			"description":"Nam pulvinar purus ut risus faucibus sodales. Quisque tristique egestas nisi, a ultricies arcu mattis in. In libero est, lobortis nec ultrices ut, hendrerit accumsan ligula. Nunc vestibulum urna quis augue viverra tristique. Donec quis dolor nec lectus mollis pharetra. Curabitur mattis erat at erat egestas, id dapibus eros rutrum."},
		{
			"volImg": "images/involved/hunger.png",
		 	"name": "Help Hungry", 
			"description":"Nam pulvinar purus ut risus faucibus sodales. Quisque tristique egestas nisi, a ultricies arcu mattis in. In libero est, lobortis nec ultrices ut, hendrerit accumsan ligula. Nunc vestibulum urna quis augue viverra tristique. Donec quis dolor nec lectus mollis pharetra. Curabitur mattis erat at erat egestas, id dapibus eros rutrum."}

	]
}]);