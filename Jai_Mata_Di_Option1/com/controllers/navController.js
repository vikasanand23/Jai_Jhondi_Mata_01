(function() {
    function navFunc($scope) {
        $scope.logoImage = "images/logo_colour.png";
        $scope.navButtons = ["Home", "About Us", "Programmes", "Success Stories", "Updates", "Get Involved", "Contact us"];
        $scope.btnActive = "Home";
        $scope.updateActive = function(navButton) {
            $scope.btnActive = navButton;
            console.log($scope.btnActive);
        };
		
		 $scope.myInterval = 3000;
		  $scope.slides = [
			{
			  image: 'images/carImg1.jpg',
				FigCaption: 'Jhondi Mata Temple'
			},
			{
			  image: 'images/carImg2.jpg',
				FigCaption: 'Jhondi Mata Temple'
			},
			{
			  image: 'images/carImg3.jpg',
				FigCaption: 'Hanuman Temple'
			},
			{
			  image: 'images/carImg4.jpg',
				FigCaption: 'Jhondi Mata Temple'
			},
			{
			  image: 'images/carImg5.jpg',
				FigCaption: 'Jhondi Mata Temple'
			},
			{
			  image: 'images/carImg6.jpg',
				FigCaption: 'Shiv Shankar Temple'
			},
			{
			  image: 'images/carImg7.jpg',
				FigCaption: 'Vaishno Mata Temple'
			},
			{
			  image: 'images/carImg8.jpg',
				FigCaption: 'NGO work in Progress'
			},
			{
			  image: 'images/carImg9.jpg',
				FigCaption: 'NGO work in Progress'
			},
			{
			  image: 'images/carImg10.jpg',
				FigCaption: 'NGO work in Progress'
			}
		  ];
    }
    angular.module("app").controller("navController", navFunc);
}());