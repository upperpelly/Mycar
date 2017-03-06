//angular JS start
var mainApp1 = angular.module("mainApp1d", []);
mainApp1.controller(
				'myController1d',function($scope, $http) {
					$scope.firstForm = function() {
						alert("in first form");
						$('#first').removeClass('disabled');
				        $('#first1').attr('data-toggle','pill');
				        document.getElementById("first1").click();
				        //$('#menu1').show();
				        //$('a#first1').click();
					};
					
					$scope.secondForm = function() {
						alert("in second form");
						$('#second').removeClass('disabled');
				        $('#second1').attr('data-toggle','pill');
				        document.getElementById("second1").click();
				        //$('#second1').click();
				        //$('#menu2').show();
					};
					
					$scope.thirdForm = function() {
						alert("in third form");
						$('#third').removeClass('disabled');
				        $('#third1').attr('data-toggle','pill');
				        document.getElementById("third1").click();	        
					};
					
					

				});

//angular JS end




